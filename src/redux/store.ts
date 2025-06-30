import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/product/product.Slice";
import { baseApi } from "./api/baseApi";

export const store = configureStore({
  reducer: {
    product: productReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
