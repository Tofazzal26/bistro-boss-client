import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Router/Router";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <div className="max-w-screen-2xl mx-auto">
          <RouterProvider router={Router}></RouterProvider>
        </div>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
