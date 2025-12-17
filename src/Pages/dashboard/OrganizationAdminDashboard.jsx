import { Building2, Users, ClipboardList, AlertTriangle } from "lucide-react";
import { StatCard } from "../../components/ui/StatCard";

export function OrganizationAdminDashboard() {
    // Mock data for a specific developer organization
    const stats = [
        { title: "Active Projects", value: "3", description: "In progress", icon: Building2, trend: "+1", trendUp: true },
        { title: "Total Sales", value: "$450k", description: "This month", icon: Users, trend: "+8%", trendUp: true },
        { title: "Active Leads", value: "142", description: "Pipeline", icon: ClipboardList, trend: "+12", trendUp: true },
        { title: "Critical Issues", value: "2", description: "Requires attention", icon: AlertTriangle, trend: "-1", trendUp: true },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Organization Overview</h2>
                <p className="text-muted-foreground">Welcome back. Here is what's happening in your projects.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-4 bg-card rounded-xl border p-6">
                    <h3 className="font-semibold mb-4">Project Milestones</h3>
                    <div className="space-y-4">
                        {[
                            { name: "Sunset Valid (Phase 1)", status: "On Track", progress: 75, color: "bg-green-500" },
                            { name: "Green Valley", status: "Delayed", progress: 40, color: "bg-yellow-500" },
                            { name: "Urban Heights", status: "On Track", progress: 10, color: "bg-green-500" },
                        ].map((project, i) => (
                            <div key={i} className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="font-medium">{project.name}</span>
                                    <span className="text-muted-foreground">{project.status}</span>
                                </div>
                                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                    <div className={`h-full ${project.color}`} style={{ width: `${project.progress}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-span-3 bg-card rounded-xl border p-6">
                    <h3 className="font-semibold mb-4">Recent Sales</h3>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center gap-4 justify-between border-b pb-3 last:border-0 last:pb-0">
                                <div>
                                    <p className="text-sm font-medium">Unit A-{100 + i}</p>
                                    <p className="text-xs text-muted-foreground">Sold by: John Doe</p>
                                </div>
                                <div className="text-sm font-bold text-green-600">
                                    $120,000
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
