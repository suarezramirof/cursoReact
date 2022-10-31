import React, { createContext, useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

export const ProductsContext = createContext();

export function ProductsContextProvider({children}) {
    const [productos,setProductos] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        getDocs(itemsCollection).then((snapshot) => {
          setProductos(snapshot.docs.map((doc) => ({ id: doc.id, title: doc.data().title })));
        });
      }, []);
      return (
        <ProductsContext.Provider value={{productos}}>
            {children}
        </ProductsContext.Provider>
      )
}