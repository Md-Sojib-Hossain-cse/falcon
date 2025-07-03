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
      const newMerchant = action.payload.merchantInfo;
      const newProduct = action.payload.productInfo;

      const existingMerchantIndex = state.data.findIndex(
        (item: any) => item.merchantInfo.id === newMerchant.id
      );

      if (existingMerchantIndex !== -1) {
        // Merchant exists → push product into their productInfo array
        state.data[existingMerchantIndex].productInfo.push(newProduct);
      } else {
        // New merchant → push new object
        state.data.push({
          merchantInfo: newMerchant,
          productInfo: [newProduct],
        });
      }
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

export const selectTotalProducts = (state: RootState) =>
  state.cart.data.reduce((total: number, merchant: any) => {
    return total + merchant.productInfo.length;
  }, 0);

export const { addOnCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
