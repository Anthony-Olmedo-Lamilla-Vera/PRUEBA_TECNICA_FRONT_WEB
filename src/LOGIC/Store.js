import { configureStore } from "@reduxjs/toolkit";

import { Rutas } from "./Slices";

export const Store = configureStore({
  reducer: {
    Viajero: Rutas.reducer,
  },
});
