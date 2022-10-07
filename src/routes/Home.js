import React from "react";
import ItemListContainer from "../components/ItemListContainer";
function Home({productos}) {
    return (
        <div><ItemListContainer productos={productos}/></div>
    )
}

export default Home;