type DeliveryOptions = {
  title: string;
  subTitle: string;
  imgSrc: string;
  isAvailable?: boolean;
};

const DeliveryOptions = ({
  title,
  subTitle,
  imgSrc,
  isAvailable,
}: DeliveryOptions) => {
  return (
    <div className="flex gap-2">
      <img src={imgSrc} alt="icon" className="h-5 md:h-6 w-5 md:w-6" />
      <div className="space-y-1">
        <div className="flex gap-3 items-center">
          <h5
            className={`${
              isAvailable ? "text-[#334155]" : "text-[#CBD5E1]"
            } font-medium leading-5 md:leading-6 lg:leading-7`}
          >
            {title}
          </h5>
          {!isAvailable && (
            <p className="text-[#F87171] text-[10px] font-semibold">
              Not Available
            </p>
          )}
        </div>
        <p
          className={`${
            isAvailable ? "text-[#475569]" : "text-[#CBD5E1]"
          } text-sm leading-3 md:leading-4 lg:leading-5`}
        >
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default DeliveryOptions;
