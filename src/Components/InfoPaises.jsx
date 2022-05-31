import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetInfoPais } from "../LOGIC/Actions";

function InfoPaises() {
  const Estado = useSelector((item) => item.Viajero.pais);
  const dispatch = useDispatch();

  if (Object.keys(Estado).length < 1) {
    return <p>Clickee un Pais</p>;
  }
  return (
    <div className="table-info">
      <table>
        <tr>
          <th>Nombre</th>
          <td>{Estado.name}</td>
        </tr>
        <tr>
          <th>Poblacion</th>
          <td>{Estado.population}</td>
        </tr>
        <tr>
          <th>Codigo telefonico</th>
          <td>+ {Estado.callingCodes[0]}</td>
        </tr>
        <tr>
          <th>Area</th>
          <td>
            {" "}
            {Estado.area === undefined ? "Area no Calculada" : Estado.area}
          </td>
        </tr>
      </table>
      <ul className="info-paises">
        <h4>Fronteras</h4>
        {Estado.borders ? (
          <div className="div-fronteras ">
            {Estado.borders.map((item, key) => (
              <li>
                <button
                  key={key}
                  onClick={() => {
                    dispatch(GetInfoPais(item));
                  }}
                >
                  {item}
                </button>
              </li>
            ))}
          </div>
        ) : (
          <h4>sin fronteras</h4>
        )}
      </ul>
    </div>
  );
}

export default InfoPaises;
