import React from "react";
import "../css/ItemListContainer.css";
import { useParams } from "react-router-dom";
import ItemCard from "./ItemCard";

const ItemListContainer = ({ productos }) => {
  const seccion = useParams().id;
  if (seccion) {
    productos = productos[seccion];
  }
  if (typeof productos === "object" && Object.keys(productos).length > 0) {
    if (productos[0]) {
      return (
        <div className="itemListContainer">
          {productos.map((e) => (
            <ItemCard key={e["nombre"]} item={e} />
          ))}
        </div>
      );
    } else {
      return (
        <div className="itemListContainer">
          {Object.keys(productos).map((categoria) =>
            productos[categoria].map((producto) => (
              <ItemCard key={producto["nombre"]} item={producto} />
            ))
          )}
        </div>
      );
    }
  } else {
    return <div>Loading...</div>;
  }
};

export default ItemListContainer;
