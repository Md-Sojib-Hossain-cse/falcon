import {
  quantityDecrement,
  quantityIncrement,
  selectProduct,
} from "../redux/features/product/product.Slice";
import { useAppDispatch, useAppSelector } from "../redux/hook";

const Counter = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector(selectProduct);

  return (
    <div className="w-48 h-10 border border-[#E2E8F0] rounded-full flex justify-between items-center p-1">
      <button
        onClick={() => dispatch(quantityDecrement(1))}
        className="px-2.5 rounded-full bg-[#F1F5F9] h-[33px] w-[33px]"
      >
        -
      </button>
      <p className="text-[#252B42] font-medium leading-4 md:leading-5 lg:leading-6">
        {product?.quantity}
      </p>
      <button
        onClick={() => dispatch(quantityIncrement(1))}
        className="px-2.5 rounded-full bg-[#F1F5F9] h-[33px] w-[33px]"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
