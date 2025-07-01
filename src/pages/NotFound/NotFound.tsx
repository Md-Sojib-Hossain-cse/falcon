import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4 md:gap-6 justify-center items-center">
      <h3 className="text-3xl md:text-4xl lg:text-5xl">404 - Page Not Found</h3>
      <Link
        to="/"
        className="text-white text-center font-medium bg-[#00B795] rounded-sm p-2.5 w-full max-w-80 transition active:scale-95 duration-100 ease-in-out"
      >
        Home
      </Link>
    </div>
  );
};

export default NotFound;
