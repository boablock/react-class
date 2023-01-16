import React, { useState } from "react";
import './ItemCount.css'
export const ItemCount = (props) => {
  const { item, initialValue, addCarrito } = props;

  const [count, setCount] = useState(initialValue);
  const { stock } = item;

  const increase = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  };

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };



  const product = {
    ...item,
    cantidad: count,
  };

  return ( //--> ItemCoun finalimente es el que usa la funcion addCarrito, en el boton Add to cart
    <div className="itemCount">
      <button onClick={increase}>Sumar</button>
      <h1>{count}</h1>
      <button onClick={decrease}>Restar</button>
      <br/>
      <br/>
      <button onClick={() => addCarrito(product)}>Add to cart </button> 
    </div>
  );
};
