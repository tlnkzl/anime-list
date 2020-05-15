import React from 'react';
import './App.css';
import StickyFooter from './components/footer/Footer';
import Navbar from './components/header/Navbar';
import Home from './components/'

function App() {
  return (
    <>
      <Navbar/>
        <Home></Home>
      <StickyFooter/>
    </>
  );
}

export default App;
