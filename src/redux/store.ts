import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/product/product.Slice";
import cartReducer from "./features/cart/cart.Slice";
import productDraftCardReducer from "./features/product/productDraftCard";
import selectorReducer from "./features/cart/selector.Slice";
import { baseApi } from "./api/baseApi";

export const store = configureStore({
  reducer: {
    productDraftCard: productDraftCardReducer,
    product: productReducer,
    cart: cartReducer,
    selector: selectorReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
