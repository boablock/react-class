
import './App.css';
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom' //imrr -> importa todos los componenetes necesarios de react router dom. Agregar 'Routes'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Error404 from './components/404/Error404';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>  
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/item/detail/:id' element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
