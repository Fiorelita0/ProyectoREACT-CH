import { CartContext } from "./CartContext";
import { useContext, useState, useEffect } from "react";
import {
  serverTimestamp,
  doc,
  setDoc,
  collection,
  updateDoc,
  increment,
} from "firebase/firestore";
import ProductoContainer from "./ProductoContainer";
import { db } from "../../utils/firebaseConfig";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const ctx = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const [comp, setComp] = useState(true);

  const crearOrden = async () => {
    const itemsOrden = ctx.cartList.map((item) => ({
      id: item.id,
      title: item.title,
      price: item.precio,
      quantity: item.qty,
    }));
    let orden = {
      buyer: {
        name: "Fiorella Yao Quispe",
        phone: 1155865100,
        email: 'fiorequispe0@gmail.com',
      },
      items: itemsOrden,
      date: serverTimestamp(),
      total: ctx.finalPrecio(),
    };
    const newOrden = doc(collection(db, "ordenes"));
    await setDoc(newOrden, orden);

    ctx.cartList.forEach(async (item) => {
      const itemRef = doc(db, "products", item.id);

      await updateDoc(itemRef, {
        stock: increment(-item.qty),
      });
    });
    ctx.removeItem();
    alert("Compra realizada con exito! Su pedido es:" + newOrden.id);
  };
  useEffect(() => {
    ctx.cartList.length === 0 ? setComp(true) : setComp(false);
  }, [ctx.cartList]);

  return (
    <div>
      {loading ? (
        <>
          <div>
            <h1>Tu carrito</h1>
          </div>
          <div className="display-flex">
            <div>
              <button onClick={ctx.clearAll} className="btn-clear btn btn-pink">
                Eliminar todos los productos
              </button>
            </div>
            <div>
              <Link to="/" style={{ textDecoration: "none" }}>
                <button type="button" className="btn-top btn btn-secundary">
                  Seguir comprando
                </button>
              </Link>
            </div>
          </div>
          {comp ? (
            <div>
              <h2>No hay productos agregados</h2>
            </div>
          ) : (
            <>
              <div className="flex">
                <div>
                  {ctx.cartList.map((producto) => (
                    <ProductoContainer
                      key={producto.id}
                      product={producto}
                      removeItem={ctx.removeItem}
                    />
                  ))}
                </div>
                <div className="orden">
                  <h3 className="title-pedido">SU PEDIDO</h3>
                  <p className="parrafo">Subtotal: ${ctx.subPrecio()} </p>
                  <p className="parrafo">Descuento: ${ctx.descuento()} </p>
                  <h3 className="total-pedido">Total: ${ctx.finalPrecio()}</h3>
                  <button
                    type="button"
                    className="btn-pedido btn btn-primary"
                    onClick={() => {
                      setLoading(false);
                      crearOrden();
                    }}
                  >
                    Crear Orden
                  </button>
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <div>
            <h1>Cargando Compra...</h1>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
