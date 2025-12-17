import { useState } from "react";
import { DollarSign, TrendingUp, Calendar, AlertCircle } from "lucide-react";
import { StatCard } from "../../components/ui/StatCard";

export default function CommissionsPage() {
    const [commissions] = useState([
        { id: 1, unit: "Unit A104", project: "Sunset Valley", amount: "$9,000", status: "Paid", date: "2024-02-10", type: "Direct Sale" },
        { id: 2, unit: "Unit B205", project: "Urban Heights", amount: "$12,500", status: "Pending", date: "2024-03-01", type: "Cross Sale" },
        { id: 3, unit: "Unit C301", project: "Green Earth", amount: "$5,000", status: "Processing", date: "2024-02-28", type: "Direct Sale" },
    ]);

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Commissions</h2>
                <p className="text-muted-foreground">Track your earnings, pending payouts, and history.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <StatCard title="Total Earned" value="$45,200" description="Lifetime earnings" icon={DollarSign} trend="+12%" trendUp={true} />
                <StatCard title="Pending Payout" value="$17,500" description="To be processed" icon={ClockIcon} trend="Due: 5 Days" trendUp={true} />
                <StatCard title="Deals Closed" value="12" description="This financial year" icon={TrendingUp} trend="+2" trendUp={true} />
            </div>

            <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
                <div className="p-6">
                    <h3 className="font-semibold mb-4">Commission History</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-secondary/50 text-muted-foreground">
                                <tr>
                                    <th className="px-4 py-3 font-medium">Unit Details</th>
                                    <th className="px-4 py-3 font-medium">Type</th>
                                    <th className="px-4 py-3 font-medium">Date</th>
                                    <th className="px-4 py-3 font-medium">Amount</th>
                                    <th className="px-4 py-3 font-medium">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {commissions.map((item) => (
                                    <tr key={item.id} className="hover:bg-muted/50">
                                        <td className="px-4 py-3">
                                            <div className="font-medium">{item.unit}</div>
                                            <div className="text-xs text-muted-foreground">{item.project}</div>
                                        </td>
                                        <td className="px-4 py-3">{item.type}</td>
                                        <td className="px-4 py-3 text-muted-foreground">{item.date}</td>
                                        <td className="px-4 py-3 font-bold">{item.amount}</td>
                                        <td className="px-4 py-3">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${item.status === 'Paid' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                                                    item.status === 'Pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                                                        'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                                                }`}>
                                                {item.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ClockIcon(props) {
    return <Calendar {...props} />;
}
