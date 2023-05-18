import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav>
            <ul className='ul'>
                <li><Link to={'/'} className='link' >Home</Link></li>
                <li><Link to={'/productos'} className='link'>Cortes</Link></li> 
                <li><Link to={'/clientes'} className='link'>Clientes</Link></li>
                <li><Link to={'/barberos'} className='link'>Barberos</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header