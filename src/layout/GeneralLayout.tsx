import { Outlet, useLocation } from "react-router";
import Navbar from "../components/shared/Navbar";

const GeneralLayout = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="onest-font">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default GeneralLayout;
