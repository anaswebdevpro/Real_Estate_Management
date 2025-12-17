import { Wallet, Users, Home, TrendingUp } from "lucide-react";
import { StatCard } from "../../components/ui/StatCard";

export function BrokerDashboard() {
    const stats = [
        { title: "Total Commission", value: "$12,450", description: "Paid to date", icon: Wallet, trend: "+$2k", trendUp: true },
        { title: "My Leads", value: "24", description: "Submitted", icon: Users, trend: "+3", trendUp: true },
        { title: "Units Sold", value: "5", description: "Through me", icon: Home, trend: "All Time", trendUp: true },
        { title: "Conversion Rate", value: "21%", description: "Lead to Deal", icon: TrendingUp, trend: "High", trendUp: true },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Partner Portal</h2>
                <p className="text-muted-foreground">Track your leads and commissions.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </div>

            <div className="bg-card rounded-xl border p-6">
                <h3 className="font-semibold mb-4">Available Projects</h3>
                <p className="text-sm text-muted-foreground mb-4">Promote these projects to your clients.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                    {['Sunset Valley', 'Ocean Heights'].map((project, i) => (
                        <div key={i} className="border p-4 rounded-lg hover:bg-secondary/50 transition-colors">
                            <h4 className="font-bold">{project}</h4>
                            <p className="text-xs text-muted-foreground mt-1">Starting from $250k</p>
                            <p className="text-sm text-green-600 font-medium mt-2">Commission: 2%</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
