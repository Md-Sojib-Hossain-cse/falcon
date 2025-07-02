import {
  quantityDecrement,
  quantityIncrement,
  selectProductCard,
} from "../redux/features/product/productCard.Slice";
import { useAppDispatch, useAppSelector } from "../redux/hook";

const Counter = ({ stock }: { stock: number }) => {
  const dispatch = useAppDispatch();
  const productCardStateData = useAppSelector(selectProductCard);

  return (
    <div className="w-48 h-10 border border-[#E2E8F0] rounded-full flex justify-between items-center p-1">
      <button
        onClick={() => dispatch(quantityDecrement(1))}
        className="px-2.5 rounded-full bg-[#F1F5F9] h-[33px] w-[33px]"
      >
        -
      </button>
      <p className="text-[#252B42] font-medium leading-4 md:leading-5 lg:leading-6">
        {productCardStateData?.quantity}
      </p>
      <button
        onClick={() =>
          dispatch(quantityIncrement({ incrementBy: 1, stock: stock }))
        }
        className="px-2.5 rounded-full bg-[#F1F5F9] h-[33px] w-[33px]"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
