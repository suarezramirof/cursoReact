import React from "react";
import "../css/ItemCard.css";
import { Link } from "react-router-dom";
function ItemCard({ item }) {
  return (
    <div className="itemCard">
      <h4>{item["nombre"]}</h4>
      <img src={item["url"]} alt={item["nombre"]} />
      <p>
        {item["stock"]
          ? "Stock disponible: " + item["stock"] + " unidades"
          : "No hay stock disponible"}
      </p>
      <button>
        <Link
          className="boton-link"
          to={`/item/${item["nombre"]}`}
          state={{ item: item }}
        >
          Ver detalle
        </Link>
      </button>
    </div>
  );
}

export default ItemCard;
