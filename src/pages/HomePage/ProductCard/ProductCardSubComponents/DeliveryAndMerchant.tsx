import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import DeliveryOptions from "./DeliveryOptions";
import RatingsByCategory from "./RatingsByCategory";
import PackageImg from "../../../../assets/package.png";
import PackageExpressImg from "../../../../assets/packageMoving.png";
import verifiedIcon from "../../../../assets/varified.png";
import risingStarImg from "../../../../assets/starObjectImg.png";
import NoMerchant from "../../../../assets/merchants.png";
import { useAppSelector } from "../../../../redux/hook";
import { selectProduct } from "../../../../redux/features/product/product.Slice";

const DeliveryAndMerchant = () => {
  const product = useAppSelector(selectProduct);

  const productData = product?.data;

  return (
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
                  src={productData?.brand?.image || NoMerchant}
                  alt="brand logo"
                  className="h-8 w-8 md:h-10 md:w-10"
                />
                <div className="space-y-2">
                  <div className="flex gap-1">
                    <p className="text-sm leading-4 md:leading-5">
                      {productData?.brand?.name || "Unknown"}
                    </p>
                    <img
                      src={verifiedIcon}
                      alt="verified icon"
                      className="h-4 w-4 md:h-5 md:w-5"
                    />
                  </div>
                  <div className="flex w-[139px] h-5 text-white text-[10px] overflow-hidden">
                    <div className="relative w-12 bg-gradient-to-r from-orange-400 to-orange-600 flex items-center justify-center clip-orange">
                      <img src={risingStarImg} alt="icon" className="h3 w3" />
                    </div>
                    <div className="flex-1 -ml-4 pl-4 bg-purple-500 flex items-center px-2 clip-purple">
                      Rising Star
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center flex-row lg:flex-col xl:flex-row gap-3 border-b border-b-[#E2E8F0] pb-2">
                <button className="text-sm text-[#00A788] font-medium leading-5 bg-[#E6F8F4] rounded-sm flex justify-center items-center gap-2 px-2 py-1 h-7 w-full max-w-[135px] transition active:scale-95 duration-100 ease-in-out">
                  <IoChatbubbleEllipsesOutline className="text-base" /> Chat Now
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
  );
};

export default DeliveryAndMerchant;
