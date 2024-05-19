import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import NavBar from "../../Shared/NavBar/NavBar";

const Root = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <div>
      {noHeaderFooter || <NavBar />}

      <Outlet />
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Root;
