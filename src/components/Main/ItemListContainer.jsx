import React from "react";
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import ItemList from "./ItemList";
import fetchData from "../../utils/fetchData";
import products from "../../utils/products";

const ItemListContainer = ({greeting}) => {
  const [data, setData] = useState([]);
  const {id}= useParams();

  useEffect(() => {
    if (id){
      fetchData(1000, products.filter(item =>item.categoria === id))
      .then(result => setData(result))
      .catch (err => console.log(err));
    }
    else{
      fetchData(2000, products)
    .then(result => setData(result))
    .catch (err => console.log(err));
  }
},[id]);

  return (
    <>
    <div>
      <div>{greeting}</div>
      <div>
        <ItemList data={data}/> 
      </div>
    </div>
    </>
  );
};
export default ItemListContainer;
