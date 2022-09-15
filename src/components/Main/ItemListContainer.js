import ItemCount from "./ItemCount";
import { useEffect, useState } from 'react'
import ItemList from "./ItemList";
import products from "../../utils/products";
import fetchData from "../../utils/fetchData";

const ItemListContainer = ({greeting}) => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData(2000, products)
    .then(result => setData(result))
    .catch (err => console.log(err));

  }, []);

  console.log(data);
  return (
    <>
    <div>
      <div>{greeting}</div>
      <div>
        <ItemCount initial={1} stock={15} />
      </div>
      <div>
        <ItemList data={data}/> 
      </div>
    </div>
    </>
  );
};
export default ItemListContainer;
