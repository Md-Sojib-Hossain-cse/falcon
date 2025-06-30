import { CgUnavailable } from "react-icons/cg";

type SampleColorImg = {
  imgSrc: string;
  isSelected: boolean;
  available: boolean;
  onClick?: () => void;
};

const SampleColorImg = ({
  imgSrc,
  isSelected,
  onClick,
  available,
}: SampleColorImg) => {
  return (
    <div className="relative">
      <img
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
