import React from 'react';
import '../css/NavBar.css'
import CartWidget from './CartWidget'

function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <NavBarItem titulo="Inicio" vinculo="https://google.com" />
        <NavBarItem titulo="Productos" />
        <NavBarItem titulo="Acerca de" />
        <NavBarItem titulo="Ayuda" vinculo="https://www.google.com/search?q=help" />
      </ul>
      <CartWidget />
    </div>
  )
}

function NavBarItem({vinculo = "#", target = "_blank", titulo}) {
  return (
    <li className="navbar-item">
      <a className="navbar-link" href={vinculo} target={target}>{titulo}</a>
    </li>
  )
}

export default NavBar;