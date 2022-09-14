import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './ItemCount.css';

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
    <button className='btn btn-rosa' onClick={() => restar()}> - </button>
    <span className='number' > {contador} </span>
    <button className='btn btn-rosa' onClick={() => sumar()}> + </button>
    <button className='block btn btn-rosalight' onClick={() => agregarAlChango()}> Agregar al Carrito </button>
    
    </>
  )
}

export default ItemCount