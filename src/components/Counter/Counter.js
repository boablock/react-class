import React,{useState} from 'react'

const Counter = (props) => {

    // const[contador] = React.useState
    const {nombre} = props; 
    // gracias al state, los componenetes van a tener memoria propia. are independent on each other. Each component have your own state. It hasyour own memory, it can storage/safe his own data. Con el estado, se puede guardar distinta informacion en distinto componente. 
    // localStorage es almacenamiento del navegador, state es almacenamiento del codigo, de la propia app.
    let [contador, setContador] = useState(0) // generacion automatica de estado generico (useState). Antes se debe importa arriba. 

    console.log(contador); // 0

    // setContador = 1; 

    const sumar = () => setContador(contador + 1); 
    const restar = () => {
        if(contador > 0){
        setContador(contador - 1); 
        }
    }
  return (
    <div>
        <h1>{nombre}</h1>
        <h2>Valor del contador es: {contador}</h2>
        <button onClick={sumar}>sumar</button>
        <button onClick={restar}>restar</button>
        <hr/>
    </div>
  )
}

export default Counter