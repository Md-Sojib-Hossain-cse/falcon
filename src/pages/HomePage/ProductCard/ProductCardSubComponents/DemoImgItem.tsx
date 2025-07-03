const DemoImgItem = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <img
      src={imgSrc}
      alt="alternateImages"
      className="h-16 w-16 rounded-sm overflow-auto border border-[#C6C6C6] transition ease-in-out duration-200 hover:scale-[150%]"
    />
  );
};

export default DemoImgItem;
