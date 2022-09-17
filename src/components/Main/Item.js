import React from 'react'
import "./Item.css"

const Item = ({id, title, imagen, marca, precio, descripcion, stock, categoria}) => {
    console.log(title)
  return (
    <div>

    <div className='id' >{id}</div>
    <div>
       <h1>{title}</h1>
    </div>
    <div>
      <img src={imagen} alt={title} />
    </div>
    <div>{marca}</div>
    <div>{categoria}</div>
    <div>{precio}</div>
    <div>{descripcion}</div>
    <div>{stock}</div>
    
    </div>
  )
}

export default Item