import React from 'react'
import imagen1 from "./../img/img-barberos/imagen1.jpg"
import imagen2 from "./../img/img-barberos/imagen2.jpg"
import imagen3 from "./../img/img-barberos/imagen3.jpg"

const barberos = [
    {
        nombre: "Jones",
        img: imagen1,
        exp: "Experinecia de 5 años.",
        des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod minima vitae, reiciendis soluta inventore repellendus mollitia nemo possimus recusandae fuga aperiam, tempore ea sunt. Culpa beatae veritatis accusamus. Necessitatibus, similique?"
    },
    {
        nombre: "Jacob",
        img: imagen2,
        exp: "Experiencia de 20 años ",
        des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus laudantium pariatur blanditiis perspiciatis officia, voluptatum dolorem aperiam dolores odit maxime illum, tempora architecto nisi aliquam odio ullam ducimus consectetur corporis."
    },
    {
        nombre: "Jack",
        img: imagen3,
        expr: "Experiencia de 10 años",
        des: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores sunt nemo quas beatae odit in. Sit iure maiores, aperiam quo dolorem doloremque minus maxime soluta accusamus impedit ipsam eos ratione."
    }

]


const GaleriaBarberos = () => {
  return (
    <div className='card-barber'>
        {
            barberos.map((barber)=>(
                <section>
                    <img src={barber.img} />
                    <h3>{barber.nombre}</h3>
                    <p>{barber.exp}</p>
                    <p>{barber.des}</p>
                </section>
            ))
        }
    </div>
  )
}

export default GaleriaBarberos