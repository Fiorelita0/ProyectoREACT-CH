import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

//Calcular cantidad de productos
  const calcQty = () => {
    let qtys = cartList.map(item => item.qty);
    return qtys.reduce((acumulador, qty) => acumulador += qty, 0);
}
//Precio final por producto
const prodPrecio= (id)=>{ 
    let precioPorCant =cartList.find((prod) => prod.id === id);
    return (precioPorCant.qty * precioPorCant.precio)
}
//Precio Subtotal
const subPrecio= () =>{
  let precioPorCant =cartList.map(item => prodPrecio(item.id));
  return precioPorCant.reduce((acumulador, precioPorProd) => acumulador + precioPorProd, 0);
}
const descuento =() =>{
  let descuentoTotal= cartList.map(item => (prodPrecio(item.id) * 0.20));
  return descuentoTotal.reduce((acumulador, precioPorProd) => acumulador + precioPorProd, 0)
}
//Precio Final
const finalPrecio = () => {
    let precioTotal =cartList.map(item => (prodPrecio(item.id) -  prodPrecio(item.id) * 0.20));
    return precioTotal.reduce((acumulador, precioPorProd) => acumulador + precioPorProd, 0);
}
//Verifica si el producto existe en el cartList
const isInCart = (id) =>  { return cartList.find(producto => id === producto.id);}

//Añadir cantidad a un producto
const addCantCart = (producto, qty) => {
    return cartList.map(item => item.id === producto.id ? { ...item, qty: item.qty + qty } : item)
};
//Añadir un producto a la cartList
  const addItem = (producto, qty) => {
    //Los tres puntitos son para que vaya uno abajo del otro
    if (isInCart(producto.id) === undefined) {
        producto.qty = qty;
        setCartList([...cartList, producto]);
    } else setCartList(addCantCart(producto, qty))
  };
//Eliminar todos los productos
  const clearAll = () => {
    setCartList([]);
  };
//Eliminar un producto
  const removeItem = (id) => {
    setCartList(cartList.filter((item) => item.id !== id));
  };
  return (
    <CartContext.Provider value={{ cartList, addItem, clearAll, removeItem, isInCart, addCantCart, calcQty, prodPrecio, finalPrecio, descuento, subPrecio}}>
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
