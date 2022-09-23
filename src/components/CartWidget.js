import React from 'react';
import img_carrito from '../img/carrito-de-compras.png'
import '../css/CartWidget.css'

function CartWidget({vinculo = "#", target = "_blank"}) {
  return (
    <a href={vinculo} target={target}>
      <img className="imgcarrito" src={img_carrito} alt="carrito de compras" />
    </a>
  )
}

export default CartWidget;