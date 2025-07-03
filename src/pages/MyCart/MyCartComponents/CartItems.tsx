/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaChevronRight } from "react-icons/fa";
import { PiStorefrontLight } from "react-icons/pi";
import OrderItemCard from "../../../components/OrderItemCard";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import {
  removeSelectionMerchantOnCart,
  selectSelector,
  selectSingleMerchantOnCart,
} from "../../../redux/features/cart/selector.Slice";

const CartItems = ({ cartItem }: { cartItem: any }) => {
  const selectorState = useAppSelector(selectSelector);
  const dispatch = useAppDispatch();

  const productIds = cartItem?.productInfo?.map((item: any) => item.id);

  const handleMerchantSelectToggle = () => {
    if (
      selectorState?.selectedMerchants?.includes(cartItem?.merchantInfo?.id)
    ) {
      dispatch(
        removeSelectionMerchantOnCart({
          merchantId: cartItem?.merchantInfo?.id,
          itemIds: productIds,
        })
      );
    } else {
      dispatch(
        selectSingleMerchantOnCart({
          merchantId: cartItem?.merchantInfo?.id,
          itemIds: productIds,
        })
      );
    }
  };

  return (
    <div>
      <div className="bg-[#F1F5F9] py-2 px-3 flex items-center gap-2">
        <input
          onClick={handleMerchantSelectToggle}
          type="checkbox"
          name="checkStore"
          id="checkStore"
          className="accent-[#00B795] w-4 h-4 rounded-sm bg-gray-100"
          checked={
            selectorState.selectAll ||
            selectorState?.selectedMerchants?.includes(
              cartItem?.merchantInfo?.id
            )
          }
        />
        <PiStorefrontLight className="text-lg text-[#334155]" />
        <div className="flex gap-1 items-center">
          <h5 className="text-[#334155] text-sm">
            {cartItem?.merchantInfo?.shop_name || "unknown"}
          </h5>
          <FaChevronRight className="text-[10px] text-[#334155]" />
        </div>
      </div>
      {cartItem?.productInfo?.map((singleProduct: any) => (
        <OrderItemCard
          isSelected={selectorState?.selectedMerchants?.includes(
            cartItem?.merchantInfo?.id
          )}
          itemData={singleProduct}
        ></OrderItemCard>
      ))}
    </div>
  );
};

export default CartItems;
