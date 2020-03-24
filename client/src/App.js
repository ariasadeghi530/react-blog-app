import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import axios from 'axios';



function App() {

  useEffect(()=> {
   
  }, [])
  
  return(
    <>
    <Navbar />

    <Card />

    </>
  )
}

export default App;
