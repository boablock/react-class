import { createContext, useState } from "react";
import CarritoContextProvider from "./components/Context/CarritoContext";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    //--> Navbar recibe carrito para luego mostrar el lenght
    <CarritoContextProvider>
      <Navbar />
      <ItemListContainer />
    </CarritoContextProvider>
  );
}

export default App;
