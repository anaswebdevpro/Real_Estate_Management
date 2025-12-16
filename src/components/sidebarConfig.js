import {
  LayoutDashboard,
  Building2,
  Users,
  ClipboardList,
  Calendar,
  Wallet,
  FileText,
} from "lucide-react";

export const sidebarConfig = {
  admin: [
    { label: "Dashboard", path: "/admin", icon: LayoutDashboard },
    { label: "Developers", path: "/admin/developers", icon: Building2 },
    { label: "Users", path: "/admin/users", icon: Users },
    { label: "Reports", path: "/admin/reports", icon: FileText },
  ],

  developer: [
    { label: "Dashboard", path: "/developer", icon: LayoutDashboard },
    { label: "Projects", path: "/developer/projects", icon: Building2 },
    { label: "Inventory", path: "/developer/inventory", icon: ClipboardList },
    { label: "Brokers", path: "/developer/brokers", icon: Users },
    { label: "Sales", path: "/developer/sales", icon: Wallet },
  ],

  broker: [
    { label: "Dashboard", path: "/broker", icon: LayoutDashboard },
    { label: "My Leads", path: "/broker/leads", icon: Users },
    { label: "Inventory", path: "/broker/inventory", icon: Building2 },
    { label: "Meetings", path: "/broker/meetings", icon: Calendar },
    { label: "Commission", path: "/broker/commission", icon: Wallet },
  ],

  sales: [
    { label: "Dashboard", path: "/sales", icon: LayoutDashboard },
    { label: "Leads", path: "/sales/leads", icon: Users },
    { label: "Follow Ups", path: "/sales/followups", icon: Calendar },
    { label: "Bookings", path: "/sales/bookings", icon: ClipboardList },
  ],

  client: [
    { label: "Dashboard", path: "/client", icon: LayoutDashboard },
    { label: "My Property", path: "/client/property", icon: Building2 },
    { label: "Payments", path: "/client/payments", icon: Wallet },
    { label: "Documents", path: "/client/documents", icon: FileText },
  ],
};
