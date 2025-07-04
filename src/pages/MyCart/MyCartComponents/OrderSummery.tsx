import { useState } from "react";
import { useAppSelector } from "../../../redux/hook";
import {
  selectCart,
  selectTotalPrice,
  selectTotalProducts,
} from "../../../redux/features/cart/cart.Slice";

const OrderSummery = () => {
  const [agree, isAgree] = useState(false);
  const totalPrice = useAppSelector(selectTotalPrice);
  const cartData = useAppSelector(selectCart);
  const cartItemCount = useAppSelector(selectTotalProducts);

  return (
    <div className="space-y-3 md:space-y-4 pb-6">
      <div className="bg-white rounded-lg py-2 md:py-3 px-4 md:px-5 lg:px-6 space-y-3 md:space-y-4">
        <div className="space-y-3 md:space-y-4">
          <h3 className="text-[#475569] font-medium text-xl lg:text-2xl">
            Order summary
          </h3>
          <div className="space-y-2.5 md:space-y-3">
            <div className="border-b border-b-[#CBD5E1] border-dotted space-y-2.5 md:space-y-3">
              <div className="space-y-2.5 md:space-y-3">
                <div className="flex justify-between items-center">
                  <p className="text-[#334155] text-base lg:text-lg font-medium">
                    Price ({cartItemCount || 0} items)
                  </p>
                  <p className="text-[#0F172A]">৳{totalPrice || 0}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-[#475569] text-base md:text-lg font-medium">
                    Shipping fee
                  </p>
                  <p className="text-[#3B82F6]">To be added</p>
                </div>
              </div>
              <div className="flex pb-3">
                <input
                  type="search"
                  name="coupon"
                  id="coupon"
                  className="p-2.5 rounded-l-sm w-full text-[#94A3B8] border border-[#94A3B8] outline-0 h-10"
                  placeholder="Store / Falcon coupon"
                />
                <input
                  type="submit"
                  value="Apply"
                  className="text-white font-medium bg-[#00B795] rounded-r-sm p-2.5 h-10 w-20 transition active:scale-95 duration-100 ease-in-out"
                ></input>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-[#334155] text-base lg:text-lg font-medium">
                Sub Total
              </p>
              <p className="text-[#171717] text-lg lg:text-xl font-semibold">
                ৳{totalPrice || 0}
              </p>
            </div>
          </div>
        </div>
        <button
          disabled={agree === false || !cartData?.data?.length}
          className={`text-white font-medium rounded-sm p-2.5 w-full ${
            !agree || !cartData?.data?.length
              ? "bg-gray-300"
              : "transition active:scale-95 duration-100 ease-in-out bg-[#00B795]"
          }`}
        >
          Proceed to Checkout
        </button>
      </div>
      <div className="rounded-sm flex gap-2">
        <input
          onClick={() => isAgree(!agree)}
          type="checkbox"
          name="iAgreeByPolicy"
          id="iAgreeByPolicy"
          className="accent-[#00B795] w-5 h-5 rounded-sm bg-gray-100"
          checked={agree ? true : false}
        />
        <label htmlFor="iAgreeByPolicy" className="text-[#475569] text-sm">
          I have read and agree to the Terms and Conditions, Privacy Policy and
          Refund and Return Policy
        </label>
      </div>
    </div>
  );
};

export default OrderSummery;
