/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  selectCart,
  selectTotalProducts,
} from "../../redux/features/cart/cart.Slice";
import {
  selectSelector,
  toggleSelectAll,
} from "../../redux/features/cart/selector.Slice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import CartItems from "./MyCartComponents/CartItems";
import OrderSummery from "./MyCartComponents/OrderSummery";

const MyCartPage = () => {
  const cartItemCount = useAppSelector(selectTotalProducts);
  const cartData = useAppSelector(selectCart);
  const dispatch = useAppDispatch();
  const selectorStates = useAppSelector(selectSelector);

  return (
    <main className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6 w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-20 mb-4 md:mb-6">
      <div className="md:col-span-2 bg-white rounded-lg space-y-4 md:space-y-5 py-4 md:py-5">
        <div className="py-2 md:px-3.5 p-4 md:p-5 flex flex-col md:flex-row justify-between h-16 md:h-[68px] border-b border-b-[#D9D9D9]">
          <div className="flex justify-start items-start relative -top-3">
            <h2 className="text-[#0F172A] font-semibold text-2xl lg:text-3xl leading-8 md:leading-9 lg:leading-10">
              My Cart ({cartItemCount || 0})
            </h2>
          </div>
          <div className="flex items-center gap-6 md:gap-7 lg:gap-8">
            <button
              onClick={() => dispatch(toggleSelectAll())}
              className="flex gap-2"
            >
              <input
                type="checkbox"
                name="selectAll"
                id="selectAll"
                checked={selectorStates?.selectAll}
              />
              <p className="text-[#475569]">Select All</p>
            </button>
            <button className="text-[#475569]">Clear All</button>
          </div>
        </div>
        <div className="pl-4 md:pl-5">
          {cartData?.data?.map((productByMerchant: any, index: number) => (
            <CartItems key={index} cartItem={productByMerchant}></CartItems>
          ))}
        </div>
      </div>
      <OrderSummery></OrderSummery>
    </main>
  );
};

export default MyCartPage;
