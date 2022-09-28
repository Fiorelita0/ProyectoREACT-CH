import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, title, imagen, marca, precio, stock, categoria, peso }) => {
  console.log(title);
  return (
    <div className="block">
      <div className="carta">
        <div className="id">{id}</div>
        <div>
          <Link to={`/detalle/${id}`}  style={{ textDecoration: 'none' }}>
            <h1 className="card-title">{title}</h1>
          </Link>
        </div>
        <div>
          <Link to={`/detalle/${id}`}>
            <img className="img-producto" src={imagen} alt={title} />
          </Link>
        </div>
        <div>Marca : {marca}</div>
        <div>Categoria: {categoria}</div>
        <div>Peso de la unidad: {peso}</div>
        <div> ${precio}</div>
        <div>Stock : {stock}</div>
      </div>
    </div>
  );
};

export default Item;
