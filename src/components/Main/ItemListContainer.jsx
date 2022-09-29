import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loading from "./LazyLoading";
import {db} from '../../utils/firebaseConfig';
import { collection, getDocs, where, query } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [comp, setComp] = useState(true);
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setComp(true);
    async function fetchData() {
      if (id) {
          const q = query(collection(db, "products"), where('categoria', '==', id))
          const querySnapshot = await getDocs(q);
          const products = querySnapshot.docs.map(item => ({
              id: item.id,
              ...item.data()
          }))
          setData(products)
       
      } else {
          const querySnapshot = await getDocs(collection(db, "products"));
          const products = querySnapshot.docs.map(item => ({
              id: item.id,
              ...item.data()
          }))
          setData(products)
      }
      setComp(false)
  }
  fetchData()
}, [id])

useEffect(() => {
  return (()=> {
    setData([]);
  })
}, []);
  return (
    <>
      <div>
        <div>{greeting}</div>
        <div>
          {comp ? (
            <Loading />
          ) : (
            <>
              <section className="container-lg containerProducts ">
                <ItemList data={data} />
              </section>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default ItemListContainer;
