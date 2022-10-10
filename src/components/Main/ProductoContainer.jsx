import { useContext } from "react";
import { CartContext } from "./CartContext";
import "./ProductoContainer.css";

function ProductContainer({ product, removeItem }) {
  const ctx = useContext(CartContext);
  return (
    <div className="producto" id={product.id}>
      <div className="display-flex">
        <img src={product.imagen} alt={product.title} className="img-prod" />
        <p className="title-prod">{product.title}</p>
        <p className="prod-precio">
          {product.qty} unidades / ${product.precio} c/u
        </p>
        <p className="prod-total">Total: ${(ctx.prodPrecio(product.id))} </p>
        <div className="btn-remove">
          <button onClick={() => {removeItem(product.id)}}type="button" className="button btn btn-pink">
            Eliminar producto
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductContainer;
