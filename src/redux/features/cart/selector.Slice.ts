import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

type TSelectorSlice = {
  selectAll: boolean;
  selectedMerchants: number[];
  selectedProducts: number[];
};

const initialState: TSelectorSlice = {
  selectAll: false,
  selectedMerchants: [],
  selectedProducts: [],
};

const selectorSlice = createSlice({
  name: "selector",
  initialState,
  reducers: {
    toggleSelectAll: (state) => {
      if (state.selectAll) {
        state.selectAll = false;
        state.selectedMerchants = [];
        state.selectedProducts = [];
      } else {
        state.selectAll = true;
      }
    },
    selectSingleCartItem: (state, action: PayloadAction<number>) => {
      if (!state.selectedProducts.includes(action.payload)) {
        state.selectedProducts.push(action.payload);
      }
    },
    removeSelectionSingleCartItem: (state, action: PayloadAction<number>) => {
      state.selectedProducts = state.selectedProducts.filter(
        (item) => item !== action.payload
      );
    },
    selectSingleMerchantOnCart: (state, action: PayloadAction<number>) => {
      if (!state.selectedMerchants.includes(action.payload)) {
        state.selectedMerchants.push(action.payload);
      }
    },
    removeSelectionMerchantOnCart: (state, action: PayloadAction<number>) => {
      state.selectedMerchants = state.selectedMerchants.filter(
        (item) => item !== action.payload
      );
    },
  },
});

export const selectSelector = (state: RootState) => state.selector;

export const {
  toggleSelectAll,
  selectSingleCartItem,
  removeSelectionSingleCartItem,
  selectSingleMerchantOnCart,
  removeSelectionMerchantOnCart,
} = selectorSlice.actions;

export default selectorSlice.reducer;
