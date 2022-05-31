import { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import InfoPaises from "./Components/InfoPaises";
import ListadoPaises from "./Components/ListadoPaises";

function App() {
  const [count, setCount] = useState(0);
  const Ruta = useSelector((ruta) => ruta.Viajero.ruta);
  console.log(Ruta);

  return (
    <div className="App">
      <header>
        <h1>Prueba Tecnica Frontend</h1>
      </header>
      <nav>
        <h2>Ruta Recorrida :</h2>
        <div className="ruta-recorrida">
          {Ruta.RutaRecorrida.map((item, key) => {
            return <span key={key}> /{item}</span>;
          })}
        </div>
        <h2> Area Recorrida Recorrida : </h2>

        <span>{Ruta.AreaRecorrida} km</span>
      </nav>
      <div className="contenido-app">
        <div className="col-1">
          <h3>Listado de Paises</h3>
          <ListadoPaises />
        </div>

        <div className="col-2">
          <h3>Informacion de Paises</h3>
          <InfoPaises />
        </div>
      </div>
    </div>
  );
}

export default App;
