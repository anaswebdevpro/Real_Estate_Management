import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Building2,
  HardHat,
  Users,
  FileText,
  DollarSign,
  PieChart,
  Settings,
  X,
  Briefcase,
  ClipboardList,
  UserCheck,
  Receipt,
  Home,
  File,
  LifeBuoy,
} from "lucide-react";
import { cn } from "../../utils/cn.js";
import { useAuth } from "../../contexts/AuthContext";
import { icon, logo } from "../../assets/index.js";

export function Sidebar({ isOpen, onClose }) {
  const { user, switchRole } = useAuth();
  const role = user?.role;

  // Define ALL navigation items
  const allNavItems = [
    // SUPER ADMIN
    // SUPER ADMIN
    {
      role: "SUPER_ADMIN",
      to: "/super-admin/dashboard",
      icon: LayoutDashboard,
      label: "Dashboard",
    },
    {
      role: "SUPER_ADMIN",
      to: "/super-admin/organizations",
      icon: Building2,
      label: "Organizations",
    },
    {
      role: "SUPER_ADMIN",
      to: "/super-admin/users",
      icon: Users,
      label: "User Control",
    },

    // Global Access for Super Admin (Links to Org Admin views or generic placeholders)
    {
      role: "SUPER_ADMIN",
      to: "/org/projects",
      icon: Building2,
      label: "All Projects",
    },
    {
      role: "SUPER_ADMIN",
      to: "/sales-manager/leads",
      icon: Users,
      label: "Global Leads",
    },
    {
      role: "SUPER_ADMIN",
      to: "/org/finance-overview",
      icon: DollarSign,
      label: "Global Finance",
    },
    {
      role: "SUPER_ADMIN",
      to: "/sales-manager/inventory",
      icon: Home,
      label: "Global Inventory",
    },

    {
      role: "SUPER_ADMIN",
      to: "/super-admin/analytics",
      icon: PieChart,
      label: "Platform Analytics",
    },
    {
      role: "SUPER_ADMIN",
      to: "/super-admin/settings",
      icon: Settings,
      label: "System Settings",
    },

    // ORG ADMIN
    {
      role: "ORG_ADMIN",
      to: "/org/dashboard",
      icon: LayoutDashboard,
      label: "Dashboard",
    },
    {
      role: "ORG_ADMIN",
      to: "/org/projects",
      icon: Building2,
      label: "Projects",
    },
    {
      role: "ORG_ADMIN",
      to: "/org/users",
      icon: Users,
      label: "User Management",
    },
    { role: "ORG_ADMIN", to: "/org/brokers", icon: Users, label: "Brokers" },
    {
      role: "ORG_ADMIN",
      to: "/org/finance-overview",
      icon: DollarSign,
      label: "Finance",
    },
    { role: "ORG_ADMIN", to: "/org/reports", icon: PieChart, label: "Reports" },
    {
      role: "ORG_ADMIN",
      to: "/org/settings",
      icon: Settings,
      label: "Settings",
    },

    // PROJECT MANAGER
    {
      role: "PROJECT_MANAGER",
      to: "/project/dashboard",
      icon: LayoutDashboard,
      label: "Dashboard",
    },
    {
      role: "PROJECT_MANAGER",
      to: "/project/milestones",
      icon: HardHat,
      label: "Construction",
    },
    {
      role: "PROJECT_MANAGER",
      to: "/project/tasks",
      icon: ClipboardList,
      label: "Tasks",
    },
    {
      role: "PROJECT_MANAGER",
      to: "/project/documents",
      icon: File,
      label: "Documents",
    },
    {
      role: "PROJECT_MANAGER",
      to: "/project/settings",
      icon: Settings,
      label: "Settings",
    },

    // SALES MANAGER
    {
      role: "SALES_MANAGER",
      to: "/sales-manager/dashboard",
      icon: LayoutDashboard,
      label: "Dashboard",
    },
    {
      role: "SALES_MANAGER",
      to: "/sales-manager/leads",
      icon: Users,
      label: "Leads & CRM",
    },
    {
      role: "SALES_MANAGER",
      to: "/sales-manager/team",
      icon: UserCheck,
      label: "Sales Team",
    },
    {
      role: "SALES_MANAGER",
      to: "/sales-manager/inventory",
      icon: Building2,
      label: "Inventory",
    },
    {
      role: "SALES_MANAGER",
      to: "/sales-manager/bookings",
      icon: FileText,
      label: "Bookings",
    },
    {
      role: "SALES_MANAGER",
      to: "/sales-manager/reports",
      icon: PieChart,
      label: "Reports",
    },
    {
      role: "SALES_MANAGER",
      to: "/sales-manager/settings",
      icon: Settings,
      label: "Settings",
    },

    // SALES EXECUTIVE
    {
      role: "SALES_EXECUTIVE",
      to: "/sales/dashboard",
      icon: LayoutDashboard,
      label: "Dashboard",
    },
    {
      role: "SALES_EXECUTIVE",
      to: "/sales/leads",
      icon: Users,
      label: "My Leads",
    },
    {
      role: "SALES_EXECUTIVE",
      to: "/sales/followups",
      icon: PhoneCallIcon,
      label: "Follow Ups",
    },
    {
      role: "SALES_EXECUTIVE",
      to: "/sales/site-visits",
      icon: Briefcase,
      label: "Site Visits",
    },
    {
      role: "SALES_EXECUTIVE",
      to: "/sales/inventory",
      icon: Building2,
      label: "Inventory",
    },
    {
      role: "SALES_EXECUTIVE",
      to: "/sales/settings",
      icon: Settings,
      label: "Profile & Settings",
    },

    // BROKER
    {
      role: "BROKER",
      to: "/broker/dashboard",
      icon: LayoutDashboard,
      label: "Dashboard",
    },
    { role: "BROKER", to: "/broker/leads", icon: Users, label: "Submit Leads" },
    {
      role: "BROKER",
      to: "/broker/inventory",
      icon: Building2,
      label: "Availability",
    },
    {
      role: "BROKER",
      to: "/broker/commissions",
      icon: DollarSign,
      label: "Commissions",
    },
    {
      role: "BROKER",
      to: "/broker/settings",
      icon: Settings,
      label: "Settings",
    },

    // CLIENT
    {
      role: "CLIENT",
      to: "/client/dashboard",
      icon: LayoutDashboard,
      label: "Dashboard",
    },
    {
      role: "CLIENT",
      to: "/client/property",
      icon: Home,
      label: "My Property",
    },
    {
      role: "CLIENT",
      to: "/client/payments",
      icon: Receipt,
      label: "Payments",
    },
    { role: "CLIENT", to: "/client/documents", icon: File, label: "Documents" },
    { role: "CLIENT", to: "/client/support", icon: LifeBuoy, label: "Support" },
    {
      role: "CLIENT",
      to: "/client/settings",
      icon: Settings,
      label: "Settings",
    },

    // FINANCE MANAGER
    {
      role: "FINANCE_MANAGER",
      to: "/finance/dashboard",
      icon: LayoutDashboard,
      label: "Dashboard",
    },
    {
      role: "FINANCE_MANAGER",
      to: "/finance/payments",
      icon: DollarSign,
      label: "Payments",
    },
    {
      role: "FINANCE_MANAGER",
      to: "/finance/invoices",
      icon: FileText,
      label: "Invoices",
    },
    {
      role: "FINANCE_MANAGER",
      to: "/finance/commissions",
      icon: Users,
      label: "Commissions",
    },
    {
      role: "FINANCE_MANAGER",
      to: "/finance/reports",
      icon: PieChart,
      label: "Reports",
    },
    {
      role: "FINANCE_MANAGER",
      to: "/finance/settings",
      icon: Settings,
      label: "Settings",
    },
  ];

  // Filter items: Only show items that match the user's role
  const filteredNavItems = allNavItems.filter((item) => item.role === role);

  // Temp fix for PhoneCallIcon
  function PhoneCallIcon(props) {
    return <Users {...props} />; // Placeholder
  }

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-/80 backdrop-blur-sm md:hidden",
          isOpen ? "block" : "hidden"
        )}
        onClick={onClose}
      />

      {/* Sidebar Container - Darker Background */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 border-r border-white/5 bg-[#1B2537] text-zinc-100 transition-transform duration-300 md:translate-x-0 shadow-2xl",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex h-20 items-center justify-between px-4 border-b border-white/10 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
            <div className="flex items-center gap-3 flex-1">
              <div className="flex-shrink-0">
                <img
                  src={icon}
                  alt="Real Estate CRM"
                  className="h-10 w-10 object-contain drop-shadow-lg"
                />
              </div>
              <div className="flex flex-col gap-0 min-w-0 leading-tight">
                <p className="text-sm font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  BillionInfotech
                </p>
                <p className="text-md font-semibold text-white tracking-wide">
                  Real Estate CRM
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="md:hidden p-1 rounded-md text-zinc-400 hover:bg-white/10 hover:text-white transition-colors flex-shrink-0"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Main content: nav and footer, spaced with justify-between */}
          <div className="flex flex-col flex-1 justify-between">
            {/* Navigation */}
            <nav className="overflow-y-auto py-6 px-3 space-y-1">
              {filteredNavItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group relative",
                      isActive
                        ? "bg-white/5 text-white shadow-inner"
                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-primary rounded-r-full" />
                      )}
                      <item.icon
                        className={cn(
                          "h-4 w-4 transition-colors",
                          isActive
                            ? "text-primary"
                            : "text-zinc-500 group-hover:text-primary/80"
                        )}
                      />
                      {item.label}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Footer / User Profile */}
            <div className="p-4 border-t border-white/5 bg-[#09090b]/50 space-y-4">
              <div className="flex items-center gap-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-primary/80 to-primary/20 flex items-center justify-center text-white font-bold shadow-lg ring-2 ring-black/20">
                  {user?.name?.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate text-zinc-200">
                    {user?.name}
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-zinc-500 truncate font-medium">
                    {user?.role?.replace("_", " ")}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <label className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold mb-2 block px-1">
                  Developer Mode
                </label>
                <select
                  className="w-full text-xs p-2 border border-white/10 rounded bg-black/20 text-zinc-400 focus:text-white focus:bg-black/40 focus:border-primary/50 transition-all outline-none"
                  value={user?.role}
                  onChange={(e) => switchRole(e.target.value)}
                >
                  {[
                    "SUPER_ADMIN",
                    "ORG_ADMIN",
                    "PROJECT_MANAGER",
                    "SALES_MANAGER",
                    "SALES_EXECUTIVE",
                    "BROKER",
                    "CLIENT",
                    "FINANCE_MANAGER",
                  ].map((r) => (
                    <option
                      key={r}
                      value={r}
                      className="bg-zinc-900 text-zinc-300"
                    >
                      {r}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
