import { FaChevronRight } from "react-icons/fa";
import { Link, useLocation } from "react-router";

const NavigationPath = () => {
  const location = useLocation();
  const pathnames = location.pathname
    .split("/")
    .filter((paths) => paths !== "");
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-20 py-1 lg:py-2 text-[#0F172A]">
      <ul className="flex gap-1 justify-start items-center">
        <Link to="/">Home</Link>
        {pathnames.map((path, i) => (
          <li key={i} className="flex gap-1 justify-start items-center">
            <FaChevronRight className="font-extralight" />
            {path[0].toUpperCase() + path.slice(1)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationPath;
