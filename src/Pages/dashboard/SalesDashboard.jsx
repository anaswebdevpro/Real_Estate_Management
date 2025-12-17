import { Users, Phone, CalendarCheck, Target } from "lucide-react";
import { StatCard } from "../../components/ui/StatCard";

import { useAuth } from "../../contexts/AuthContext";

export function SalesDashboard() {
    const { user } = useAuth();
    const isManager = user?.role === "SALES_MANAGER";

    const stats = isManager ? [
        { title: "Team Leads", value: "245", description: "All active leads", icon: Users, trend: "+15", trendUp: true },
        { title: "Team Calls", value: "520", description: "This week", icon: Phone, trend: "Target: 600", trendUp: false },
        { title: "Site Visits", value: "38", description: "Scheduled (All)", icon: CalendarCheck, trend: "+12", trendUp: true },
        { title: "Total Revenue", value: "$2.4M", description: "Team Performance", icon: Target, trend: "110% of Goal", trendUp: true },
    ] : [
        { title: "My Leads", value: "45", description: "Active pipeline", icon: Users, trend: "+5", trendUp: true },
        { title: "Calls Made", value: "120", description: "This week", icon: Phone, trend: "Target: 150", trendUp: true },
        { title: "Site Visits", value: "8", description: "Scheduled", icon: CalendarCheck, trend: "+2", trendUp: true },
        { title: "Sales Closed", value: "$450k", description: "This month", icon: Target, trend: "90% of Goal", trendUp: true },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">{isManager ? "Sales Team Overview" : "My Performance"}</h2>
                <p className="text-muted-foreground">{isManager ? "Track team KPIs and global pipeline." : "Track your leads and follow-ups."}</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card rounded-xl border p-6">
                    <h3 className="font-semibold mb-4">Today's Follow-ups</h3>
                    <div className="space-y-3">
                        {['Alice Johnson', 'Bob Smith', 'Charlie Davis'].map((name, i) => (
                            <div key={i} className="flex items-center justify-between p-2 bg-secondary/30 rounded">
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                                        {name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">{name}</p>
                                        <p className="text-xs text-muted-foreground">Budget: $400k</p>
                                    </div>
                                </div>
                                <Phone className="h-4 w-4 text-muted-foreground cursor-pointer hover:text-primary" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-card rounded-xl border p-6">
                    <h3 className="font-semibold mb-4">Upcoming Site Visits</h3>
                    <div className="space-y-3">
                        {[1, 2].map((i) => (
                            <div key={i} className="flex items-center gap-3 p-2 border rounded">
                                <div className="bg-primary/10 p-2 rounded text-primary">
                                    <CalendarCheck className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium">Sunset Valley - Unit A104</p>
                                    <p className="text-xs text-muted-foreground">Tomorrow, 10:00 AM</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
