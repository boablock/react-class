import React,{useContext} from "react";
import { CarritoContext } from "../Context/CarritoContext"; //-> todo lo que tiene export defaul, se importa sin llave. Lo que tiene solo export, se tiene que importar con llaves
import "./Navbar.css";


const Navbar = () => {

  const {carrito} = useContext(CarritoContext); 
  // const { carrito } = props; //--> no se recibe mas por props.
  // carrito = array de productos 
  return (
    <nav className="navbar">
      <h1>Carrito</h1>
      <span>Inconito setCarrito {carrito.lenght}</span> 
    </nav>
  );
};

export default Navbar;
