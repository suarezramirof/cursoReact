import React from "react";
import "./css/App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Home from "./routes/Home";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./routes/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <div id="app">
        <BrowserRouter>
          <header>
            <nav>
              <NavBar />
            </nav>
          </header>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/productos" element={<ItemListContainer />} />
            <Route
              exact
              path={`/productos/:idCat`}
              element={<ItemListContainer />}
            />
            <Route
              exact
              path={`/productos/:idCat/:id`}
              element={<ItemDetailContainer />}
            />
            <Route exact path={"/carrito"} element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}
export default App;
