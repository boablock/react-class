import React, {useContext} from 'react'
import { CarritoContext } from '../Context/CarritoContext';
import { ItemCount } from '../ItemCount/ItemCount';
import './Item.css'

const Item = (props) => {
    const {item } = props;
    const {nombre, marca, modelo, stock} = item;

    const {addCarrito} = useContext(CarritoContext)

    // {
    //     nombre: "zapatillas",
    //     marca: "adidas",
    //     model: "nemisis",
    //     stock: 3
    //   }
  return (
    <div className='item mb-2 '>
        <h1>Item</h1>
        <h4>Nombre : {nombre}</h4>
        <h4>Marca: {marca}</h4>
        <h4>Modelo: {modelo}</h4>
        <h4>Stock{stock}</h4>
        <ItemCount
            initialValue = {3}
            addCarrito = {addCarrito} //--> Item recibe a addCarrito pero TAMPOCO lo uso, se lo pasa a ItemCount
            item = {item}
        />
    </div>
  )
}

export default Item