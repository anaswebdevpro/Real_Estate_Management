import React from "react";
import { Outlet } from "react-router-dom";

const SalesLayout = () => (
  <div>
    <h2>Sales Panel</h2>
    <Outlet />
  </div>
);

export default SalesLayout;
