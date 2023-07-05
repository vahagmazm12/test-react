import { Character } from "../types";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface CharacterState {
  count: number;
  next: string;
  previous: string;
  results: Character[];
}

export const characterApi = createApi({
  reducerPath: "characterApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://swapi.dev/api/",
  }),
  tagTypes: ["Character"],
  endpoints: (builder) => ({
    getPeople: builder.query<CharacterState, string>({
      query: () => "/people",
    }),
    getPerson: builder.query({
      query: (id: string) => `/people/${id}`,
    }),
  }),
});

export const { useGetPeopleQuery, useGetPersonQuery } = characterApi;
