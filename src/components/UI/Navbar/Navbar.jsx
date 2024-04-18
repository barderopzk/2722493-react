import React from 'react'
import { ItemNavbar } from '../ItemNavbar/ItemNavbar'
import './Navbar.css'

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <ItemNavbar content='Quienes somos' style='red' />
        <ItemNavbar content='Acerca de nosotros' style='blue' />
        <ItemNavbar content='FAQ' style='green' />
      </ul>
    </nav>
  )
}
