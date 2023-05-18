import React from 'react'
import buzz from "./../img/img-productos/buzz.jpg"
import fade from "./../img/img-productos/fade.jpg"
import militar from "./../img/img-productos/militar.png"
import mohicano from "./../img/img-productos/mochicano.jpg"
import francesaClara from "./../img/img-productos/francesa-clara.jpg"
import francesaOscura from "./../img/img-productos/francesa-oscura.jpg"

const productos =[
    {
      nombre: "Buzz",
      img: buzz
    },
    {
      nombre: "Fade",
      img: fade
    },
    {
      nombre: "Militar",
      img: militar
    },
    {
      nombre: "Mohicano",
      img: mohicano
    },
    {
      nombre: "Francesa Clara",
      img: francesaClara
    },
    {
        nombre:"Francesa Oscura",
        img: francesaOscura
    },
    {
      nombre:"Mullet",
      img: mulle
    },
    {
    nombre:"Pompadour",
    img: francesaOscura
    },
    {
  nombre:"Media melena",
  img: francesaOscura
    }
  ]

const GaleriaProductos = () => {
  return (
    <div className='card-productos'>
        {
            productos.map((corte)=>(
                <section >
                    <img src={corte.img}/>
                    <h2>{corte.nombre}</h2>
                </section>
            ))
        }
    </div>
  )
}

export default GaleriaProductos