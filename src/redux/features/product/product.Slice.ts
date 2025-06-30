import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

type TProduct = {
  color: string | null;
  size: "XXL" | "XL" | "L" | "M" | "S" | "XS" | null;
  quantity: number;
};

const initialState: TProduct = {
  color: null,
  size: null,
  quantity: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    quantityIncrement: (state, action) => {
      state.quantity = state.quantity + action.payload;
    },
    quantityDecrement: (state, action) => {
      if (state.quantity > 0) {
        state.quantity = state.quantity - action.payload;
      }
    },
  },
});

export const selectProduct = (state: RootState) => state.product;

export const { quantityIncrement, quantityDecrement } = productSlice.actions;

export default productSlice.reducer;
