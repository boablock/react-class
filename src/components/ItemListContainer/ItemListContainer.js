import React, {useContext} from 'react'
import { CarritoContext } from '../Context/CarritoContext';
import Item from '../Item/Item';
import './ItemListContainer.css'



const ItemListContainer = () => { //--> addCarrito no lo uso, solo lo paso.
  const {products} = useContext(CarritoContext); 
  return (
    <div className='itemListContainer'>
        {products.map((item,index) => (
            <Item item = {item} key = {index} /> //--> ItemListContainer RECIBE addCarrito pero no lo uso, lo pasa a Item unicamente.
           
        ))}
    </div>
  )
}

export default ItemListContainer