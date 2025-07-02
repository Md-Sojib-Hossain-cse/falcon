import { configureStore } from "@reduxjs/toolkit";
import productCardReducer from "./features/product/productCard.Slice";
import productReducer from "./features/product/product.Slice";
import cartReducer from "./features/cart/cart.Slice";
import { baseApi } from "./api/baseApi";

export const store = configureStore({
  reducer: {
    productCard: productCardReducer,
    product: productReducer,
    cart: cartReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
