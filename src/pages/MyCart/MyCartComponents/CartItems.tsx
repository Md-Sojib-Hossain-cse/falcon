import { FaChevronRight } from "react-icons/fa";
import { PiStorefrontLight } from "react-icons/pi";
import OrderItemCard from "../../../components/OrderItemCard";

const CartItems = () => {
  return (
    <div>
      <div className="bg-[#F1F5F9] py-2 px-3 flex items-center gap-2">
        <input
          type="checkbox"
          name="checkStore"
          id="checkStore"
          className="accent-[#00B795] w-4 h-4 rounded-sm bg-gray-100"
        />
        <PiStorefrontLight className="text-lg text-[#334155]" />
        <div className="flex gap-1 items-center">
          <h5 className="text-[#334155] text-sm">BD FASHION HOUSE</h5>
          <FaChevronRight className="text-[10px] text-[#334155]" />
        </div>
      </div>
      <OrderItemCard></OrderItemCard>
    </div>
  );
};

export default CartItems;
