import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router.jsx";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./Providers/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>
      <Toaster position="top-right" reverseOrder={false} />
    </AuthProvider>
  </React.StrictMode>
);
