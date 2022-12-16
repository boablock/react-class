import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Carousel from './components/Carousel/Carousel';
import Card from './components/Card/Card';
import Counter from './components/Counter/Counter';
import { useState,useEffect } from 'react';
import config from './config.json'
import Spinner from './components/Spinner/Spinner';

function App() {

  const [cards,setCards] = useState([])

  const [loading, setLoading] = useState(false)


    //-----PROMISES STATES-------

    // PENDING || PENDIENTE =>

    // FULLFILLED => COMPLETADA || EXITOSO 

    // REJECTED => RECHAZADA ! 

      const getCards = ()=>{
        setLoading(true);
        const operation = new Promise ((resolve, reject)=>{
          setTimeout(() => {
            resolve({
              status:200,
              data:config.cards
            })
          }, 4000);
          // reject('Something is wrong')
        })
      
        operation.then((result) => { 
          setCards(result.data) //--> una vez que se resualva la peticion, guardar la respuesta en el useState (setCards(result.data)) 
          console.log(result);
        })
        .catch((err)=>{
          console.log(err,'ERROR EN EL CATCH');
          alert('something is wrong');
        })
        .finally(()=>{ //--> se ejecuta asi la respuesta sea resolve o reject; no importa como termine la promesa, se ejecuta lo que se                       acalare en el finally ( asi la respuesta sea resolve o reject). 
          setLoading(false);
        })
      }

      useEffect(() => {
        getCards()
      
        return () => {
          setCards()
        }
      }, [])
      
  return (
    <div className="App">
    
    {loading && <Spinner/>}  

      <div className='d-flex justify-content-around'>
      {!loading && cards.length > 0
            ? cards.map(
                (
                  { titulo, descripcion, img, btnText, btnClassName },
                  index
                ) => (
                  <Card
                    key={index}
                    titulo={titulo}
                    descripcion={descripcion}
                    img={img}
                    btnText={btnText}
                    btnClassName={btnClassName}
                    // Fiufiu={Navbar}
                  />
                )
              )
            : !loading &&
              cards.length < 1 && (
                <h1 className="text-danger text-center">UPS FALLO LA CARGA</h1>
              )}
      </div>
    </div>
  );
}

export default App;
