import React from 'react'
import Header from './Header'
import GaleriaBarberos from './GaleriaBarberos'
import imagen4 from "./../img/img-barberos/imagen4.jpg"

const Barberos = () => {
  return (
    <div>
        <Header/>
        <img src={imagen4} className='img-barber'/>
        <h1 className='titulo'>
          Nuestros Barberos
        </h1>
       <center><h2 className='subtitulo'>
          Ellos son espacialista en el cabello con un amplio conocimiento en este campo </h2> </center> 
       
        <GaleriaBarberos/>
    </div>
  )
}

export default Barberos