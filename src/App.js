import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Carousel from './components/Carousel/Carousel';
import Card from './components/Card/Card';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <header className="App-header">
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
      </header>
      <Card
        title={'Hello, im a component'}
        description={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
        img = {'https://ar.all.biz/img/ar/catalog/21448.jpeg'}
        btnText = {'Ver mas'}
      />

    </div>
  );
}

export default App;
