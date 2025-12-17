import { useState } from "react";
import { User, Bell, Lock, Globe, Palette } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState("profile");
    const { theme, toggleTheme } = useTheme();

    const tabs = [
        { id: "profile", label: "Profile", icon: User },
        { id: "notifications", label: "Notifications", icon: Bell },
        { id: "security", label: "Security", icon: Lock },
        { id: "appearance", label: "Appearance", icon: Palette },
        { id: "general", label: "General", icon: Globe },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
                <p className="text-muted-foreground">Manage your account preferences and system settings.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar Tabs */}
                <div className="w-full md:w-64 space-y-1">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === tab.id
                                    ? "bg-primary text-primary-foreground"
                                    : "hover:bg-secondary text-muted-foreground"
                                }`}
                        >
                            <tab.icon className="h-4 w-4" />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="flex-1 bg-card rounded-xl border p-6 min-h-[400px]">
                    {activeTab === "profile" && (
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold border-b pb-2">Profile Information</h3>
                            <div className="grid gap-4 max-w-md">
                                <div className="grid gap-2">
                                    <label className="text-sm font-medium">Full Name</label>
                                    <input type="text" className="px-3 py-2 border rounded-md bg-background" defaultValue="Admin User" />
                                </div>
                                <div className="grid gap-2">
                                    <label className="text-sm font-medium">Email</label>
                                    <input type="email" className="px-3 py-2 border rounded-md bg-background" defaultValue="admin@example.com" />
                                </div>
                                <div className="grid gap-2">
                                    <label className="text-sm font-medium">Phone</label>
                                    <input type="tel" className="px-3 py-2 border rounded-md bg-background" defaultValue="+1 234 567 890" />
                                </div>
                                <button className="w-fit px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90">Save Changes</button>
                            </div>
                        </div>
                    )}

                    {activeTab === "appearance" && (
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold border-b pb-2">Appearance</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium">Theme Preference</p>
                                        <p className="text-sm text-muted-foreground">Switch between light and dark mode.</p>
                                    </div>
                                    <button
                                        onClick={toggleTheme}
                                        className="px-4 py-2 border rounded-md hover:bg-secondary text-sm font-medium"
                                    >
                                        {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Placeholders for other tabs */}
                    {["notifications", "security", "general"].includes(activeTab) && (
                        <div className="flex flex-col items-center justify-center h-full text-muted-foreground space-y-2">
                            <Globe className="h-10 w-10 opacity-20" />
                            <p>This section is under development.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
