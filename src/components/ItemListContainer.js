import React, { useEffect, useState } from "react";
import "../css/ItemListContainer.css";
import { useParams } from "react-router-dom";
import ItemCard from "./ItemCard";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const category = useParams().idCat;
  const id = window.location.pathname;
  let location = false;
  if (id.includes("productos")) {
    location = true;
  }

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    const q = category
      ? query(itemsCollection, where("category", "==", category))
      : itemsCollection;
    getDocs(q).then((snapshot) => {
      setProductos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, [category]);

  return (
    <>
      <h1 className="titulo-seccion">
        {location ? (category ? category : "Nuestros productos") : ""}
      </h1>
      <div className="itemListContainer">
        {productos.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default ItemListContainer;
