import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../css/ItemDetailContainer.css";
import { CartContext } from "../context/CartContext";
import { ProductsContext } from "../context/ProductsContext";
import { getFirestore, getDoc, doc } from "firebase/firestore";

function ItemDetailContainer() {
  const { productos } = useContext(ProductsContext);
  const [producto, setProducto] = useState({});
  const [cantidad, setCantidad] = useState(1);
  const prod = useParams().id;
  const navigate = useNavigate();
  const id = productos.length
    ? productos.filter((elem) => elem.title === prod)[0].id
    : "";
  useEffect(() => {
    if (id !== "") {
      const db = getFirestore();
      const docRef = doc(db, "items", id);
      getDoc(docRef).then((snapshot) => {
        if (snapshot.exists()) {
          setProducto({ id: snapshot.id, ...snapshot.data() });
        }
      });
    }
  }, [id]);

  const { addItem } = useContext(CartContext);

  function aumentarCantidad() {
    if (cantidad < producto.stock) {
      setCantidad(Number(cantidad) + 1);
    } else {
      alert("No hay más stock");
    }
  }

  function disminuirCantidad() {
    setCantidad(cantidad >= 2 ? Number(cantidad) - 1 : 1);
  }

  return Object.keys(producto).length > 0 ? (
    <div className="item-detail">
      <h3 className="titulo-detail-item">{producto.title}</h3>
      <div className="img-desc-detail-item">
        {producto.descripcion[0] ? (
          <div className="descripcion-detail-item">
            <ul>
              {producto.descripcion.map((linea) => (
                <li key={linea}>{linea}</li>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}
        <img
          className="imagen-detail-item"
          src={producto.url}
          alt={producto.title}
        ></img>
      </div>
      <div className="footer-detail-item">
        <p className="precio-detail-item">
          Precio: ${producto.price.toLocaleString()}
        </p>
        <p className="stock-detail-item">
          {producto.stock
            ? `Stock: ${producto.stock} ${
                producto.stock > 1 ? "unidades" : "unidad"
              }`
            : "Sin stock"}{" "}
        </p>
        <div className="separador-detail"></div>
        <div
          className={
            producto.stock
              ? "item-detail-controls"
              : "item-detail-controls-hidden"
          }
        >
          <div>
            <button className="btn-cant" onClick={disminuirCantidad}>
              -
            </button>
            <span>&nbsp;{cantidad}&nbsp;</span>
            <button className="btn-cant" onClick={aumentarCantidad}>
              +
            </button>
          </div>
          <button
            className="btn-agregar"
            onClick={() => {
              addItem(
                producto.title,
                cantidad,
                producto.url,
                producto.category,
                producto.price,
                producto.stock,
                producto.id
              );
              navigate("/productos");
            }}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading</div>
  );
}

export default ItemDetailContainer;
