import React from "react";
import ItemListContainer from "../components/ItemListContainer";
function Home({productos}) {
    return (
        <>
        <h1 className="titulo-home">La tienda online</h1>
        <ItemListContainer />
        </>
    )
}

export default Home;