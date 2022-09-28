import { CartContext } from "./CartContext";
import { useContext, useState, useEffect } from "react";
import ProductoContainer from "./ProductoContainer";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const ctx = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const [comp, setComp] = useState(true);

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
          <button onClick={ctx.clear} className= "btn btn-primary"> Eliminar todos los productos</button>
          </div>
          <div>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <button type="button" className="btn btn-secundary">
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
              <div>
                {ctx.cartList.map((producto) => (
                  <ProductoContainer
                    key={producto.id}
                    product={producto}
                    removeItem={ctx.removeItem}
                  />
                ))}
              </div>
              <div>
                <p>
                  Total: ${ctx.finalPrecio()}
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    setLoading(false);
                  }}>
                  Crear Orden
                </button>
              </div>
            </>
          )}
        </> ) 
        :
      (
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
