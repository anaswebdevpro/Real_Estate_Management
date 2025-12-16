// app/router.jsx
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../auth/ProtectedRoute";
import { ROLES } from "./roles";

// Layouts
import AdminLayout from "../layouts/AdminLayout";
import DeveloperLayout from "../layouts/DeveloperLayout";
import BrokerLayout from "../layouts/BrokerLayout";
import SalesLayout from "../layouts/SalesLayout";
import ClientLayout from "../layouts/ClientLayout";

// Pages
import AdminDashboard from "../pages/admin/Dashboard";
import DeveloperDashboard from "../pages/developer/Dashboard";
import BrokerDashboard from "../pages/broker/Dashboard";
import SalesDashboard from "../pages/sales/Dashboard";
import ClientDashboard from "../pages/client/Dashboard";

import Login from "../pages/Public/Login";
import Signup from "../pages/Public/Signup";
import ForgotPassword from "../pages/Public/ForgotPassword";

export const router = createBrowserRouter([
  {
    element: <ProtectedRoute allowedRoles={[ROLES.ADMIN]} />,
    children: [
      {
        path: "/admin",
        element: <AdminLayout />,
        children: [{ index: true, element: <AdminDashboard /> }],
      },
    ],
  },

  {
    element: <ProtectedRoute allowedRoles={[ROLES.DEVELOPER]} />,
    children: [
      {
        path: "/developer",
        element: <DeveloperLayout />,
        children: [{ index: true, element: <DeveloperDashboard /> }],
      },
    ],
  },

  {
    element: <ProtectedRoute allowedRoles={[ROLES.BROKER]} />,
    children: [
      {
        path: "/broker",
        element: <BrokerLayout />,
        children: [{ index: true, element: <BrokerDashboard /> }],
      },
    ],
  },

  {
    element: <ProtectedRoute allowedRoles={[ROLES.SALES]} />,
    children: [
      {
        path: "/sales",
        element: <SalesLayout />,
        children: [{ index: true, element: <SalesDashboard /> }],
      },
    ],
  },

  {
    element: <ProtectedRoute allowedRoles={[ROLES.CLIENT]} />,
    children: [
      {
        path: "/client",
        element: <ClientLayout />,
        children: [{ index: true, element: <ClientDashboard /> }],
      },
    ],
  },
  // Public routes
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
]);
