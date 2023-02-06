import logo from './logo.svg';
import './App.css';

import { Router, Routes, Route, Link } from 'react-router-dom';
import Navbar  from './component/Navbar';
import Hero from './component/Hero';



function App() {
  return ( 

    <>
    <Navbar/>
    <Hero/>
    </>

  );
}

export default App;
