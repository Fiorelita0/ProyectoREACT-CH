import React from "react";
import Item from "./Item";

const ItemList = ({data}) => {
    console.log (data)
  return (
    <div>
      {
      data.map((product)=> (
        <Item 
        key={product.id} 
        id={product.id} 
        title={product.title} 
        marca={product.marca} 
        categoria={product.categoria}
        imagen={product.imagen}
        descripcion={product.descripcion}
        precio={product.precio}
        stock={product.stock}
        />
      ))}
    </div>
  )
}

export default ItemList
