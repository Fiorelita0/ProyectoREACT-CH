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
        imagen={product.imagen}
        descripcion={product.description}
        precio={product.precio}
        categoria={product.category}
        />
      ))}
    </div>
  )
}

export default ItemList
