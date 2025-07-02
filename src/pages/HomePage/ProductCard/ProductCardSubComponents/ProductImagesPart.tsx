/* eslint-disable @typescript-eslint/no-explicit-any */
import DemoImgItem from "./DemoImgItem";
import { useAppSelector } from "../../../../redux/hook";
import { selectProduct } from "../../../../redux/features/product/product.Slice";

const ProductImagesPart = () => {
  const product = useAppSelector(selectProduct);

  const productData = product?.data;

  return (
    <div className="flex flex-col gap-4 items-center lg:col-span-4">
      <img
        src={productData?.thumbnail}
        alt="productImg"
        className="h-96 w-96 rounded-sm bg-[#C6C6C6]"
      />
      <div className="flex gap-4 justify-center items-center w-full max-w-[372px]">
        {Object.values(productData?.image || {}).map((imgObj: any, index) => (
          <DemoImgItem key={index} imgSrc={imgObj?.url}></DemoImgItem>
        ))}
      </div>
    </div>
  );
};

export default ProductImagesPart;
