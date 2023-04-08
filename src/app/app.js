import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { urlShortner } from "./api/urlApi";
import urlSlice from "./api/urlApi";

export const store = configureStore({
  reducer: {
    url: urlSlice,
    [urlShortner.reducerPath]: urlShortner.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(urlShortner.middleware),
});

setupListeners(store.dispatch);
