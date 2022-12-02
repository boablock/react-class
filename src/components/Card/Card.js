

//RAFCE

import React from 'react'
import Button from '../UI/Button'
import './Card.css'

const Card = (props) => {
    const {title,description,img,btnText,btnClassName} = props // is an object
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
</div>
  )
}

export default Card