import {
  decrementDraftQuantity,
  incrementDraftQuantity,
  selectProductDraftCard,
} from "../redux/features/product/productDraftCard";
import { useAppDispatch, useAppSelector } from "../redux/hook";

const Counter = ({ stock }: { stock: number }) => {
  const dispatch = useAppDispatch();
  const productDraftCardData = useAppSelector(selectProductDraftCard);

  const handleIncrement = () => {
    dispatch(incrementDraftQuantity({ incrementBy: 1, stock: stock }));
  };

  const handleDecrement = () => {
    dispatch(decrementDraftQuantity(1));
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
        {productDraftCardData?.quantity}
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

export default Counter;
