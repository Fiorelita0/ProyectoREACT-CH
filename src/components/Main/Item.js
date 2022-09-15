import React from 'react'

const Item = ({id, title, imagen, marca, precio, description, category}) => {
    console.log(title)
  return (
    <div>

    <div>{id}</div>
    <div>
       <h1>{title}</h1>
    </div>
    <div>
      <img src={imagen} alt={title} />
    </div>
    <div>{marca}</div>
    <div>{precio}</div>
    <div>{description}</div>
    <div>{category}</div>

    </div>
  )
}

export default Item