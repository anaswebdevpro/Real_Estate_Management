import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/ui/Sidebar";
import { TopNavbar } from "../components/ui/TopNavbar";

export default function MainLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-background">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <div className="md:pl-64 flex flex-col min-h-screen transition-all duration-200">
                {/* Top Header */}
                {/* Top Header */}
                <TopNavbar onMenuClick={() => setSidebarOpen(true)} />

                {/* Main Content Area */}
                <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
