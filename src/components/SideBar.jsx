import { NavLink } from "react-router-dom";
import { sidebarConfig } from "./sidebarConfig";

const Sidebar = ({ role }) => {
  const menuItems = sidebarConfig[role] || [];

  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center justify-center text-xl font-bold border-b border-slate-700">
        RealtyCRM
      </div>

      {/* Menu */}
      <nav className="flex-1 p-3 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition
                 ${
                   isActive
                     ? "bg-blue-600 text-white"
                     : "text-slate-300 hover:bg-slate-800"
                 }`
              }
            >
              <Icon size={18} />
              {item.label}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
