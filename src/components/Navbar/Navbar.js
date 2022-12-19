import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
  <ul className='navLink-container'>
    <li>
      <NavLink   className={'navLink'} to='/'>Home</NavLink>
    </li>
    <li>
      <NavLink className={'navLink'}  to='checkout'>Checkout</NavLink>
    </li>
    <li>
      <NavLink className={'navLink'} to='cart'>Cart</NavLink>
    </li>
  </ul>
  )
}

export default Navbar