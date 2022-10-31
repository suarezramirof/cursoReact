import { useState } from "react";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const PruebaFire = (category, id) => {
  const [productos, setProductos] = useState([]);
  // const [productosFiltrados, setProductosFiltrados] = useState([])
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    const q = category ? query(itemsCollection, where("category", "==", category)) : itemsCollection;
    getDocs(q).then((snapshot) => {
      const arrproductos = snapshot.docs.map((doc) => {
        return {id: doc.id,...doc.data()}
      });
      setProductos(arrproductos);
    });
    // getDocs(q).then((snapshot) => {
    //   const arrproductos = snapshot.docs.map((doc) => {
    //     return {id: doc.id,...doc.data()}
    //   });
    //   // setProductosFiltrados(arrproductos);
    // });
  return productos;
};

export default PruebaFire;
