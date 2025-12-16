import React from "react";
import { Outlet } from "react-router-dom";

const BrokerLayout = () => (
  <div>
    <h2>Broker Panel</h2>
    <Outlet />
  </div>
);

export default BrokerLayout;
