import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => (
  <div>
    <h2>Admin Panel</h2>
    <Outlet />
  </div>
);

export default AdminLayout;
