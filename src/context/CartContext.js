import React, { createContext, useEffect, useState } from "react";
export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const oldCart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
  const [cart, setCart] = useState(oldCart);
  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addItem(item, cant, url, cat, price, stock, id) {
    if (isInCart(item)) {
      if (
        window.confirm(
          "El producto ya está en el carrito. ¿Desea actualizar la cantidad?"
        )
      ) {
        setCart(
          cart.map((e) =>
            e.item === item ? { item, cant, url, cat, price, stock, id } : e
          )
        );
      } else {
        
      }
    } else {
      setCart([...cart, { item, cant, url, cat, price, stock, id }]);
      
    }
  }

  function isInCart(item) {
    return [...cart].find((elem) => elem.item === item) ? true : false;
  }

  function cantidadItems(arr) {
    return arr.reduce((acum, elem) => acum + elem.cant, 0);
  }

  function deleteItem(index) {
    const newCart = [].concat(cart);
    newCart.splice(index, 1);
    setCart(newCart);
  }

  function increaseQty(index) {
    const newCart = [].concat(cart);
    if (newCart[index].cant < newCart[index].stock) {
      newCart[index].cant++;
      setCart(newCart);
    } else {
      alert("No hay más stock");
    }
  }

  function decreaseQty(index) {
    const newCart = [].concat(cart);
    newCart[index].cant =
      newCart[index].cant > 1 ? newCart[index].cant - 1 : newCart[index].cant;
    setCart(newCart);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        lista: cantidadItems(cart),
        deleteItem,
        increaseQty,
        decreaseQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
