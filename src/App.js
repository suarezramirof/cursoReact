import React from 'react';
import './css/App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar'

function App () {
  return(
    <div id="app">
      <header>
        <nav>
          <NavBar />
        </nav>
      </header>
      <main className="main">
        <ItemListContainer greeting="Hola, esta es mi App!" />
      </main>
    </div>
  )
}
export default App;