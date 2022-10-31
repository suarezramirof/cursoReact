import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../css/Cart.css";
const CartItemCard = ({ index }) => {
  const { cart, deleteItem, increaseQty, decreaseQty } =
    useContext(CartContext);
  return (
    <>
      <div className="cart-grid">
        <div className="cart-item">
          <img
            className="img-cart"
            src={cart[index].url}
            alt={cart[index].nombre}
          />
          <div className="cart-item-description">
            <h4>{cart[index].item}</h4>
            <p>{cart[index].cat}</p>
          </div>
        </div>

        <p>{`$${cart[index].price.toLocaleString()}`}</p>

        <div className="cart-qty-controls">
          <button
            className="cart-qty-button"
            onClick={() => decreaseQty(index)}
          >
            -
          </button>
          <h5 className="cart-item-counter">{cart[index].cant}</h5>
          <button
            className="cart-qty-button"
            onClick={() => increaseQty(index)}
          >
            +
          </button>
        </div>

        <div className="cart-cell">
          <strong>{`$${(cart[index].price * cart[index].cant).toLocaleString()}`}</strong>
          <div>
            <button className="btn-eliminar" onClick={() => deleteItem(index)}>X</button>
          </div>
        </div>
      </div>
      <div className="separador"></div>
    </>
  );
};
export default CartItemCard;
