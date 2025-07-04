/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import {
  calculateTotalPrice,
  decrementQuantity,
  incrementQuantity,
  selectCart,
  setCart,
} from "../redux/features/cart/cart.Slice";
import { useAppDispatch, useAppSelector } from "../redux/hook";

const CartCounter = ({ itemData }: { itemData: any }) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      dispatch(setCart(JSON.parse(savedCart)));
    }
  }, [dispatch]);

  useEffect(() => {
    if (cart?.data?.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleIncrement = () => {
    dispatch(incrementQuantity(itemData?.id));
    dispatch(calculateTotalPrice());
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity(itemData?.id));
    dispatch(calculateTotalPrice());
  };

  return (
    <div className="w-48 h-10 border border-[#E2E8F0] rounded-full flex justify-between items-center p-1">
      <button
        onClick={handleDecrement}
        className="px-2.5 rounded-full bg-[#F1F5F9] h-[33px] w-[33px]"
      >
        -
      </button>
      <p className="text-[#252B42] font-medium leading-4 md:leading-5 lg:leading-6">
        {itemData?.draftProductData?.quantity}
      </p>
      <button
        onClick={handleIncrement}
        className="px-2.5 rounded-full bg-[#F1F5F9] h-[33px] w-[33px]"
      >
        +
      </button>
    </div>
  );
};

export default CartCounter;
