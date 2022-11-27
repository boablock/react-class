



import React from 'react'
import './Card.css'

const Card = (props) => {
    const {title,description,img,btnText} = props // is an object
  return (
<div className="card">
    <img src={img}  className="card-img-top" alt="..." />
  <div className="card-header">
    Featured
  </div>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href="#" className="btn btn-primary">{btnText}</a>
  </div>
</div>
  )
}

export default Card