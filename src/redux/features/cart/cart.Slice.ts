/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import type { TSelectorSlice } from "./selector.Slice";

const initialState: any = {
  data: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addOnCart: (state, action: PayloadAction<any>) => {
      const newMerchant = action.payload.merchantInfo;
      const newProduct = action.payload.productInfo[0];

      const existingMerchantIndex = state.data.findIndex(
        (item: any) => item.merchantInfo.id === newMerchant.id
      );

      if (existingMerchantIndex !== -1) {
        // if merchant exists  , check if product is already added
        const existingProduct = state.data[
          existingMerchantIndex
        ].productInfo.find((product: any) => product.id === newProduct.id);

        if (!existingProduct) {
          //  if product not found then , add it
          state.data[existingMerchantIndex].productInfo.push(newProduct);
        }
        // If product exists do nothing
      } else {
        //  If not existing merchant,  push merchant + product
        state.data.push({
          merchantInfo: newMerchant,
          productInfo: [newProduct],
        });
      }
    },
    setCart: (_state, action: PayloadAction<any>) => {
      return action.payload;
    },
    calculateTotalPrice: (state) => {
      let total = 0;

      state.data.forEach((merchant: any) => {
        merchant.productInfo.forEach((product: any) => {
          total += product.draftProductData?.totalPrize || 0;
        });
      });

      state.totalPrice = total;
    },
    incrementQuantity: (
      state,
      action: PayloadAction<{ productId: number }>
    ) => {
      state.data.forEach((merchant: any) => {
        merchant.productInfo.forEach((product: any) => {
          if (product.id === action.payload) {
            product.draftProductData.quantity += 1;
            product.draftProductData.totalPrize =
              product.draftProductData.quantity *
                product.draftProductData.discount_price ||
              product.draftProductData.quantity *
                product.draftProductData.regular_price;
          }
        });
      });
    },
    decrementQuantity: (
      state,
      action: PayloadAction<{ productId: number }>
    ) => {
      state.data.forEach((merchant: any) => {
        merchant.productInfo.forEach((product: any) => {
          if (
            product.draftProductData.quantity > 1 &&
            product.id === action.payload
          ) {
            product.draftProductData.quantity -= 1;
            product.draftProductData.totalPrize =
              product.draftProductData.quantity *
                product.draftProductData.discount_price ||
              product.draftProductData.quantity *
                product.draftProductData.regular_price;
          }
        });
      });
    },
    singleItemRemoveFromCart: (state, action: PayloadAction<number>) => {
      if (state?.data?.length) {
        state.data = state.data
          .map((merchantItem: any) => {
            const updatedProducts = merchantItem.productInfo.filter(
              (product: any) => product.id !== action.payload
            );
            return {
              ...merchantItem,
              productInfo: updatedProducts,
            };
          })
          .filter((merchantItem: any) => merchantItem.productInfo.length > 0); // remove merchants with no products
      }
    },
    allSelectedItemRemoveFromCart: (
      state,
      action: PayloadAction<Partial<TSelectorSlice>>
    ) => {
      if (state?.data?.length) {
        if (action.payload.selectAll) {
          state.data = [];
          return;
        }

        if (action.payload.selectedMerchants?.length) {
          state.data = state.data.filter(
            (merchant: any) =>
              !action.payload.selectedMerchants?.includes(
                merchant.merchantInfo.id
              )
          );
        } else if (action.payload.selectedProducts?.length) {
          state.data = state.data
            .map((merchant: any) => {
              const updatedProducts = merchant.productInfo.filter(
                (product: any) =>
                  !action.payload.selectedProducts?.includes(product.id)
              );
              return {
                ...merchant,
                productInfo: updatedProducts,
              };
            })
            .filter((merchant: any) => merchant.productInfo.length > 0);
        }
      }
    },
  },
});

export const selectCart = (state: RootState) => state.cart;
export const selectTotalPrice = (state: RootState) => state.cart.totalPrice;

export const selectTotalProducts = (state: RootState) =>
  state.cart.data.reduce((total: number, merchant: any) => {
    return total + merchant.productInfo.length;
  }, 0);

export const {
  addOnCart,
  setCart,
  singleItemRemoveFromCart,
  allSelectedItemRemoveFromCart,
  incrementQuantity,
  decrementQuantity,
  calculateTotalPrice,
} = cartSlice.actions;

export default cartSlice.reducer;
