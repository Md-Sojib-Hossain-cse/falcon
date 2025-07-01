import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import NavigationPath from "../components/shared/NavigationPath";
import Footer from "../components/shared/Footer";

const GeneralLayout = () => {
  return (
    <div className="onest-font">
      <Navbar></Navbar>
      <NavigationPath></NavigationPath>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default GeneralLayout;
