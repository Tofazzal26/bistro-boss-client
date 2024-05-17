import { NavLink } from "react-router-dom";

const NavBar = () => {
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
          to="/ourShop"
          className={({ isActive }) =>
            isActive ? "text-[#EEFF25]" : "text-white"
          }
        >
          Our Shop
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
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
