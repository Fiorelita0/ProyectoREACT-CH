import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Incorporar componente
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/Main/ItemDetailContainer";
import ItemListContainer from "./components/Main/ItemListContainer";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element= {<ItemListContainer greeting="Bienvenido Usuario"/>} />
        <Route path="/categoria/:id" element={<ItemListContainer />}/>
        <Route path="/detalle/:id" element={<ItemDetailContainer />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
