import React from "react";
import { useAuth } from "../auth/useAuth";
import { LogOut, User, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md h-16 flex items-center justify-between px-6 border-b border-gray-200">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold text-gray-800">
          Welcome, {user?.name}
        </h1>
        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full capitalize">
          {user?.role}
        </span>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-lg transition">
          <Settings size={20} className="text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition">
          <User size={20} className="text-gray-600" />
        </button>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
