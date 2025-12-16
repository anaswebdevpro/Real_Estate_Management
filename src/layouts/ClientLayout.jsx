import React from "react";
import { Outlet } from "react-router-dom";

const ClientLayout = () => (
  <div>
    <h2>Client Panel</h2>
    <Outlet />
  </div>
);

export default ClientLayout;
