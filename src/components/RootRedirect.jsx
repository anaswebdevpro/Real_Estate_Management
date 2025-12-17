import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const RootRedirect = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;

  switch (user.role) {
    case "SUPER_ADMIN":
      return <Navigate to="/super-admin/dashboard" replace />;
    case "ORG_ADMIN":
      return <Navigate to="/org/dashboard" replace />;
    case "PROJECT_MANAGER":
      return <Navigate to="/project/dashboard" replace />;
    case "SALES_MANAGER":
      return <Navigate to="/sales-manager/dashboard" replace />;
    case "SALES_EXECUTIVE":
      return <Navigate to="/sales/dashboard" replace />;
    case "BROKER":
      return <Navigate to="/broker/dashboard" replace />;
    case "CLIENT":
      return <Navigate to="/client/dashboard" replace />;
    case "FINANCE_MANAGER":
      return <Navigate to="/finance/dashboard" replace />;
    default:
      return <Navigate to="/login" replace />;
  }
};

export default RootRedirect;
