import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetInfoPais, GetPaises } from "../LOGIC/Actions";
import axios from "axios";
import { useLocation } from "react-router-dom";

function ListadoPaises() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function Info() {
      await axios
        .get("https://restcountries.com/v2/regionalbloc/usan")
        .then((data) => {
          return dispatch(GetPaises(data.data));
        });
    }
    Info();
  }, []);

  const selector = useSelector((data) => data.Viajero);

  if (selector.estado.length < 1) {
    return <p>Cargando ...</p>;
  }

  return (
    <>
      <ul className="Listado-paises">
        {selector.estado[0].map((item) => {
          return (
            <li
              className={`${
                item.name === selector.pais.name && "seleccionado"
              }`}
              onClick={() => {
                dispatch(GetInfoPais(item));
              }}
              key={item.name}
            >
              <img src={item.flag} alt="" />
              <p>{item.name}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListadoPaises;
