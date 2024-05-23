import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { IoCartSharp } from "react-icons/io5";
import useCart from "../../hooks/useCart/useCart";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        toast.success("Logout Successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinks = (
    <>
      <li className="">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#EEFF25]" : "text-white"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-[#EEFF25]" : "text-white"
          }
        >
          Contact Us
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "text-[#EEFF25]" : "text-white"
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li className="">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#EEFF25]" : "text-white"
          }
          to="/ourMenu"
        >
          Our Menu
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/ourShop/salad"
          className={({ isActive }) =>
            isActive ? "text-[#EEFF25]" : "text-white"
          }
        >
          Our Shop
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard/cart"
          className={({ isActive }) =>
            isActive ? "text-[#EEFF25]" : "text-white"
          }
        >
          <button className="flex items-center gap-2">
            <IoCartSharp size={22} />
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-10 bg-[#15151580] max-w-screen-2xl mx-auto text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold text-lg  space-x-4">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-4">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>
              <button
                onClick={handleLogOut}
                className="text-white font-semibold text-[18px]"
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="space-x-4">
              <button className="font-semibold text-[18px]">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "text-[#EEFF25]" : "text-white"
                  }
                >
                  Login
                </NavLink>
              </button>
              <button className="font-semibold text-[18px] ">
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive ? "text-[#EEFF25]" : "text-white"
                  }
                >
                  Sign Up
                </NavLink>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
