const SampleColorImg = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <img
      src={imgSrc}
      alt="sample images"
      className="h-14 w-14 rounded-sm overflow-auto"
    />
  );
};

export default SampleColorImg;
