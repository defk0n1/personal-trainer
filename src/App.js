import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Hero from './components/Hero';
import './Navbar.css';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Carousel></Carousel>
    </>
  );
}

export default App;
