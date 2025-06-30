import { Outlet, useLocation } from "react-router";
import Navbar from "../components/shared/Navbar";
import NavigationPath from "../components/shared/NavigationPath";

const GeneralLayout = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="onest-font">
      <Navbar></Navbar>
      <NavigationPath></NavigationPath>
      <Outlet></Outlet>
    </div>
  );
};

export default GeneralLayout;
