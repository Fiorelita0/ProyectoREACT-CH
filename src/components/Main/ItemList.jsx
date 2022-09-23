import React from "react";
import Item from "./Item";
import "./ItemList.css"

const ItemList = ({data}) => {
    console.log (data)
  return (
    <div className="d-flex">
      {
      data.map((product)=> (
        <Item 
        key={product.id} 
        id={product.id} 
        title={product.title} 
        marca={product.marca} 
        categoria={product.categoria}
        imagen={product.imagen}
        peso={product.peso}
        descripcion={product.descripcion}
        precio={product.precio}
        stock={product.stock}
        />
      ))}
    </div>
  )
}

export default ItemList
