import { createBrowserRouter } from "react-router";
import GeneralLayout from "../layout/GeneralLayout";
import Home from "../pages/HomePage/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GeneralLayout></GeneralLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
