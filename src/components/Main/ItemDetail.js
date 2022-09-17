import React from "react";
import { useState } from "react";
import ItemCount from "./ItemCount.js"
import "./ItemDetail.css"

const ItemDetail = ({ producto }) => {
  const [contador, setContador] = useState(0);
  const onAdd = (count) => {
    alert(`Se añadio ${count} productos`);
    setContador(count);
  };
  return (
    <div>
      <div id={producto.id}>
        <div >
          <img src={producto.imagen} alt={producto.title} />
        </div>
        <div >
          <p >{producto.title}</p>
          <p >Stock disponible: {producto.stock} </p>
          <p>
            Precio : <span>${producto.precio}</span>
          </p>
          <p>
            Marca: <span className="brandDetail">{producto.marca}</span>
          </p>
          <p>{producto.descripcion}</p>
          <div className="countDetail">
          {contador === 0 ? <ItemCount stock={producto.stock} initial={contador} onAdd={onAdd}/> :
                        <button type="button" className="btn btn-original">Ver Carrito</button>
                }
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
