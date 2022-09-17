import React from "react";
import { useState, useEffect } from "react";
import products from "../../utils/products";
import fetchData from "../../utils/fetchData";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(2000, products[2])
    .then(result => setData(result))
    .catch (err => console.log(err));

  }, []);


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

