import { BrincarPais } from "./Methods";
import { createSlice } from "@reduxjs/toolkit";
let StateInitial = {
  estado: [],
  pais: {},
  ruta: {
    AreaRecorrida: 0,
    RutaRecorrida: [],
  },
};

export const Rutas = createSlice({
  initialState: StateInitial,
  name: "Viajero",
  reducers: {
    GetPaises: (state, actions) => {
      BrincarPais(state.estado, actions.payload);
    },

    GetInfoPais: (state, actions) => {
      if (typeof actions.payload === "object") {
        BrincarPais(state.ruta.RutaRecorrida, actions.payload.name);
        state.pais = actions.payload;
        if (state.pais.area !== undefined) {
          state.ruta.AreaRecorrida += actions.payload.area;
        }
      } else if (typeof actions.payload === "string") {
        let find = state.estado[0].find(
          (item) => item.alpha3Code === actions.payload
        );

        if (find === undefined) {
          state.pais = {
            name: "No hay informacion de este pais",
            callingCodes: ["sin informacion"],
            population: "sin informacion",
          };
        } else {
          state.pais = find;
          BrincarPais(state.ruta.RutaRecorrida, find.name);
          if (find.area !== undefined) {
            state.ruta.AreaRecorrida += find.area;
          }
        }
      }
    },
  },
});
