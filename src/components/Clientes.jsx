import React from 'react'
import Header from './Header'
import GaleriaClientes from './GaleriaClientes'
import imagen5 from "./../img/img-clientes/imagen5.jpg"

const Clientes = () => {
  return (
    <div>
        <Header/>
        <img src={imagen5}  className='img-clientes'/>
        <h1 className='titulo'>
          Nuestros Clientes
        </h1>
        <center><h2>Nuestros clientes siempre se van satisfechos y alegres con su corte y nuestro trato</h2></center>
        <GaleriaClientes/>
    </div>
  )
}

export default Clientes