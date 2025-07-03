/* eslint-disable @typescript-eslint/no-explicit-any */
type SizeOption = {
  isSelected: boolean;
  available: boolean;
  onClick?: () => void;
  item: any;
};

const SizeOption = ({ isSelected, available, onClick, item }: SizeOption) => {
  return (
    <button
      onClick={onClick}
      className={`uppercase font-medium py-0.5 px-2.5 rounded-sm border ${
        isSelected ? "border-[#00A788]" : "border-gray-200"
      } ${available ? "text-[#334155]" : "text-[#CBD5E1]"} h-10 w-10`}
      disabled={available === false}
    >
      {item?.attribute_option?.attribute_value}
    </button>
  );
};

export default SizeOption;
