import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Menu,
  Bell,
  Search,
  User,
  ChevronRight,
  Settings,
  LogOut,
  Command,
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useAuth } from "../../contexts/AuthContext";
import { cn } from "../../utils/cn";

export function TopNavbar({ onMenuClick }) {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Generate breadcrumbs from path
  const breadcrumbs = location.pathname
    .split("/")
    .filter(Boolean)
    .map(
      (segment) =>
        segment.charAt(0).toUpperCase() + segment.slice(1).replace("-", " ")
    );

  return (
    <header className="sticky top-0 z-30 h-16 border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-full items-center justify-between px-4 lg:px-8">
        {/* Left: Menu & Breadcrumbs */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="p-2 -ml-2 rounded-lg hover:bg-secondary/80 text-muted-foreground hover:text-foreground md:hidden transition-colors"
          >
            <Menu className="h-5 w-5" />
          </button>

          <nav className="hidden md:flex items-center text-sm font-medium text-muted-foreground">
            <span className="hover:text-primary transition-colors cursor-pointer">
              Home
            </span>
            {breadcrumbs.map((crumb, index) => (
              <div key={crumb} className="flex items-center">
                <ChevronRight className="h-4 w-4 mx-1 opacity-50" />
                <span
                  className={cn(
                    "transition-colors capitalize",
                    index === breadcrumbs.length - 1
                      ? "text-foreground font-semibold"
                      : "hover:text-primary cursor-pointer"
                  )}
                >
                  {crumb}
                </span>
              </div>
            ))}
          </nav>
        </div>

        {/* Center: Search */}
         <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input
              type="text"
              placeholder="Search projects, leads, invoices... (Press '/' to search)"
              className="w-full h-10 pl-10 pr-12 rounded-full border bg-secondary/50 focus:bg-background focus:ring-2 focus:ring-primary/20 transition-all outline-none"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-1">
              <kbd className="inline-flex items-center justify-center h-5 px-1.5 text-[10px] font-medium text-muted-foreground bg-background border rounded shadow-sm">
                <Command className="h-3 w-3 mr-0.5" /> K
              </kbd>
            </div>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <ThemeToggle />

          <button className="relative p-2 rounded-full hover:bg-secondary/80 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-background animate-pulse" />
          </button>

          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-3 p-1 rounded-full hover:bg-secondary/50 transition-all border border-transparent hover:border-border"
            >
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-primary to-primary/60 text-primary-foreground flex items-center justify-center font-bold shadow-lg shadow-primary/20">
                {user?.name?.charAt(0) || "U"}
              </div>
              <div className="hidden lg:block text-left mr-2">
                <p className="text-sm font-semibold leading-none">
                  {user?.name || "Guest"}
                </p>
                <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
                  {user?.role?.replace("_", " ") || "Guest"}
                </p>
              </div>
            </button>

            {/* Dropdown Menu */}
            {showProfileMenu && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setShowProfileMenu(false)}
                />
                <div className="absolute right-0 mt-2 w-56 rounded-xl border bg-card p-2 shadow-xl shadow-black/5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-2 py-1.5 mb-1 border-b">
                    <p className="font-semibold text-sm">My Account</p>
                  </div>
                  <button className="w-full flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
                    <User className="h-4 w-4" />
                    Profile
                  </button>
                  <button className="w-full flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
                    <Settings className="h-4 w-4" />
                    Settings
                  </button>
                  <div className="my-1 border-t" />
                  <button
                    onClick={logout}
                    className="w-full flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors"
                  >
                    <LogOut className="h-4 w-4" />
                    Sign out
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
