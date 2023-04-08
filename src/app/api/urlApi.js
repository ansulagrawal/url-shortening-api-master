import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const urlShortner = createApi({
  reducerPath: "urlShortner",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.shrtco.de/v2/" }),
  endpoints: builder => ({
    getShortenUrl: builder.query({
      query: (name) => {
        return `shorten?url=${name}`
      },
    }),
  }),
});

export const { useGetShortenUrlQuery } = urlShortner;
