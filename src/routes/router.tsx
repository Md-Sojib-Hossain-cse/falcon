import { createBrowserRouter } from "react-router";
import GeneralLayout from "../layout/GeneralLayout";
import MyCartPage from "../pages/MyCart/MyCartPage";
import NotFound from "../pages/NotFound/NotFound";
import Product from "../pages/HomePage/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GeneralLayout></GeneralLayout>,
    children: [
      {
        index: true,
        element: <Product></Product>,
      },
      {
        path: "/products",
        element: <Product></Product>,
      },
      {
        path: "/myCart",
        element: <MyCartPage></MyCartPage>,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
