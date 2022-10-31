import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/NavBar.css";
import CartWidget from "./CartWidget";

function NavBar() {
  const [clase, setClase] = useState("navbar-item accordeon-child-hidden");
  const show = (hover, cat) =>
    setClase(
      hover
        ? "navbar-item accordeon-child-visible"
        : "navbar-item accordeon-child-hidden"
    );

  return (
    <div className="navbar">
      <ul>
        <li className="navbar-item">
          <NavLink
            className="navbar-link"
            to={"/"}
          >
            Home
          </NavLink>
        </li>
        <ul
          className="navbar-accordeon"
          onMouseOver={() => show(true)}
          onMouseLeave={() => show(false)}
        >
          <li className="navbar-item accordeon-father">
            <NavLink className="navbar-link" to={"/productos"}>
              Productos
            </NavLink>
          </li>
          <li className={clase}>
            <NavLink className="navbar-link" to={"/productos/laptops"}>
              Laptops
            </NavLink>
          </li>
          <li className={clase}>
            <NavLink className="navbar-link" to={"/productos/tablets"}>
              Tablets
            </NavLink>
          </li>
        </ul>
      </ul>
      <CartWidget />
    </div>
  );
}

export default NavBar;
