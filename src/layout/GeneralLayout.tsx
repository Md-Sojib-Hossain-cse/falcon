import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import NavigationPath from "../components/shared/NavigationPath";
import Footer from "../components/shared/Footer";
import TinyNav from "../components/shared/TinyNav";
import { Toaster } from "react-hot-toast";

const GeneralLayout = () => {
  return (
    <div className="onest-font">
      <Toaster />
      <Navbar></Navbar>
      <TinyNav></TinyNav>
      <NavigationPath></NavigationPath>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default GeneralLayout;
