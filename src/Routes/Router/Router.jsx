import { createBrowserRouter } from "react-router-dom";
import Root from "../../Pages/Root/Root";
import Home from "../../Pages/Home/Home";
import Menu from "../../Pages/Menu/Menu";
import OurShop from "../../Pages/OurShop/OurShop";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Dashboard from "../../Dashboard/Dashboard";
import Cart from "../../Layouts/Cart/Cart";
import AllUser from "../../Dashboard/AllUser/AllUser";
import AdminPrivate from "../../Components/AdminPrivate/AdminPrivate";
import AddItems from "../../Dashboard/AddItems/AddItems";
import ManageAllItems from "../../Dashboard/ManageAllItems/ManageAllItems";
import ManageItemUpdate from "../../Dashboard/ManageItemUpdate/ManageItemUpdate";
import Payment from "../../Dashboard/Payment/Payment";
import PaymentHistory from "../../Dashboard/PaymentHistory/PaymentHistory";
import PrivateRouter from "./../../PrivateRouter/PrivateRouter";
import UserHome from "../../Dashboard/UserHome/UserHome";
import AdminHome from "../../Dashboard/AdminHome/AdminHome";

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
      {
        path: "/ourShop/:category",
        element: <OurShop />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <Dashboard />
      </PrivateRouter>
    ),
    children: [
      {
        path: "/dashboard/cart",
        element: <Cart />,
      },
      {
        path: "/dashboard/payment_history",
        element: <PaymentHistory />,
      },
      {
        path: "/dashboard/userHome",
        element: <UserHome />,
      },
      {
        path: "/dashboard/adminHome",
        element: <AdminHome />,
      },
      {
        path: "/dashboard/payment",
        element: <Payment />,
      },
      {
        path: "/dashboard/allUser",
        element: <AllUser />,
      },
      {
        path: "/dashboard/addItems",
        element: (
          <AdminPrivate>
            <AddItems />
          </AdminPrivate>
        ),
      },
      {
        path: "/dashboard/ManageAllItems",
        element: <ManageAllItems />,
      },
      {
        path: "/dashboard/ManageItemUpdate/:id",
        element: <ManageItemUpdate />,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/menu/${params.id}`),
      },
    ],
  },
]);

export default Router;
