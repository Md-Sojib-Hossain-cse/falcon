import { createBrowserRouter } from "react-router";
import GeneralLayout from "../layout/GeneralLayout";
import Home from "../pages/HomePage/Home";
import MyCartPage from "../pages/MyCart/MyCartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GeneralLayout></GeneralLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Home></Home>,
      },
      {
        path: "/myCart",
        element: <MyCartPage></MyCartPage>,
      },
    ],
  },
]);

export default router;
