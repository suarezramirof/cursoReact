import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import CartItemCard from "../components/CartItemCard";
import Brief from "../components/Brief";
import "../css/Cart.css";

const Cart = () => {
  const carrito = useContext(CartContext);
  const [comprar, setComprar] = useState(false);
  const onComprar = () => {
    setComprar(!comprar);
  };
  const { cart } = carrito;
  const total = cart.reduce((total, e) => total + e.price * e.cant,0)
  return cart.length > 0 ? (
    <div>
      <div className="cart-body">
        <h1 className="cart-title">Carrito</h1>
        <div>
          <div className="cart-grid cart-header">
            <p>Item</p>
            <p>Precio</p>
            <p style={{textAlign: "center"}}>Cantidad</p>
            <p style={{textAlign: "center"}}>Total</p>
          </div>
          <div>
            {cart.map((e, index) => (
              <CartItemCard key={e.item} index={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="order-summary">
        <span>Total:&nbsp;</span><span className="total">{`$${total.toLocaleString()}`}</span>
        </div>
      <div className="order-form">
        {comprar ? <Brief total={total}/> : ""}
        <button onClick={onComprar}>
          {!comprar ? "Comprar carrito!" : "Cancelar"}
        </button>
      </div>
    </div>
  ) : (
    "No hay items en el carrito aún"
  );
};
export default Cart;
