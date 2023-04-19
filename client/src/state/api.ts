//
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { GetKpisResponse, GetProductsResponse, GetTransactionResponse } from "./types";

// createApi() is a function that takes an object with a single property, reducerPath.
// The reducerPath property is a string that will be used to name the generated reducer.

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL
    }),
    reducerPath: 'main',
    tagTypes: ["Kpis", "Products", "Transactions"],
    endpoints: (build) => ({
        getKpis: build.query<Array<GetKpisResponse>, void>({
            query: () => "kpi/kpis/",
            providesTags: ["Kpis"]
        }),
        getProducts: build.query<Array<GetProductsResponse>, void>({
            query: () => "product/products/",
            providesTags: ["Products"]
        }),
        getTransactions: build.query<Array<GetTransactionResponse>, void>({
            query: () => "transaction/transactions/",
            providesTags: ["Transactions"]
        }),
    })
});

export const {useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery} = api;