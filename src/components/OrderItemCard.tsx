import { FaRegTrashAlt } from "react-icons/fa";
import ProductImg from "../assets/demoCardimg.png";
import Counter from "./Counter";

const OrderItemCard = () => {
  return (
    <div className="flex gap-3 md:gap-4 p-2 md:p-3">
      <input
        type="checkbox"
        name="checkStore"
        id="checkStore"
        className="accent-[#00B795] w-4 h-4 rounded-sm bg-gray-100"
      />
      <div className="flex gap-3 md:gap-4 w-full flex-col md:flex-row">
        <img
          src={ProductImg}
          alt="product img"
          className="rounded-sm h-24 w-24"
        />
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-start w-full">
          <div className="flex flex-col gap-2 md:gap-3">
            <h4 className="text-[#0F172A] font-medium">
              Bestway Brand Air Inflatable 5 In 1 semi Double Sofa{" "}
            </h4>
            <p className="text-[#475569]">Color: red; Size: M</p>
            <div className="flex gap-3 md:gap-6 lg:gap-8 items-center">
              <Counter></Counter>
              <FaRegTrashAlt className="text-[#94A3B8]" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-[#0F172A] font-bold text-lg md:text-xl">৳1139</p>
            <p className="text-[#475569] line-through">৳1539</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItemCard;
