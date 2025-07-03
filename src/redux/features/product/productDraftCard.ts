import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

type TDraftProductInfo = {
  id?: number;
  slug: string;
  variationId?: number;
  sku: string;
  color: string;
  size: string;
  total_stock_qty: number;
  regular_price: number;
  discount_price: number;
  quantity: number;
  totalPrize: number;
};

const initialState: TDraftProductInfo = {
  id: undefined,
  slug: "",
  variationId: undefined,
  sku: "",
  color: "Default",
  size: "Default",
  total_stock_qty: 0,
  regular_price: 0,
  discount_price: 0,
  quantity: 0,
  totalPrize: 0,
};

const productDraftCardSlice = createSlice({
  name: "productDraftCard",
  initialState,
  reducers: {
    setProductDraft: (state, action: PayloadAction<TDraftProductInfo>) => {
      return action.payload;
    },
    setDraftVariationId: (state, action: PayloadAction<number>) => {
      state.variationId = action.payload;
    },
    setDraftSize: (state, action: PayloadAction<string>) => {
      state.size = action.payload;
    },
    setDraftColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
    setDraftSku: (state, action: PayloadAction<string>) => {
      state.sku = action.payload;
    },
    incrementDraftQuantity: (
      state,
      action: PayloadAction<{ incrementBy: number; stock: number }>
    ) => {
      if (state.quantity < action.payload.stock) {
        state.quantity = state.quantity + action.payload.incrementBy;
        if (state.discount_price || state.regular_price) {
          state.totalPrize =
            state.quantity * state.discount_price ||
            state.quantity * state.regular_price;
        }
      }
    },
    decrementDraftQuantity: (state, action: PayloadAction<number>) => {
      if (state.quantity > 0) {
        state.quantity = state.quantity - action.payload;
        if (state.discount_price || state.regular_price) {
          state.totalPrize =
            state.quantity * state.discount_price ||
            state.quantity * state.regular_price;
        }
      }
    },
  },
});

export const selectProductDraftCard = (state: RootState) =>
  state.productDraftCard;

export const {
  setProductDraft,
  setDraftVariationId,
  setDraftSize,
  setDraftColor,
  setDraftSku,
  incrementDraftQuantity,
  decrementDraftQuantity,
} = productDraftCardSlice.actions;

export default productDraftCardSlice.reducer;
