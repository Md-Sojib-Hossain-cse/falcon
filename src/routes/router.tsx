import { createBrowserRouter } from "react-router";
import GeneralLayout from "../layout/GeneralLayout";
import MyCartPage from "../pages/MyCart/MyCartPage";
import NotFound from "../pages/NotFound/NotFound";
import Product from "../pages/HomePage/Product";
import HomePage from "../pages/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GeneralLayout></GeneralLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "products/:slug",
        element: <Product></Product>,
      },
      {
        path: "myCart",
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
