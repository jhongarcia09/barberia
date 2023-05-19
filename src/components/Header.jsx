import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav>
            <ul className='ul'>
                <Link to={'/'} >Home</Link>
                <Link to={'/barberos'}>Barberos</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Header