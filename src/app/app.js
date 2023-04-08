import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { urlShortner } from "./api/urlApi";

export const store = configureStore({
  reducer: {
    [urlShortner.reducerPath]: urlShortner.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(urlShortner.middleware),
});

setupListeners(store.dispatch);
