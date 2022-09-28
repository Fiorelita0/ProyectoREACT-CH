import { BsCart4 } from "react-icons/bs";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import "./CartWidget.css";

const CartWidget = () => {
  const ctx = useContext(CartContext);
  return (
    <>
      {ctx.calcQty() !== 0 && (
        <button className="navbar-toggler" type="button" id="btnCarritoNav">
          <span>
            {ctx.calcQty()}
          </span>
        </button>
      )}
      <div>
        <BsCart4 className="carrito" />
      </div>
    </>
  );
};

export default CartWidget;
