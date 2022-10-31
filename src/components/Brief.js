import React, { useState, useContext } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Brief = ({total}) => {
  const { cart } = useContext(CartContext);
  const [form, setForm] = useState({
    name: "",
    surname: "",
    tel: "",
    mail: "",
  });
  const [mail, setMail] = useState("");
  const changeHandler = (ev) => {
    setForm({ ...form, [ev.target.name]: ev.target.value });
  };

  const changeHandlerMail = (ev) => {
    setMail(ev.target.value);
  }
  const navigate = useNavigate();
  const confirmarCompra = (ev) => {
    ev.preventDefault();
    const today = new Date(Date.now());
    const date = today.toUTCString();
    const items = cart.map((e) => ({title: e.item, id: e.id, qty: e.cant, price: e.price}));
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, {
      buyer: form,
      items: items,
      date: date,
      total: total
    }).then((snapshot) => {
      alert(`Su número de orden es ${snapshot.id}`);
      navigate("/")
    });
  };
  return (
    <div>
      <form className="form" onSubmit={confirmarCompra}>
        <div className="form-field">
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={changeHandler}
          />
        </div>
        <div className="form-field">
          <label htmlFor="surname">Apellido</label>
          <input
            id="surname"
            name="surname"
            value={form.surname}
            onChange={changeHandler}
          />
        </div>
        <div className="form-field">
          <label htmlFor="tel">Teléfono</label>
          <input
            type="tel"
            id="tel"
            name="tel"
            value={form.tel}
            onChange={changeHandler}
          />
        </div>
        <div className="form-field">
          <label htmlFor="mail">E-Mail</label>
          <input
            type="email"
            id="mail"
            name="mail"
            value={form.mail}
            onChange={changeHandler}
          />
        </div>
        <div className="form-field">
          <label htmlFor="confirm-mail">Confirmar E-Mail</label>
          <input
            type="email"
            id="confirm-mail"
            name="confirm-mail"
            value={mail}
            onChange={changeHandlerMail}
          />
        </div>
        <div className="mail-verify">{mail !== form.mail ? "Verifique el email" : " "}</div>
        <button disabled={mail && mail === form.mail ? "" : "x"}>Confirmar compra</button>
      </form>
    </div>
  );
};

export default Brief;
