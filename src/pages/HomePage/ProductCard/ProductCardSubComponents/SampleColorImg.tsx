/* eslint-disable @typescript-eslint/no-explicit-any */
import { CgUnavailable } from "react-icons/cg";
import { useAppDispatch } from "../../../../redux/hook";
import { setColor } from "../../../../redux/features/product/productCard.Slice";

type SampleColorImg = {
  imgSrc: string;
  isSelected: boolean;
  available: boolean;
  onClick?: () => void;
  data: any;
};

const SampleColorImg = ({
  imgSrc,
  isSelected,
  onClick,
  available,
  data,
}: SampleColorImg) => {
  const dispatch = useAppDispatch();

  const color = data?.variation_attributes.map((variationInfo: any) => {
    if (variationInfo.attribute.name === "Color") {
      return variationInfo.attribute_option.attribute_value;
    }
    return;
  });

  return (
    <div onClick={() => dispatch(setColor(color))} className="relative">
      <img
        title={color}
        onClick={onClick}
        src={imgSrc}
        alt="sample images"
        className={`${
          isSelected ? "border border-[#00A788]" : ""
        } h-14 w-14 rounded-sm overflow-auto`}
      />
      {!available && (
        <div className="bg-black opacity-40 rounded-sm absolute w-full h-full top-0 flex justify-center items-center">
          <CgUnavailable className="h-5 w-5 lg:h-6 lg:w-6 text-[#F1F5F9]" />
        </div>
      )}
    </div>
  );
};

export default SampleColorImg;
