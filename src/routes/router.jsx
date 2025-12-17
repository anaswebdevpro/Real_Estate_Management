import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import LoginPage from "../Pages/auth/LoginPage";
import SignupPage from "../Pages/auth/SignupPage";
import MainLayout from "../layouts/MainLayout";
import DashboardPage from "../Pages/dashboard/DashboardPage";
import OrganizationsPage from "../Pages/super-admin/OrganizationsPage";
import UsersPage from "../Pages/users/UsersPage";
import PlatformAnalytics from "../Pages/super-admin/PlatformAnalytics";
import SettingsPage from "../Pages/settings/SettingsPage";
import ProjectsList from "../Pages/projects/ProjectsList";
import CreateProjectForm from "../Pages/projects/CreateProjectForm";
import ProjectDetailsPage from "../Pages/projects/ProjectDetailsPage";
import BrokersPage from "../Pages/brokers/BrokersPage";
import LeadsPage from "../Pages/sales/LeadsPage";
import FinancePage from "../Pages/finance/FinancePage";
import ReportsPage from "../Pages/finance/ReportsPage";
import ConstructionPage from "../Pages/construction/ConstructionPage";
import IssuesPage from "../Pages/projects/IssuesPage";
import TasksPage from "../Pages/projects/TasksPage";
import VendorsPage from "../Pages/projects/VendorsPage";
import DocumentsPage from "../Pages/shared/DocumentsPage";
import InventoryPage from "../Pages/sales/InventoryPage";
import BookingsPage from "../Pages/sales/BookingsPage";
import CommissionsPage from "../Pages/shared/CommissionsPage";
import ClientPropertyPage from "../Pages/client/ClientPropertyPage";
import ClientPaymentsPage from "../Pages/client/ClientPaymentsPage";
import SupportPage from "../Pages/shared/SupportPage";





import PlaceholderPage from "../components/ui/PlaceholderPage";
import ProtectedRoute from "../components/ProtectedRoute";
import RootRedirect from "../components/RootRedirect";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/signup",
        element: <SignupPage />,
    },
    {
        path: "/",
        element: <ProtectedRoute><MainLayout /></ProtectedRoute>,
        children: [
            { index: true, element: <RootRedirect /> },

            // 1. SUPER ADMIN ROUTES
            {
                path: "super-admin",
                children: [
                    { path: "dashboard", element: <DashboardPage /> },
                    { path: "organizations", element: <OrganizationsPage /> },
                    { path: "users", element: <UsersPage /> },
                    { path: "roles-permissions", element: <UsersPage /> }, // Reusing UsersPage
                    { path: "analytics", element: <PlatformAnalytics /> },
                    { path: "settings", element: <SettingsPage /> },
                ]
            },

            // 2. ORG ADMIN ROUTES
            {
                path: "org",
                children: [
                    { path: "dashboard", element: <DashboardPage /> },
                    { path: "projects", element: <ProjectsList /> },
                    { path: "projects/create", element: <CreateProjectForm /> },
                    { path: "projects/:id", element: <ProjectDetailsPage /> },
                    { path: "users", element: <UsersPage /> },
                    { path: "brokers", element: <BrokersPage /> },
                    { path: "sales-overview", element: <LeadsPage /> }, // Reusing LeadsPage
                    { path: "finance-overview", element: <FinancePage /> },
                    { path: "reports", element: <ReportsPage /> },
                    { path: "settings", element: <SettingsPage /> },
                ]
            },

            // 3. PROJECT MANAGER ROUTES
            {
                path: "project",
                children: [
                    { path: "dashboard", element: <DashboardPage /> },
                    { path: "milestones", element: <ConstructionPage /> },
                    { path: "progress", element: <ConstructionPage /> }, // Reusing ConstructionPage
                    { path: "issues", element: <IssuesPage /> },
                    { path: "tasks", element: <TasksPage /> },
                    { path: "vendors", element: <VendorsPage /> },
                    { path: "documents", element: <DocumentsPage /> },
                    { path: "settings", element: <SettingsPage /> },
                ]
            },

            // 4. SALES MANAGER ROUTES
            {
                path: "sales-manager",
                children: [
                    { path: "dashboard", element: <DashboardPage /> },
                    { path: "leads", element: <LeadsPage /> },
                    { path: "team", element: <UsersPage /> },
                    { path: "inventory", element: <InventoryPage /> },
                    { path: "bookings", element: <BookingsPage /> },
                    { path: "reports", element: <ReportsPage /> },
                    { path: "settings", element: <SettingsPage /> },
                ]
            },

            // 5. SALES EXECUTIVE ROUTES
            {
                path: "sales",
                children: [
                    { path: "dashboard", element: <DashboardPage /> },
                    { path: "leads", element: <LeadsPage /> },
                    { path: "followups", element: <TasksPage /> }, // Reusing TasksPage for now
                    { path: "site-visits", element: <BookingsPage /> }, // Reusing BookingsPage logic or similar
                    { path: "bookings/create", element: <BookingsPage /> },
                    { path: "profile", element: <SettingsPage /> },
                    { path: "inventory", element: <InventoryPage /> },
                    { path: "settings", element: <SettingsPage /> },
                ]
            },

            // 6. BROKER ROUTES
            {
                path: "broker",
                children: [
                    { path: "dashboard", element: <DashboardPage /> },
                    { path: "leads", element: <LeadsPage /> },
                    { path: "inventory", element: <InventoryPage /> },
                    { path: "commissions", element: <CommissionsPage /> },
                    { path: "documents", element: <DocumentsPage /> },
                    { path: "settings", element: <SettingsPage /> },
                ]
            },

            // 7. CLIENT ROUTES
            {
                path: "client",
                children: [
                    { path: "dashboard", element: <DashboardPage /> },
                    { path: "property", element: <ClientPropertyPage /> },
                    { path: "payments", element: <ClientPaymentsPage /> },
                    { path: "documents", element: <DocumentsPage /> },
                    { path: "support", element: <SupportPage /> },
                    { path: "settings", element: <SettingsPage /> },
                ]
            },

            // 8. FINANCE MANAGER ROUTES
            {
                path: "finance",
                children: [
                    { path: "dashboard", element: <DashboardPage /> },
                    { path: "payments", element: <FinancePage /> },
                    { path: "invoices", element: <DocumentsPage /> }, // Reusing DocumentsPage for invoices
                    { path: "commissions", element: <CommissionsPage /> },
                    { path: "revenue", element: <FinancePage /> },
                    { path: "reports", element: <ReportsPage /> },
                    { path: "settings", element: <SettingsPage /> },
                ]
            },

            // Fallbacks
            { path: "notifications", element: <PlaceholderPage title="Notifications" /> },
            { path: "profile", element: <SettingsPage /> },
        ],
    },
    {
        path: "*",
        element: <Navigate to="/" replace />,
    }
]);
