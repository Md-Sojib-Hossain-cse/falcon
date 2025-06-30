import DemoImg from "../../assets/demoCardimg.png";
import DownArrow from "./ProductCardSubComponents/DownArrow";
import Rating from "./ProductCardSubComponents/Rating";
import SampleColorImg from "./ProductCardSubComponents/SampleColorImg";
import SampleColorImgSrc from "../../assets/sampleColor.png";
import { CiHeart, CiShare2 } from "react-icons/ci";
import DemoImgItem from "./ProductCardSubComponents/DemoImgItem";
import DownArrowSm from "./ProductCardSubComponents/DownArrowSm";
import SizeOption from "./ProductCardSubComponents/SizeOption";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  quantityDecrement,
  quantityIncrement,
  selectProduct,
} from "../../redux/features/product/product.Slice";

const ProductCard = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const product = useAppSelector(selectProduct);
  const dispatch = useAppDispatch();
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5 lg:gap-6 w-full max-w-7xl mx-auto py-3 md:py-4 lg:py-6 px-4 md:px-8 lg:px-20">
        <div className="flex flex-col gap-4 items-center lg:col-span-4">
          <img
            src={DemoImg}
            alt="productImg"
            className="h-96 w-96 rounded-sm bg-[#C6C6C6]"
          />
          <div className="flex gap-4 justify-between w-full max-w-[372px]">
            <DemoImgItem imgSrc={DemoImg}></DemoImgItem>
            <DemoImgItem imgSrc={DemoImg}></DemoImgItem>
            <DemoImgItem imgSrc={DemoImg}></DemoImgItem>
            <DemoImgItem imgSrc={DemoImg}></DemoImgItem>
            <DemoImgItem imgSrc={DemoImg}></DemoImgItem>
          </div>
        </div>
        <div className="lg:col-span-5 space-y-4 md:space-y-5 lg:space-y-6">
          <div className="space-y-4 md:space-y-5 lg:space-y-6">
            <div className="space-y-3">
              <h4 className="text-[#0F172A] font-medium leading-5 md:leading-6 lg:leading-7 text-lg md:text-xl">
                Men's Stylish & Fashionable Trendy Good Looking Long Sleeve
                Casual Shirt.
              </h4>
              <div className="flex justify-between items-center">
                <div className="flex gap-2.5 items-center">
                  <h6 className="text-[#475569]">4.7</h6>
                  <Rating rating={5}></Rating>
                  <h6 className="text-[#475569]">2,254</h6>
                  <DownArrow></DownArrow>
                </div>
                <div className="flex justify-end items-center gap-2">
                  <CiHeart className="h-4 md:h-6 lg:h-8 w-4 md:w-6 lg:w-8" />
                  <CiShare2 className="h-4 md:h-6 lg:h-8 w-4 md:w-6 lg:w-8" />
                </div>
              </div>
              <div className="flex gap-3 lg:gap-4">
                <h5 className="text-[#00A788] font-semibold text-lg md:text-xl lg:text-2xl leading-6 md:leading-7 lg:leading-9">
                  ৳1,139.33
                </h5>
                <p className="text-gray-500 line-through text-base">৳1500</p>
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
                  <span className="font-normal">Available Color:</span> Navy
                  Blue
                </h6>
                <div className="flex gap-4 items-center">
                  <SampleColorImg imgSrc={SampleColorImgSrc}></SampleColorImg>
                  <SampleColorImg imgSrc={SampleColorImgSrc}></SampleColorImg>
                  <SampleColorImg imgSrc={SampleColorImgSrc}></SampleColorImg>
                  <SampleColorImg imgSrc={SampleColorImgSrc}></SampleColorImg>
                </div>
              </div>
              <div className="space-y-2">
                <h6 className="font-medium leading-4 md:leading-5 lg:leading-6">
                  Select Size: XS
                </h6>
                <div className="flex gap-3 items-center">
                  <SizeOption
                    size="XL"
                    onClick={() => setSelectedSize("XL")}
                    isSelected={selectedSize === "XL"}
                    available={true}
                  ></SizeOption>
                  <SizeOption
                    size="XS"
                    onClick={() => setSelectedSize("XS")}
                    isSelected={selectedSize === "XS"}
                    available={true}
                  ></SizeOption>
                  <SizeOption
                    size="S"
                    onClick={() => setSelectedSize("S")}
                    isSelected={selectedSize === "S"}
                    available={true}
                  ></SizeOption>
                  <SizeOption
                    size="M"
                    onClick={() => setSelectedSize("M")}
                    isSelected={selectedSize === "M"}
                    available={true}
                  ></SizeOption>
                  <SizeOption
                    size="L"
                    onClick={() => setSelectedSize("L")}
                    isSelected={selectedSize === "L"}
                    available={false}
                  ></SizeOption>
                </div>
              </div>
              <div className="space-y-2">
                <h6 className="font-medium leading-4 md:leading-5 lg:leading-6 poppins-font text-[#171717]">
                  Quantity
                </h6>
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
              </div>
            </div>
          </div>
          <button
            className="w-full max-w-[412px] font-medium leading-4 md:leading-5 lg:leading-6 bg-[#00A788] rounded-sm p-2.5 text-white 
             transition active:scale-95 duration-100 ease-in-out"
          >
            Add to Cart
          </button>
        </div>
        <div className="lg:col-span-3"></div>
      </div>
    </section>
  );
};

export default ProductCard;
