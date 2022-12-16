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
  const[loading, setLoading] = useState(false)


    // const cards = [
    //     {
    //         title:'Hello, im a component',
    //         description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //         img:'https://ar.all.biz/img/ar/catalog/21448.jpeg',
    //         btnText:'Comprar',
    //         btnClassName: 'btn btn-danger fs-1' 
    //     },
    //     {
    //         title:'Hello, im another',
    //         description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //         img:'https://imagenes.elpais.com/resizer/JY_bIHi9LoJ-PF8YVIoVNF1OVGQ=/1960x1103/ep01.epimg.net/elpais/imagenes/2014/08/22/videos/1408718239_108049_1408721679_noticia_fotograma.jpg',
    //         btnText:'Comprar',
    //     },
    //     {
    //         title:'Hello, im another',
    //         description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    //         img:'https://img-aws.ehowcdn.com/750x400p/cdn-write.demandstudios.com/upload//0000/300/00/6/60306.jpg',
    //         btnText:'Ver mas',
    //     },
        
    // ]

    //-----PROMISES STATES-------

    // PENDING || PENDIENTE =>

    // FULLFILLED => COMPLETADA || EXITOSO 

    // REJECTED => RECHAZADA ! 

      const getCards = ()=>{
        setLoading(true);
        const operation = new Promise ((resolve, reject)=>{
          // setTimeout(() => {
          //   resolve({
          //     status:200,
          //     data:config.cards
          //   })
          // }, 2000);
          reject('Something is wrong')
        })
      
        operation.then((result) => { 
          setCards(result.data) //--> una vez que se resualva la peticion, guardar la respuesta en el useState (setCards(result.data)) 
          console.log(result);
        },err => {
          console.log(err + 'Error');
        }).catch((err)=>{
          console.log(err);
          alert('something is wrong')
        }).finally(()=>{ //--> se ejecuta asi la respuesta sea resolve o reject; no importa como termine la promesa, se ejecuta lo que se                       acalare en el finally ( asi la respuesta sea resolve o reject). 
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
        {!loading ? cards.length > 0 ? cards.map(
          ({title,description,img,btnText,btnClassName},index) => (
              <Card
              key ={index} // atributo unico para identificar el objeto en el arreglo (posicion en el caso de index); tmb se puede generar  un atributo id en cada uno de ellos. 
              title={title}
              description ={description}
              img={img}
              btnText ={btnText}
              btnClassName ={btnClassName}
              // Fiufiu = {Navbar}
              />
            )
          )} 
      </div>
        <Spinner/>

      {/* <Carousel/> */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Counter nombre='Componente 1'/>
      {/* <Counter nombre='Componente 2'/>
      <Counter nombre='Componenete 3'/> */}
      <div className='d-flex justify-content-around'>
    
        {/* { cards.map(({title,description,img,btnText,btnClassName},index) => (
            <Card
            key ={index} // atributo unico para identificar el objeto en el arreglo (posicion en el caso de index); tmb se puede generar un atributo id en cada uno de ellos. 
            title={title}
            description ={description}
            img={img}
            btnText ={btnText}
            btnClassName ={btnClassName}
            Fiufiu = {Navbar}
            />)
        )} */}

      {/* <Card
        title={'Hello, im a component'}
        description={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
        img = {'https://ar.all.biz/img/ar/catalog/21448.jpeg'}
        btnText = {'Ver mas'}
        btnClassName = 'btn btn-danger fs-1'
      />
        <Card
        title={'Hello, im another component'}
        description={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
        img = {'https://imagenes.elpais.com/resizer/JY_bIHi9LoJ-PF8YVIoVNF1OVGQ=/1960x1103/ep01.epimg.net/elpais/imagenes/2014/08/22/videos/1408718239_108049_1408721679_noticia_fotograma.jpg'}
        btnText = {'Borrar'}
      />
        <Card
        title={'Hello, im the third component'}
        description={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
        img = {'https://img-aws.ehowcdn.com/750x400p/cdn-write.demandstudios.com/upload//0000/300/00/6/60306.jpg'}
        btnText = {'Comprar'}
      /> */}
      
      </div>
 
    </div>
  );
}

export default App;
