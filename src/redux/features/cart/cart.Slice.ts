/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

const initialState: any = {
  data: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addOnCart: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    removeFromCart: (state, action) => {
      if (state.data.length) {
        state.data = state.data.filter = (singleProduct: any) =>
          singleProduct?.slug !== action?.payload?.slug;
      }
    },
  },
});

export const selectCart = (state: RootState) => state.cart;

export const { addOnCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
