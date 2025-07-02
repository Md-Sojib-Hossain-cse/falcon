import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

type TProductCard = {
  color: string | null;
  size: "XXL" | "XL" | "L" | "M" | "S" | "XS" | null | undefined;
  quantity: number;
};

const initialState: TProductCard = {
  color: null,
  size: null,
  quantity: 0,
};

const productCardSlice = createSlice({
  name: "productCard",
  initialState,
  reducers: {
    quantityIncrement: (state, action) => {
      if (state.quantity < action.payload.stock) {
        state.quantity = state.quantity + action.payload.incrementBy;
      }
    },
    quantityDecrement: (state, action) => {
      if (state.quantity > 0) {
        state.quantity = state.quantity - action.payload;
      }
    },
    setSize: (state, action) => {
      state.size = action.payload;
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const selectProductCard = (state: RootState) => state.productCard;

export const { quantityIncrement, quantityDecrement, setSize, setColor } =
  productCardSlice.actions;

export default productCardSlice.reducer;
