

//RAFCE

import React from 'react'
import Button from '../UI/Button' //--> Button SI ESTA IMPORTADO
import './Card.css'

const Card = (props) => {

  // console.log(props);
  const {title,description,img,btnText,btnClassName,Fiufiu} = props // is an object || Navbar NO SE IMPORTO, SE RECIBIO POR PROPS DESDE EL PAPA, EL PAPA LO IMPORTO (APP.JS)
  return (
<div className="card" style={{width:'18rem'}}>
    <img src={img}  className="card-img-top" alt="..." />
  <div className="card-header">
    Featured
  </div> 
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <Button btnText= {btnText} btnClassName = {btnClassName}/>
  </div>
  <Fiufiu/> 
</div>
  )
}

export default Card