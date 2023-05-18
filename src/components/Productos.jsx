import React from 'react'
import Header from './Header'
import GaleriaProductos from './GaleriaProductos'

const Productos = () => {
  return (
    <div>
        <Header/>
        <h1 className='titulo'>
        Nuestros cortes
        </h1>
        <center><h2 className='subtitulo'>
          Estos son los cortes que manejamos
        </h2></center>
        <GaleriaProductos />
    </div>
  )
}

export default Productos