import { Outlet } from "react-router-dom";
import Sidebar from "../components/SideBar";
import Navbar from "../components/Navbar";
import { useAuth } from "../auth/useAuth";

const ClientLayout = () => {
  const { user } = useAuth();

  return (
    <div className="flex h-screen">
      <Sidebar role={user.role} />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-6 bg-gray-100 flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ClientLayout;
