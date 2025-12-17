import { Home, Receipt, FileText, MessageSquare, ArrowUpRight, Calendar, Clock } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from 'recharts';
import { StatCard } from "../../components/ui/StatCard";

export function ClientDashboard() {
    const paymentParams = [
        { name: 'Paid', value: 65, color: '#22c55e' },
        { name: 'Pending', value: 35, color: '#e5e7eb' },
    ];

    // Check for dark mode to adjust chart colors slightly if needed (simplified here)
    const isDark = document.documentElement.classList.contains('dark');
    const emptyColor = isDark ? '#374151' : '#e5e7eb';

    return (
        <div className="space-y-6 fade-in">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Welcome Home, John</h2>
                    <p className="text-muted-foreground">Here is the latest status of your property.</p>
                </div>
                <div className="flex gap-2">
                    <button className="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground text-sm font-medium h-10 px-4 hover:bg-primary/90 transition-all shadow-sm">
                        <Receipt className="h-4 w-4" /> Make Payment
                    </button>
                </div>
            </div>

            {/* Quick Stats Row */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
                    <div className="relative z-10">
                        <p className="text-blue-100 text-sm font-medium mb-1">Total Paid</p>
                        <h3 className="text-3xl font-bold">$150,000</h3>
                        <p className="text-blue-100 text-xs mt-2 flex items-center gap-1">
                            <ArrowUpRight className="h-3 w-3" /> 45% of Total Value
                        </p>
                    </div>
                    <Receipt className="absolute right-4 bottom-4 h-24 w-24 text-blue-500/30 -rotate-12" />
                </div>

                <StatCard
                    title="Next Due"
                    value="$25,000"
                    description="Due on 15 Apr 2024"
                    icon={Calendar}
                    trend="In 25 Days"
                    trendUp={false}
                />

                <StatCard
                    title="Construction"
                    value="Floor 12"
                    description="Structure Complete"
                    icon={Home}
                    trend="On Track"
                    trendUp={true}
                />

                <StatCard
                    title="Documents"
                    value="4 New"
                    description="Updates this week"
                    icon={FileText}
                    trend="+2"
                    trendUp={true}
                />
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {/* Main Property Card */}
                <div className="bg-card rounded-xl border p-0 col-span-2 shadow-sm overflow-hidden flex flex-col">
                    <div className="p-6 border-b flex items-center justify-between">
                        <h3 className="font-semibold text-lg">My Property Status</h3>
                        <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold">Active</span>
                    </div>
                    <div className="p-6 flex-1 flex flex-col gap-6">
                        <div className="flex gap-6 items-start">
                            <div className="h-24 w-32 bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden shrink-0">
                                <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&auto=format&fit=crop" className="w-full h-full object-cover" alt="Property" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold">Sunset Valley Estates</h4>
                                <p className="text-muted-foreground text-sm">Unit A-104 • 2BHK Premium</p>
                                <div className="flex gap-4 mt-4 text-sm">
                                    <div>
                                        <p className="text-muted-foreground text-xs">Handover</p>
                                        <p className="font-medium">Dec 2024</p>
                                    </div>
                                    <div>
                                        <p className="text-muted-foreground text-xs">Area</p>
                                        <p className="font-medium">1250 Sq Ft</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto">
                            <div className="flex justify-between text-sm mb-2">
                                <span className="font-medium">Completion Progress</span>
                                <span className="font-bold text-primary">85%</span>
                            </div>
                            <div className="h-3 bg-secondary rounded-full overflow-hidden">
                                <div className="h-full bg-primary w-[85%] rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
                            </div>
                            <div className="flex justify-between text-xs text-muted-foreground mt-2">
                                <span>Foundation</span>
                                <span>Structure</span>
                                <span className="text-primary font-medium">Finishing</span>
                                <span>Handover</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Chart */}
                <div className="bg-card rounded-xl border p-6 shadow-sm flex flex-col items-center justify-center text-center">
                    <h3 className="font-semibold text-lg mb-2 self-start">Payment Breakdown</h3>
                    <div className="h-[200px] w-full relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={paymentParams}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    <Cell key="paid" fill="#22c55e" />
                                    <Cell key="pending" fill={emptyColor} />
                                </Pie>
                                <Tooltip
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                        {/* Center Text */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <span className="text-2xl font-bold">65%</span>
                            <span className="text-xs text-muted-foreground">Paid</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 w-full mt-4 pt-4 border-t">
                        <div className="text-center">
                            <p className="text-xs text-muted-foreground mb-1">Paid Amount</p>
                            <p className="font-semibold text-green-600">$150,000</p>
                        </div>
                        <div className="text-center">
                            <p className="text-xs text-muted-foreground mb-1">Balance</p>
                            <p className="font-semibold">$200,000</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-card rounded-xl border shadow-sm">
                <div className="p-6 border-b">
                    <h3 className="font-bold text-lg">Recent Activity</h3>
                </div>
                <div className="divide-y">
                    {[
                        { title: "Payment Confirmation", desc: "Receipt #49281 confirmed", date: "2 Hours ago", icon: Receipt },
                        { title: "New Document Uploaded", desc: "Site Progress Report - March", date: "Yesterday", icon: FileText },
                        { title: "Support Ticket Resolved", desc: "Ticket #2291 closed", date: "2 days ago", icon: MessageSquare },
                    ].map((item, i) => (
                        <div key={i} className="p-4 flex items-center gap-4 hover:bg-secondary/20 transition-colors">
                            <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                                <item.icon className="h-5 w-5 text-muted-foreground" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-medium text-sm truncate">{item.title}</p>
                                <p className="text-xs text-muted-foreground truncate">{item.desc}</p>
                            </div>
                            <div className="text-xs text-muted-foreground whitespace-nowrap">{item.date}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
