const DemoImgItem = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <img
      src={imgSrc}
      alt="alternateImages"
      className="h-16 w-16 rounded-sm overflow-auto"
    />
  );
};

export default DemoImgItem;
