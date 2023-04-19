//
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { GetKpisResponse } from "./types";

// createApi() is a function that takes an object with a single property, reducerPath.
// The reducerPath property is a string that will be used to name the generated reducer.

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL
    }),
    reducerPath: 'main',
    tagTypes: ["Kpis"],
    endpoints: (build) => ({
        getKpis: build.query<Array<GetKpisResponse>, void>({
            query: () => "kpi/kpis/",
            providesTags: ["Kpis"]
        }),
    })
});

export const {useGetKpisQuery} = api;