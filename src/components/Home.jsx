import React from 'react'
import Header from './Header'
import logotipo from './../img/logotipo.avif'
import img1 from './../img/img1.jpg'

const Home = () => {
  return (
    <div>
        <Header/>
        <h1 className='titulo'>Barberia JW</h1> 
        <section className='cuerpo-home'>
          <section className='texto-home'>
            <p>
            El origen de las barberías se remonta a la edad de bronce. En aquellos tiempos, hace más de 3.500 años, se usaban piedras afiladas a modo de cuchilla. Los egipcios modernizaron los métodos, y esculturas encontradas demuestran que el afeitado del cuerpo entero era un ritual regular entre los farones y la alta sociedad
            </p>
            <img src={img1} alt="img"/>
          </section>
          <imgn src={logotipo} alt="img"/>
        </section>
    </div>
  )
}

export default Home