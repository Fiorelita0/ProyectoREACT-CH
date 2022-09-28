import React from "react";
import { useState, useContext } from "react";
import ItemCount from "./ItemCount.js";
import "./ItemDetail.css";
import {Link} from "react-router-dom";
import { CartContext } from '../NavBar/CartContext'

const ItemDetail = ({ producto }) => {
  const [contador, setContador] = useState(0);
  const cont = useContext(CartContext);

  const onAdd = (count) => {
    alert(`Se añadio ${count} productos`);
    setContador(count);
    cont.addItem(producto, count);
  };
  return (
    <div>
      <div id={producto.id}>
        <div>
          <img
            className="img-product"
            src={producto.imagen}
            alt={producto.title}
          />
 
        </div>
        <div>
          <h1>{producto.title}</h1>
          <p>Stock disponible: {producto.stock} </p>
          <p>Peso de la unidad: {producto.peso}</p>
          <p>
            Marca: <span>{producto.marca}</span>
          </p>
          <p>
            Precio : <span>${producto.precio}</span>
          </p>
          <p>{producto.descripcion}</p>
          <div>
            {contador === 0 ? (
              <ItemCount
                stock={producto.stock}
                initial={contador}
                onAdd={onAdd}
              />
            ) : (
              <Link to= "/cart">
              <button type="button" className="btn btn-original">
                Ver Carrito
              </button>
              </Link>
            )}
          </div>
        </div>
      </div>
      
    </div>
    
  );
};

export default ItemDetail;
