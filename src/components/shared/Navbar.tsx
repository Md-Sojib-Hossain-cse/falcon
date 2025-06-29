import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="border-b border-b-[#E0E0E0]">
      <div className="flex justify-between items-center w-full max-w-[1440px] mx-auto px-4 py-2 md:px-8 md:py-3 lg:px-20 lg:py-4">
        <div className="flex items-center">
          <img src={Logo} alt="website_logo" className="h-9" />
          <h1 className="text-primary text-2xl font-bold">Falcon</h1>
        </div>
        <button className="text-base font-semibold py-3 px-6 rounded-xl border border-[#E0E0E0]">
          Exit
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
