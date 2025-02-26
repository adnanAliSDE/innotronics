import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ProductCard, Header, Hero } from "./components/index.js";
import Home from "./components/Home/Home.jsx";
import Layout from "./Layout.jsx";

import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Cart from "./components/Cart.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
