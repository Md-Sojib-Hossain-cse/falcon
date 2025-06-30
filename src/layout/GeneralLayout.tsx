import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";

const GeneralLayout = () => {
  return (
    <div className="onest-font">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default GeneralLayout;
