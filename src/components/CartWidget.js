import React, { useContext } from "react";
import img_carrito from "../img/carrito-de-compras.png";
import { NavLink } from "react-router-dom";
import "../css/CartWidget.css";
import { CartContext } from "../context/CartContext";

function CartWidget({ vinculo = "#", target = "_blank" }) {
  const cantidadTotal = useContext(CartContext).lista;
  return (
    <NavLink to={"/carrito"}>
      <div className="carrito-contador">
        <img
          className="imgcarrito"
          src={img_carrito}
          alt="carrito de compras"
        />
        <p className="contador">{cantidadTotal ? cantidadTotal : ""}</p>
      </div>
    </NavLink>
  );
}

export default CartWidget;