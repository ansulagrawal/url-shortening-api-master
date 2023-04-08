import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const urlSlice = createSlice({
  name: "urlSlice",
  initialState: { result: [], inputUrl: [] },
  reducers: {
    addUrl: (state, action) => {
      state.inputUrl = [...state.inputUrl, action.payload];
    },
  },
  extraReducers: builder => {
    builder
      .addMatcher(urlShortner.endpoints.getShortenUrl.matchPending, state => {
        state.loading = true;
      })
      .addMatcher(urlShortner.endpoints.getShortenUrl.matchFulfilled, (state, action) => {
        state.loading = false;
        state.result = [...state.result, action.payload];
      })
      .addMatcher(urlShortner.endpoints.getShortenUrl.matchRejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const urlShortner = createApi({
  reducerPath: "urlShortner",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.shrtco.de/v2/" }),
  endpoints: builder => ({
    getShortenUrl: builder.query({
      query: name => {
        return `shorten?url=${name}`;
      },
      onQueryStarted: (curent, { dispatch, getState, cancelRequest }) => {
        const urls = getState()?.url?.inputUrl;
        if(curent.length && urls.includes(curent)){
          cancelRequest();
        }
        else {
          dispatch(urlSlice.actions.addUrl(curent));
        }
      },
    }),
  }),
});

export default urlSlice.reducer;

export const { useLazyGetShortenUrlQuery } = urlShortner;
