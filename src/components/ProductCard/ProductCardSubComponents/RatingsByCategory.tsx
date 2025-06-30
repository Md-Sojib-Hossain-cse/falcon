type RatingsByCategory = {
  title: string;
  subTitle: string;
};

const RatingsByCategory = ({ title, subTitle }: RatingsByCategory) => {
  return (
    <div className="space-y-3 text-center">
      <h6 className="text-[#475569] text-10px lg:text-[11px] 2xl:text-[12px] font-medium">
        {title}
      </h6>
      <p className="text-[#64748B] text-xl lg:text-2xl 2xl:text-[25px] leading-4 md:leading-5">
        {subTitle}
      </p>
    </div>
  );
};

export default RatingsByCategory;
