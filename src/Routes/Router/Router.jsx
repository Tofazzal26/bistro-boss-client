import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../../Pages/Root/Root";
import Home from "../../Pages/Home/Home";
import Menu from "../../Pages/Menu/Menu";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/ourMenu",
        element: <Menu />,
      },
    ],
  },
]);

export default Router;
