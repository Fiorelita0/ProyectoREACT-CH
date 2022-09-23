import React from "react";
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import products from "../../utils/products";
import fetchData from "../../utils/fetchData";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  const {id}= useParams();

  useEffect(() => {
    if (id){ fetchData(2000, products.find(item =>item.id === parseInt(id)))
    .then(result => setData(result))
    .catch (err => console.log(err))}
    else{
      fetchData(2000, products)
    .then(result => setData(result))
    .catch (err => console.log(err));
  }
  }, [id]);


  console.log(data);
  return (
    <>
      <div>
        <div>
          <ItemDetail producto={data} />
        </div>
      </div>
    </>
  );
};

export default ItemDetailContainer;

