const SizeOption = ({
  size,
  isSelected,
  available,
  onClick,
}: {
  size: string;
  isSelected: boolean;
  available: boolean;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`uppercase font-medium py-0.5 px-2.5 rounded-sm border ${
        isSelected ? "border-[#00A788]" : "border-gray-200"
      } ${available ? "text-[#334155]" : "text-[#CBD5E1]"} h-10 w-10`}
      disabled={available === false}
    >
      {size}
    </button>
  );
};

export default SizeOption;
