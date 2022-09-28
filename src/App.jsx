import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Incorporar componente
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/NavBar/Cart"
import ItemDetailContainer from "./components/Main/ItemDetailContainer";
import ItemListContainer from "./components/Main/ItemListContainer";
import CartContextProvider from "./components/NavBar/CartContext";

const App = () => {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element= {<ItemListContainer greeting="Bienvenido Usuario"/>} />
        <Route path="/categoria/:id" element={<ItemListContainer />}/>
        <Route path="/detalle/:id" element={<ItemDetailContainer />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
