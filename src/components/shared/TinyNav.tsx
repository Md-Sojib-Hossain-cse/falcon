/* eslint-disable @typescript-eslint/no-explicit-any */
import { PiPackageLight } from "react-icons/pi";
import { RiCustomerServiceLine, RiStoreLine } from "react-icons/ri";
import LogoNavItem from "../LogoNavItem";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useGetCategoriesQuery } from "../../redux/api/baseApi";
import { Link } from "react-router";

const TinyNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { isLoading, isError, data } = useGetCategoriesQuery(undefined);

  if (isLoading) return;

  if (isError) return;

  const dynamicCategories = data?.data?.map((item: any) => item?.name);

  const navItems = [
    "Electronics",
    "Home Appliances",
    "Mother & Baby",
    "Automotive",
    "Sports Gear",
  ];

  return (
    <div className="bg-white text-black shadow-sm border-b border-gray-200">
      <div className="flex justify-between items-center w-full max-w-[1440px] mx-auto h-12 px-4 md:px-8 lg:px-20 gap-6 relative">
        <div className="flex items-center gap-2 lg:gap-4">
          <div className=" text-[#00B795] cursor-pointer">
            {isOpen ? (
              <IoMdClose size={20} onClick={() => setIsOpen(false)} />
            ) : (
              <RxHamburgerMenu size={20} onClick={() => setIsOpen(true)} />
            )}
          </div>

          <p className="text-[#0F172A] text-base font-medium pr-4 border-r border-[#475569]">
            Categories
          </p>

          {isOpen && (
            <ul className="absolute lg:ml-20 top-12 left-0 w-full bg-white  z-20 flex flex-col gap-2 px-4 py-2 shadow-md lg:max-w-96 rounded-b-sm">
              {navItems.map((item, idx) => (
                <Link
                  to="/"
                  key={idx}
                  onClick={() => setIsOpen(false)}
                  className="text-[#0F172A] text-sm list-none font-medium hover:text-[#00B795] cursor-pointer lg:hidden"
                >
                  {item}
                </Link>
              ))}
              <div className="border-b border-b-gray-200 lg:hidden"></div>
              {dynamicCategories.map((item: string, index: number) => (
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  key={index}
                  className="text-[#0F172A] text-sm font-medium hover:text-[#00B795] cursor-pointer"
                >
                  {item}
                </Link>
              ))}
            </ul>
          )}
        </div>

        <div className="hidden lg:flex gap-5 xl:gap-6 2xl:gap-8 items-center">
          {navItems.map((item, idx) => (
            <Link
              to="/"
              key={idx}
              className="text-[#0F172A] text-sm list-none font-medium hover:text-[#00B795] cursor-pointer"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex gap-3 md:gap-4 2xl:gap-6 items-center ml-auto">
          <LogoNavItem title="TRACK ORDER">
            <PiPackageLight className="h-4 w-4 text-[#475569] hover:text-[#00B795]" />
          </LogoNavItem>
          <LogoNavItem title="HELP CENTER">
            <RiCustomerServiceLine className="h-4 w-4 text-[#475569] hover:text-[#00B795]" />
          </LogoNavItem>
          <LogoNavItem title="SELL WITH US">
            <RiStoreLine className="h-4 w-4 text-[#475569] hover:text-[#00B795]" />
          </LogoNavItem>
        </div>
      </div>
    </div>
  );
};

export default TinyNav;
