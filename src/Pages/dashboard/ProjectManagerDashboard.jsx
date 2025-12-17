import { HardHat, AlertCircle, CheckSquare, Clock } from "lucide-react";
import { StatCard } from "../../components/ui/StatCard";

export function ProjectManagerDashboard() {
    const stats = [
        { title: "Active Sites", value: "3", description: "Currently managing", icon: HardHat, trend: "On Track", trendUp: true },
        { title: "Pending Tasks", value: "12", description: "High priority", icon: AlertCircle, trend: "+4", trendUp: false },
        { title: "Completed Milestones", value: "8", description: "This quarter", icon: CheckSquare, trend: "+2", trendUp: true },
        { title: "Avg Delay", value: "2 days", description: "Per milestone", icon: Clock, trend: "-1 day", trendUp: true },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Project Management</h2>
                <p className="text-muted-foreground">Overview of construction sites and timelines.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </div>

            <div className="bg-card rounded-xl border p-6">
                <h3 className="font-semibold mb-4">Site Updates Required</h3>
                <div className="space-y-4">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
                            <div>
                                <p className="font-medium text-sm">Site Inspection - Block A</p>
                                <p className="text-xs text-muted-foreground">Due: Today, 4:00 PM</p>
                            </div>
                            <button className="text-xs bg-primary text-primary-foreground px-3 py-1 rounded">Update</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
