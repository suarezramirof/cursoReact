import React, { useState, useEffect } from "react";
import "./css/App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import listaProductos from "./data/items.json";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [productos, setProductos] = useState({});

  useEffect(() => {
    const lista = (elem) => {
      return new Promise((resolve, reject) => {
        if (typeof elem == "object") {
          setTimeout(() => resolve(elem), 2000);
        } else {
          reject("No hay productos disponibles");
        }
      });
    };
    lista(listaProductos)
      .then((res) => setProductos(res))
      .catch((res) => alert(res));
  }, []);

  return (
    <div id="app">
      <BrowserRouter>
        <header>
          <nav>
            <NavBar />
          </nav>
        </header>
        <Routes>
          <Route
            exact
            path="/"
            element={<ItemListContainer productos={productos} />}
          />
          <Route
            exact
            path="/category/:id"
            element={<ItemListContainer productos={productos} />}
          />
          <Route
            exact
            path="/item/:id"
            element={<ItemDetailContainer productos={productos} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
