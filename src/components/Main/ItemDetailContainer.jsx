import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loading from "./LazyLoading";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../utils/firebaseConfig'

const ItemDetailContainer = () => {
  const [comp, setComp] = useState(true);
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setComp(true);
    async function fetchData() {
      const docSnap = await getDoc(doc(db, 'products', id))
      let product = { id: id, ...docSnap.data() }
      if (product.title !== undefined) {
          setData(product)
          setComp(false);
      }
  }
  fetchData()
}, [id])

  return (
    <>
      <div>
        <div>
          {comp ? (
            <Loading />
          ) : (
            <div>
              <ItemDetail producto={data} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ItemDetailContainer;
