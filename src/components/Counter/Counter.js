import React,{useEffect, useState} from 'react'

const Counter = (props) => {

    // const[contador] = React.useState
    const {nombre} = props; 
    // gracias al state, los componenetes van a tener memoria propia. are independent on each other. Each component have your own state. It hasyour own memory, it can storage/safe his own data. Con el estado, se puede guardar distinta informacion en distinto componente. 
    // localStorage es almacenamiento del navegador, state es almacenamiento del codigo, de la propia app.
    let [contador, setContador] = useState(0) // generacion automatica de estado generico (useState). Antes se debe importa arriba. Haciendo control espacio al final de useState me sufiere la importacion.
    // console.log(contador); // 0

    // setContador = 1; 

    const sumar = () => setContador(contador + 1); 
    const restar = () => {
        if(contador > 0){
        setContador(contador - 1); 
        }
    }
    // CICLO DE VIDA DE LOS COMPONENTES
    // 3 ETAPAS DEL CICLO DE VIDA DE UN COMPONENTE (POR DEFECTO TODOS LOS COMPONENETES TIENEN LOS 3)
      // MONTAR || CARGAR 
      // CHANGE || CAMBIOS --> CUANDO SUCEDE CAMBIOS EN EL COMPONENTE (POR EJEMPLO EN EL ESTADO).
      // DISMOUNT || DESMONTAR --> MUERE EL COMPONENTE

      // useEffect(() => {
      //   first
      
      //   return () => {
      //     second
      //   }
      // }, [third])
      

      useEffect(() => {
        //Montaje // cuando termina de cargar
        console.log('El componente esta listo'); // se muestra epenas se carga

        if(contador > 0){
          console.log('contador es mayor a 0');
        }else{
          console.log('contador es menor o igual a 0');
        }
        
        if(contador === 3){
          alert('Contador llego a 3')
        }
        return () => {
        // Dismount //  cuando muere
        console.log('El componenete murio ');
        }
      }, [
        //Cuando sucede algun cambio  (entre los corchetes se colocan estados o variables a los cuales deberiamos estar atentos)
        contador,
      ])
      




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