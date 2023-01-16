import React, { createContext, useState } from "react";

export const CarritoContext = createContext("");



const CarritoContextProvider = ({ children }) => {
  const products = [
    {
      nombre: "botas",
      marca: "nike",
      model: "Air Max 90",
      stock: 5,
    },
    {
      nombre: "zapatillas",
      marca: "adidas",
      model: "nemisis",
      stock: 3,
    },
  ];

  const [carrito, setCarrito] = useState([]);

  const addCarrito = (product) => { 
    //--> vendria a ser como un push
    setCarrito([...carrito, product]);
  };

  return (//--> toda info que desarrolle aca, quienes la van a consumir? los hijo ahre

    <CarritoContext.Provider value={{ products, addCarrito, carrito }}>
      {children}
      
    </CarritoContext.Provider>
  );
};

export default CarritoContextProvider; //--> exportacion del componente por default
