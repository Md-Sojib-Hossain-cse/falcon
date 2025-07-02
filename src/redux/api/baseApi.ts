import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://157.230.240.97:9999/api/v1" }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: "/categories",
        method: "GET",
      }),
      providesTags: ["categories"],
    }),
    getProducts: builder.query({
      query: () => ({
        url: "/shop/products",
        method: "GET",
      }),
      providesTags: ["products"],
    }),
    getSingleProduct: builder.query({
      query: (slug) => ({
        url: `/product/${slug}`,
        method: "GET",
      }),
      providesTags: ["products"],
    }),
  }),
  tagTypes: ["products", "categories"],
});

export const {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetSingleProductQuery,
} = baseApi;
