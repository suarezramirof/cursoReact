import React from "react";
import "../css/ItemCard.css";
import { Link } from "react-router-dom";

function ItemCard({ item }) {
  const categoria = item.category;

  return (
    <div className="itemCard">
      <h4>{item["title"]}</h4>
      <img src={item["url"]} alt={item["title"]} />
      <p>
        {item["stock"]
          ? "Stock disponible: " + item["stock"] + (item.stock > 1 ? " unidades" : "unidad")
          : "No hay stock disponible"}
      </p>
      <button>
        <Link
          className="boton-link"
          to={`/productos/${categoria}/${item["title"]}`}
        >
          Ver detalle
        </Link>
      </button>
    </div>
  );
}

export default ItemCard;
