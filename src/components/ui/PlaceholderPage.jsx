import { Construction } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function PlaceholderPage({ title }) {
    const location = useLocation();
    const pageTitle = title || location.pathname.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    return (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4">
            <div className="bg-secondary/50 p-6 rounded-full">
                <Construction className="h-12 w-12 text-muted-foreground" />
            </div>
            <div>
                <h2 className="text-2xl font-bold tracking-tight">{pageTitle}</h2>
                <p className="text-muted-foreground max-w-sm mx-auto mt-2">
                    This module is part of the comprehensive RBAC structure but is currently under development.
                </p>
            </div>
        </div>
    );
}
