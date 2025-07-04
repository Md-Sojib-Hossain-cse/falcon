/* eslint-disable @typescript-eslint/no-explicit-any */
import { CiHeart, CiShare2 } from "react-icons/ci";
import DownArrow from "./DownArrow";
import Rating from "./Rating";
import DownArrowSm from "./DownArrowSm";
import SampleColorImg from "./SampleColorImg";
import SizeOption from "./SizeOption";
import Counter from "../../../../components/Counter";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import { selectProduct } from "../../../../redux/features/product/product.Slice";
import {
  addOnCart,
  calculateTotalPrice,
} from "../../../../redux/features/cart/cart.Slice";
import toast from "react-hot-toast";
import {
  selectProductDraftCard,
  setDraftSize,
} from "../../../../redux/features/product/productDraftCard";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

const ProductDetailsPart = () => {
  const [reaction, setReaction] = useState(false);
  const productDraftCardData = useAppSelector(selectProductDraftCard);
  const draftProductData = useAppSelector(selectProductDraftCard);
  const dispatch = useAppDispatch();
  const product = useAppSelector(selectProduct);

  const productData = product?.data;
  const allSizes = ["XL", "XS", "S", "M", "L"];
  const availableSizes: string[] = [];

  const handleAddToCart = () => {
    if (productData) {
      const addedProductData = {
        merchantInfo: productData?.merchant || {
          id: null,
          shop_name: "unknown",
        },
        productInfo: [
          {
            ...productData,
            draftProductData: draftProductData,
          },
        ],
      };
      dispatch(addOnCart(addedProductData));
      dispatch(calculateTotalPrice());
      toast.success("Product added to cart!");
    }
  };

  productData?.variations?.forEach((variation: any) => {
    variation?.variation_attributes?.forEach((att: any) => {
      if (
        att?.attribute?.name === "Size" &&
        !availableSizes.includes(att?.attribute_option?.attribute_value)
      ) {
        availableSizes.push(att?.attribute_option?.attribute_value);
      }
    });
  });

  return (
    <div className="lg:col-span-5 space-y-4 md:space-y-5 lg:space-y-6">
      <div className="space-y-4 md:space-y-5 lg:space-y-6">
        <div className="space-y-3">
          <h4 className="text-[#0F172A] font-medium leading-5 md:leading-6 lg:leading-7 text-lg md:text-xl">
            {productData?.name}
          </h4>
          <div className="flex justify-between items-center">
            <div className="flex gap-2.5 items-center">
              <h6 className="text-[#475569]">{productData?.rating_avg}</h6>
              <Rating rating={productData?.rating_avg || 0}></Rating>
              <h6 className="text-[#475569]">
                {productData?.rating_count || 0}
              </h6>
              <DownArrow></DownArrow>
            </div>
            <div className="flex justify-end items-center gap-2">
              <CiHeart
                onClick={() => {
                  setReaction(true);
                }}
                className={`${
                  reaction ? "hidden" : ""
                } h-4 md:h-6 lg:h-8 w-4 md:w-6 lg:w-8`}
              />
              <FaHeart
                onClick={() => {
                  setReaction(false);
                }}
                className={`${
                  reaction ? "" : "hidden"
                } h-4 md:h-6 lg:h-8 w-4 md:w-6 lg:w-8 text-red-500`}
              />
              <CiShare2 className="h-4 md:h-6 lg:h-8 w-4 md:w-6 lg:w-8" />
            </div>
          </div>
          <div className="flex gap-3 lg:gap-4">
            <h5 className="text-[#00A788] font-semibold text-lg md:text-xl lg:text-2xl leading-6 md:leading-7 lg:leading-9">
              ৳{productData?.product_detail?.regular_price || "N/A"}
            </h5>
            <p className="text-gray-500 line-through text-base">
              ৳{productData?.product_detail?.discount_price || "N/A"}
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <p className="text-[#475569] text-sm font-medium leading-5 md:leading-6">
              Promotion
            </p>
            <div className="w-44 px-3 py-1 text-sm flex gap-1 items-center text-white font-bold bg-gradient-to-r from-orange-400 to-orange-600 clip-ribbon">
              Min. spend ৳550 <DownArrowSm></DownArrowSm>
            </div>
          </div>
        </div>
        <div className="space-y-3 md:space-y-4">
          <div className="space-y-2">
            <h6 className="font-medium leading-4 md:leading-5 lg:leading-6">
              <span className="font-normal">Available Color:</span>{" "}
              {productDraftCardData?.color || "Default"}
            </h6>
            <div className="grid grid-cols-7 gap-4 auto-rows-auto">
              {productData?.variations?.map((item: any) => (
                <SampleColorImg
                  key={item?.id}
                  available={item?.total_stock_qty > 0}
                  imgSrc={`https://ik.imagekit.io/sojibhossaincse/${item?.image
                    .split("/")
                    .at(-1)}`}
                  data={item}
                ></SampleColorImg>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h6 className="font-medium leading-4 md:leading-5 lg:leading-6">
              Select Size: {productDraftCardData?.size || "N/A"}
            </h6>
            <div className="flex gap-3 items-center">
              {allSizes.map((size) => {
                const isAvailable = availableSizes.includes(size);
                return (
                  <SizeOption
                    key={size}
                    item={{ attribute_option: { attribute_value: size } }}
                    onClick={() => {
                      dispatch(setDraftSize(size));
                    }}
                    isSelected={productDraftCardData?.size === size}
                    available={isAvailable}
                  />
                );
              })}
            </div>
          </div>
          <div className="space-y-2">
            <h6 className="font-medium leading-4 md:leading-5 lg:leading-6 poppins-font text-[#171717]">
              Quantity
            </h6>
            <Counter
              stock={Number(productData?.total_stock_qty) as number}
            ></Counter>
          </div>
        </div>
      </div>
      <button
        disabled={productDraftCardData?.quantity <= 0}
        onClick={handleAddToCart}
        className={`${
          productDraftCardData?.quantity <= 0 ? "bg-gray-400" : "bg-[#00A788]"
        } w-full max-w-[412px] font-medium leading-4 md:leading-5 lg:leading-6 bg-[#00A788] rounded-sm p-2.5 text-white 
             transition active:scale-95 duration-100 ease-in-out`}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetailsPart;
