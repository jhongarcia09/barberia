import React from 'react'
import imagen1 from "./../img/img-clientes/imagen1.jpg"
import imagen2 from "./../img/img-clientes/imagen2.jpg"
import imagen3 from "./../img/img-clientes/imagen4.jpg"


const clientes = [
    {
        nombre: "Manuel",
        img: imagen1,
        tiempo: "Trata de generar empatia con nuestros clientes",

    },
    {
        nombre: "Camilo",
        img: imagen2,
        tiempo: "Hace lo mejor posible para que qeueden satisfechos"
    },
    {
        nombre: "Mario",
        img: imagen3,
        tiempo:"Trata a sus clientes con el mayor respeto "
    }
    
]

const GaleriaClientes = () => {
  return (
    <div className='card-cliente'>
        {
            clientes.map((cliente)=>(
                <section>
                    <img src={cliente.img}/>
                    <h3>{cliente.nombre}</h3>
                    <p>{cliente.tiempo}</p>
                </section>
            ))
        }
    </div>
  )
}

export default GaleriaClientes