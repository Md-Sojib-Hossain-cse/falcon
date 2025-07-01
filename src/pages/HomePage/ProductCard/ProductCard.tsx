import DemoImg from "../../../assets/demoCardimg.png";
import DownArrow from "./ProductCardSubComponents/DownArrow";
import Rating from "./ProductCardSubComponents/Rating";
import SampleColorImg from "./ProductCardSubComponents/SampleColorImg";
import SampleColorImgSrc from "../../../assets/sampleColor.png";
import { CiHeart, CiShare2 } from "react-icons/ci";
import DemoImgItem from "./ProductCardSubComponents/DemoImgItem";
import DownArrowSm from "./ProductCardSubComponents/DownArrowSm";
import SizeOption from "./ProductCardSubComponents/SizeOption";

import PackageImg from "../../../assets/package.png";
import DeliveryOptions from "./ProductCardSubComponents/DeliveryOptions";
import PackageExpressImg from "../../../assets/packageMoving.png";
import soldByLogo from "../../../assets/soldByLogo.png";
import verifiedIcon from "../../../assets/varified.png";
import risingStarImg from "../../../assets/starObjectImg.png";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import RatingsByCategory from "./ProductCardSubComponents/RatingsByCategory";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import {
  selectProduct,
  setColor,
  setSize,
} from "../../../redux/features/product/product.Slice";
import Counter from "../../../components/Counter";

const ProductCard = () => {
  const product = useAppSelector(selectProduct);
  const dispatch = useAppDispatch();
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5 lg:gap-6 w-full max-w-[1440px] mx-auto py-3 md:py-4 lg:py-6 px-4 md:px-8 lg:px-20">
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
                  <SampleColorImg
                    onClick={() => dispatch(setColor("white"))}
                    isSelected={product?.color === "white"}
                    available={true}
                    imgSrc={SampleColorImgSrc}
                  ></SampleColorImg>
                  <SampleColorImg
                    onClick={() => dispatch(setColor("black"))}
                    isSelected={product?.color === "black"}
                    available={true}
                    imgSrc={SampleColorImgSrc}
                  ></SampleColorImg>
                  <SampleColorImg
                    onClick={() => dispatch(setColor("cream"))}
                    isSelected={product?.color === "cream"}
                    available={true}
                    imgSrc={SampleColorImgSrc}
                  ></SampleColorImg>
                  <SampleColorImg
                    onClick={() => dispatch(setColor("skyblue"))}
                    isSelected={product?.color === "skyblue"}
                    available={false}
                    imgSrc={SampleColorImgSrc}
                  ></SampleColorImg>
                </div>
              </div>
              <div className="space-y-2">
                <h6 className="font-medium leading-4 md:leading-5 lg:leading-6">
                  Select Size: XS
                </h6>
                <div className="flex gap-3 items-center">
                  <SizeOption
                    size="XL"
                    onClick={() => dispatch(setSize("XL"))}
                    isSelected={product?.size === "XL"}
                    available={true}
                  ></SizeOption>
                  <SizeOption
                    size="XS"
                    onClick={() => dispatch(setSize("XS"))}
                    isSelected={product?.size === "XS"}
                    available={true}
                  ></SizeOption>
                  <SizeOption
                    size="S"
                    onClick={() => dispatch(setSize("S"))}
                    isSelected={product?.size === "S"}
                    available={true}
                  ></SizeOption>
                  <SizeOption
                    size="M"
                    onClick={() => dispatch(setSize("M"))}
                    isSelected={product?.size === "M"}
                    available={true}
                  ></SizeOption>
                  <SizeOption
                    size="L"
                    onClick={() => dispatch(setSize("L"))}
                    isSelected={product?.size === "L"}
                    available={false}
                  ></SizeOption>
                </div>
              </div>
              <div className="space-y-2">
                <h6 className="font-medium leading-4 md:leading-5 lg:leading-6 poppins-font text-[#171717]">
                  Quantity
                </h6>
                <Counter></Counter>
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
        <div className="lg:col-span-3 space-y-4 md:space-y-5 lg:space-y-6">
          <div className="border border-[#E2E8F0] py-2 md:py-3 px-3 md:px-4 rounded-xl space-y-3">
            <h4 className="text-[#475569] text-lg font-medium leading-5 md:leading-6 lg:leading-7">
              Delivery Options
            </h4>
            <div className="space-y-3 md:space-y-4">
              <DeliveryOptions
                title="Regular"
                subTitle="Delivery within 2-3 days"
                imgSrc={PackageImg}
                isAvailable={true}
              ></DeliveryOptions>
              <DeliveryOptions
                title="Express"
                subTitle="Delivery within 24 Hours."
                imgSrc={PackageExpressImg}
                isAvailable={false}
              ></DeliveryOptions>
            </div>
          </div>
          <div className="border border-[#E2E8F0] py-2 md:py-3 px-3 md:px-4 rounded-xl space-y-3">
            <div className="space-y-3 md:space-y-4">
              <div className="space-y-3">
                <p className="text-[#475569] text-[12px] leading-3 md:leading-4">
                  Sold by
                </p>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex gap-2">
                    <img
                      src={soldByLogo}
                      alt="brand logo"
                      className="h-8 w-8 md:h-10 md:w-10"
                    />
                    <div className="space-y-2">
                      <div className="flex gap-1">
                        <p className="text-sm leading-4 md:leading-5">
                          BD FASHION HOUSE
                        </p>
                        <img
                          src={verifiedIcon}
                          alt="verified icon"
                          className="h-4 w-4 md:h-5 md:w-5"
                        />
                      </div>
                      <div className="flex w-[139px] h-5 text-white text-[10px] overflow-hidden">
                        <div className="relative w-12 bg-gradient-to-r from-orange-400 to-orange-600 flex items-center justify-center clip-orange">
                          <img
                            src={risingStarImg}
                            alt="icon"
                            className="h3 w3"
                          />
                        </div>
                        <div className="flex-1 -ml-4 pl-4 bg-purple-500 flex items-center px-2 clip-purple">
                          Rising Star
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center flex-row lg:flex-col xl:flex-row gap-3 border-b border-b-[#E2E8F0] pb-2">
                    <button className="text-sm text-[#00A788] font-medium leading-5 bg-[#E6F8F4] rounded-sm flex justify-center items-center gap-2 px-2 py-1 h-7 w-full max-w-[135px] transition active:scale-95 duration-100 ease-in-out">
                      <IoChatbubbleEllipsesOutline className="text-base" /> Chat
                      Now
                    </button>
                    <button className="text-sm text-[#475569] bg-[#F1F5F9] font-medium leading-5  rounded-sm  px-2 py-1 h-7 w-full max-w-[135px] transition active:scale-95 duration-100 ease-in-out">
                      View Shop
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-row lg:flex-col xl:flex-row gap-1 xl:gap-2 justify-between items-center">
                <RatingsByCategory
                  title="Shop Rating"
                  subTitle="99.8%"
                ></RatingsByCategory>
                <RatingsByCategory
                  title="Chat Response"
                  subTitle="90.0%"
                ></RatingsByCategory>
                <RatingsByCategory
                  title="Ship on Time"
                  subTitle="100.0%"
                ></RatingsByCategory>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
