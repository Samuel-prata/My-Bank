import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Register from "./Components/Register/Register.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Perfil from "./Components/Perfil/Perfil.jsx";
import PixArea from "./Components/Perfil/PixArea.jsx";
import KeyPix from "./Components/Operations/KeyPix.jsx";

const router = createBrowserRouter([
  {
    path: "/Sign-up",
    element: <Register />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/User",
    element: <Perfil />,
  },
  {
    path: "/PixArea",
    element: <PixArea />,
  },
  {
    path:"/PixArea/Key",
    element: <KeyPix/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
