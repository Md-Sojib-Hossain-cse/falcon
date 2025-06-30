import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Description = () => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div className="relative lg:col-span-3 rounded-sm bg-white min-h-80 p-4 md:p-5 lg:p-6 flex flex-col justify-between">
      <div
        className={`${
          seeMore ? "max-h-auto overflow-auto" : "overflow-hidden max-h-48"
        } relative`}
      >
        <h3 className="text-[#252B42] text-lg font-medium md:text-xl lg:text-2xl leading-6 md:leading-7 lg:leading-8 mb-2">
          Description
        </h3>
        <p className="text-[#475569] text-sm md:text-base leading-5 md:leading-6 lg:leading-7">
          Just as a book is judged by its cover, the first thing you notice when
          you pick up a modern smartphone is the display. Nothing surprising,
          because advanced technologies allow you to practically level the
          display frames and cutouts for the front camera and speaker, leaving
          no room for bold design solutions. And how good that in such realities
          Apple everything is fine with displays. Advanced technologies allow
          you to practically level the display frames and cutouts for the front
          camera and speaker, leaving no room for bold design solutions. And how
          good that in such realities Apple everything
        </p>

        <div
          className={`${
            seeMore && "hidden"
          } absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent pointer-events-none`}
        />
      </div>

      {seeMore ? (
        <button
          onClick={() => {
            setSeeMore(!seeMore);
          }}
          className="text-[#0F172A] font-medium leading-4 flex items-center gap-1 rounded-sm p-2.5 h-10 w-36 mx-auto mt-4 transition active:scale-95 duration-100 ease-in-out"
        >
          See Less
          <FaAngleUp />
        </button>
      ) : (
        <button
          onClick={() => {
            setSeeMore(!seeMore);
          }}
          className="text-[#0F172A] font-medium leading-4 flex items-center gap-1 rounded-sm p-2.5 h-10 w-36 mx-auto mt-4 transition active:scale-95 duration-100 ease-in-out"
        >
          See More
          <FaAngleDown />
        </button>
      )}
    </div>
  );
};

export default Description;
