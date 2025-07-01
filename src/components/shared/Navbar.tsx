import { IoCartOutline } from "react-icons/io5";
import Logo from "../../assets/logo.png";
import { CiSearch, CiUser } from "react-icons/ci";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-[#0F172A] text-white">
      <div className="flex justify-between items-center w-full max-w-[1440px] mx-auto px-4 py-2 md:px-8 md:py-3 lg:px-20 lg:py-4 gap-6">
        <div className="flex items-center gap-1 md:w-1/4">
          <img
            src={Logo}
            alt="website_logo"
            className="h-4 md:h-5 lg:h-6 w-4 md:w-5 lg:w-6"
          />
          <h1 className="text-white font-bold text-lg md:text-xl lg:text-2xl uppercase">
            FALCON
          </h1>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search for anything..."
            className="bg-white rounded-l-sm text-black outline-0 border-0 h-9 md:h-10 lg:h-12 w-full pl-3"
          />
          <button className="bg-[#00B795] h-9 md:h-10 lg:h-12 w-9 md:w-10 lg:w-12 flex justify-center items-center rounded-r-sm">
            <CiSearch className="h-4 md:h-5 lg:h-6 w-4 md:w-5 lg:w-6 text-white" />
          </button>
        </div>
        <div className=" md:w-1/4 flex justify-end items-center gap-2">
          <Link to="/myCart" className="relative">
            <IoCartOutline className="h-4 md:h-6 lg:h-8 w-4 md:w-6 lg:w-8" />
            <p className="absolute -top-2 -right-2 bg-[#EF4444] h-3  md:h-5 w-3  md:w-5 rounded-full text-white flex justify-center items-center text-[10px] md:text[12px]">
              0
            </p>
          </Link>
          <CiUser className="h-4 md:h-6 lg:h-8 w-4 md:w-6 lg:w-8" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
