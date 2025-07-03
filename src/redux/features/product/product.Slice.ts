/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

const initialState: any = {
  data: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const selectProduct = (state: RootState) => state.product;

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;
