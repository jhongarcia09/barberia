import Header from './Header'
import registro from "../registros.json"

const Barberos = () => {
  return (
   <section>
    <Header/>
    <section className='container'>
    {
        registro.map((registro)=>(
          //eslint-disable-next-line react/jsx-key
          <section className='card'>
            <img src={registro.imagen} />
            <p>{registro.nombre}</p>
            <p>{registro.duracion}</p>
            <p>{registro.precio}</p>
          </section>
        ))
}
    </section>
   </section>
    
  )
}

export default Barberos
