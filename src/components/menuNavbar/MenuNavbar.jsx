import React from 'react'
import { Link } from 'react-router-dom'
import "./menuNavbar.css"

export const MenuNavbar = () => {
  return (
    <nav className='menu_navbar'>
        <ul>
          <Link to="/"><li>Home </li> </Link> |
          <li>Games </li>|
          <Link to="/sales"><li>Sales </li></Link> |
          <li>About us</li>
        </ul>
    </nav>
  )
}
