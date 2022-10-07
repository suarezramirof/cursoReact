import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../css/ItemDetailContainer.css'

function ItemDetailContainer({ productos }) {
  const prod = useParams().id;
  const [producto, setProducto] = useState({});
  useEffect(() => {
    Object.keys(productos).map((categoria) =>
      productos[categoria].map((item) =>
        item["nombre"] === prod ? setProducto(item) : null
      )
    );
  }, [prod, productos]);
  if (Object.keys(producto).length > 0) {
    return (
      <div className="item-detail">
        <h3 className="titulo-detail-item">{producto.nombre}</h3>
        <div className="img-desc-detail-item">
          {producto.descripcion[0] ? <div className="descripcion-detail-item">
            <ul>
            {producto.descripcion.map((linea) => <li key={linea}>{linea}</li>)}
            </ul>
          </div> : ""}
          <img className="imagen-detail-item" src={producto.url} alt={producto.nombre}></img>
        </div>
        
        <div className="footer-detail-item">
          <p className="precio-detail-item">Precio: ${producto.precio}</p>
          <button>Agregar al carrito</button>
        </div>
      </div>
    );
  }
}

export default ItemDetailContainer;
