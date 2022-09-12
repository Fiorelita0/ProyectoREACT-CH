import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const ItemCount = ({initial, stock}) => {
    const [contador, setContador]=useState (initial); //hook
    const [agregadoAlChango, setAgregadoAlChango]= useState (false)
    
    useEffect(() =>{
    console.log("Se ejecuto la compra");

    },[agregadoAlChango]);

    const sumar = () => {
        if(contador<stock)
        {setContador (contador +1)}
    }
    const restar = () => {
        if (contador > initial)
        {setContador (contador -1);}
    }
    const agregarAlChango = () => {
        setContador (contador)
        setAgregadoAlChango(!agregadoAlChango)
        console.log ("Se agrego al carrito " + (contador) + " productos")
    }
  return (
    <>
    <button onClick={() => sumar()}> + </button>
    <button onClick={() => restar()}> - </button>
    <span> {contador} </span>
    <button onClick={() => agregarAlChango()}> Agregar al Carrito </button>
    
    </>
  )
}

export default ItemCount