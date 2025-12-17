import { useAuth } from "../../contexts/AuthContext";
import { SuperAdminDashboard } from "./SuperAdminDashboard";
import { OrganizationAdminDashboard } from "./OrganizationAdminDashboard";
import { ProjectManagerDashboard } from "./ProjectManagerDashboard";
import { SalesDashboard } from "./SalesDashboard";
import { BrokerDashboard } from "./BrokerDashboard";
import { ClientDashboard } from "./ClientDashboard";

export default function DashboardPage() {
    const { user } = useAuth();
    const role = user?.role || "GUEST"; // Default to guest if no user

    const renderDashboard = () => {
        switch (role) {
            case "SUPER_ADMIN":
                return <SuperAdminDashboard />;
            case "ORG_ADMIN":
                return <OrganizationAdminDashboard />;
            case "PROJECT_MANAGER":
                return <ProjectManagerDashboard />;
            case "SALES_MANAGER":
            case "SALES_EXECUTIVE":
                return <SalesDashboard />;
            case "BROKER":
                return <BrokerDashboard />;
            case "CLIENT":
                return <ClientDashboard />;
            case "FINANCE_MANAGER":
                // Fallback to Org Admin or create Finance Dashboard if simpler
                return <OrganizationAdminDashboard />;
            default:
                return (
                    <div className="flex flex-col items-center justify-center p-10 text-center space-y-4">
                        <h2 className="text-2xl font-bold">Welcome, {user?.name || "Guest"}!</h2>
                        <p className="text-muted-foreground">Your role ({role}) does not have a specific dashboard yet.</p>
                    </div>
                );
        }
    };

    return (
        <div className="fade-in">
            {/* Simple animation wrapper if needed */}
            {renderDashboard()}
        </div>
    );
}
