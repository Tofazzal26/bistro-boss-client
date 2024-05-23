import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { TbToolsKitchen3 } from "react-icons/tb";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaBook } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { IoCartSharp } from "react-icons/io5";

const Dashboard = () => {
  const isAdmin = true;

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-[#d1a054]">
        <div className="p-4">
          <div className="p-3">
            <h1 className="text-[25px] font-bold">BISTRO BOSS</h1>
            <p className=" text-2xl tracking-[5px] text-black">Restaurant</p>
          </div>
          <div>
            <ul className="menu space-y-2">
              <li className="font-semibold text-[16px]">
                <NavLink to="/dashboard/admin">
                  <FaHome size={20} /> Admin Home
                </NavLink>
              </li>
              <li className="font-semibold text-[16px]">
                <NavLink to="/dashboard/cart">
                  <IoCartSharp size={20} />
                  My Cart
                </NavLink>
              </li>
              <li className="font-semibold text-[16px]">
                <NavLink to="/dashboard/items">
                  <TbToolsKitchen3 size={20} /> Add Items
                </NavLink>
              </li>
              <li className="font-semibold text-[16px]">
                <NavLink to="/dashboard/manage">
                  <TfiMenuAlt size={20} /> Manage Items
                </NavLink>
              </li>
              <li className="font-semibold text-[16px]">
                <NavLink to="/dashboard/booking">
                  <FaBook size={20} />
                  Manage Bookings
                </NavLink>
              </li>
              <li className="font-semibold text-[16px]">
                <NavLink to="/dashboard/allUser">
                  <HiUserGroup size={20} /> All Users
                </NavLink>
              </li>
            </ul>
          </div>
          {/* main menu site */}
          <div className="divider"></div>
          <div>
            <ul className="menu space-y-2">
              <li className="font-semibold text-[16px]">
                <NavLink to="/">
                  <FaHome size={20} /> Home
                </NavLink>
              </li>

              <li className="font-semibold text-[16px]">
                <NavLink to="/ourMenu">
                  <TfiMenuAlt size={20} /> Menu
                </NavLink>
              </li>
              <li className="font-semibold text-[16px]">
                <NavLink to="/ourShop/salad">
                  <FaBook size={20} />
                  Shop
                </NavLink>
              </li>
              <li className="font-semibold text-[16px]">
                <NavLink to="/contact">
                  <HiUserGroup size={20} /> Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
