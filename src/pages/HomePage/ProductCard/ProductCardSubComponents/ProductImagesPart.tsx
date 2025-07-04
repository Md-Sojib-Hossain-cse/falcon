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
        src={`https://ik.imagekit.io/sojibhossaincse/${productData?.thumbnail
          .split("/")
          .at(-1)}`}
        alt="productImg"
        onError={(e) => {
          e.currentTarget.src = "https://i.ibb.co/N2nYmrB5/not-available.png";
        }}
        className="h-96 w-96 rounded-sm bg-[#C6C6C6]"
      />
      <div className="flex gap-4 justify-center items-center w-full max-w-[372px]">
        {Object.values(productData?.image || {}).map((imgObj: any, index) => (
          <DemoImgItem
            key={index}
            imgSrc={`https://ik.imagekit.io/sojibhossaincse/${imgObj?.url
              .split("/")
              .at(-1)}`}
          ></DemoImgItem>
        ))}
      </div>
    </div>
  );
};

export default ProductImagesPart;
