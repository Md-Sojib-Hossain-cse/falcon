/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaRegTrashAlt } from "react-icons/fa";
import CartCounter from "./CartCounter";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import {
  removeSelectionSingleCartItem,
  selectSelector,
  selectSingleCartItem,
} from "../redux/features/cart/selector.Slice";
import {
  calculateTotalPrice,
  singleItemRemoveFromCart,
} from "../redux/features/cart/cart.Slice";
import toast from "react-hot-toast";

const OrderItemCard = ({
  itemData,
  isSelected,
}: {
  itemData: any;
  isSelected: boolean;
}) => {
  const dispatch = useAppDispatch();
  const selectorState = useAppSelector(selectSelector);

  const handleSelectItemToggle = () => {
    if (selectorState.selectedProducts.includes(itemData.id)) {
      dispatch(removeSelectionSingleCartItem(itemData.id));
    } else {
      dispatch(selectSingleCartItem(itemData.id));
    }
  };

  const handleDeleteItemFromCart = () => {
    dispatch(singleItemRemoveFromCart(itemData?.id));
    dispatch(calculateTotalPrice());
    toast.success("Item successfully deleted from cart!!");
  };

  return (
    <div className="flex gap-3 md:gap-4 p-2 md:p-3">
      <input
        onClick={handleSelectItemToggle}
        type="checkbox"
        name="checkStore"
        id="checkStore"
        className="accent-[#00B795] w-4 h-4 rounded-sm bg-gray-100"
        checked={
          selectorState.selectAll ||
          selectorState.selectedProducts.includes(itemData.id) ||
          isSelected
        }
      />
      <div className="flex gap-3 md:gap-4 w-full flex-col md:flex-row">
        <div className="flex justify-center items-center">
          <img
            src={itemData?.thumbnail}
            alt="product img"
            className="rounded-sm h-24 w-24"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-start w-full">
          <div className="flex flex-col gap-2 md:gap-3">
            <h4 className="text-[#0F172A] font-medium">
              {itemData?.name || "unknown"}
            </h4>
            <div className="space-x-3 flex items-center">
              <p className="text-[#475569] space-x-2">
                <span>Color:</span>
                <span>{itemData?.draftProductData?.color || "Default"};</span>
              </p>
              <p className="text-[#475569] space-x-2">
                <span>Size:</span>
                <span>{itemData?.draftProductData?.size || "Default"}</span>
              </p>
            </div>
            <div className="flex gap-3 md:gap-6 lg:gap-8 items-center">
              <CartCounter itemData={itemData}></CartCounter>
              <FaRegTrashAlt
                onClick={handleDeleteItemFromCart}
                className="text-[#94A3B8]"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-[#0F172A] font-bold text-lg md:text-xl">
              ৳{itemData?.product_detail?.discount_price}
            </p>
            <p className="text-[#475569] line-through">
              ৳{itemData?.product_detail?.regular_price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItemCard;
