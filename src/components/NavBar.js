import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/NavBar.css';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <li className="navbar-item">
          <NavLink className="navbar-link" to={"/"}>Home</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink className="navbar-link" to={"/category/laptops"}>Laptops</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink className="navbar-link" to={"/category/tablets"}>Tablets</NavLink>
        </li>
      </ul>
      <CartWidget />
    </div>
  )
}

export default NavBar;