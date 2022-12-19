import React from 'react'
import './item.css'
import {Link} from 'react-router-dom'

const Item = (props) => {

    const {name,id} = props 

  return (
    <Link to={`/item/detail/${id}`}>
    <div className='item-container' style={{margin:'10px 0', boder:'1px solid black'}}>
        <h1>{name}</h1>
        <h4>{id}</h4>
    </div>
    </Link>
  )
}

export default Item