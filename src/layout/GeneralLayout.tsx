import Navbar from "../components/shared/Navbar";
import Home from "../pages/HomePage/Home";

const GeneralLayout = () => {
  return (
    <div className="onest-font">
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
};

export default GeneralLayout;
