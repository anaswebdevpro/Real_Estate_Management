import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';
import { Download, Calendar, Filter, TrendingUp, Users, Building2 } from 'lucide-react';
import { StatCard } from '../../components/ui/StatCard';

export default function PlatformAnalytics() {
    // Mock Data
    const revenueData = [
        { name: 'Jan', revenue: 4000000, expenses: 2400000 },
        { name: 'Feb', revenue: 3000000, expenses: 1398000 },
        { name: 'Mar', revenue: 2000000, expenses: 9800000 },
        { name: 'Apr', revenue: 2780000, expenses: 3908000 },
        { name: 'May', revenue: 1890000, expenses: 4800000 },
        { name: 'Jun', revenue: 2390000, expenses: 3800000 },
        { name: 'Jul', revenue: 3490000, expenses: 4300000 },
    ];

    const projectStatusData = [
        { name: 'Planning', value: 5, color: '#3b82f6' },
        { name: 'In Progress', value: 12, color: '#eab308' },
        { name: 'Completed', value: 8, color: '#22c55e' },
        { name: 'On Hold', value: 2, color: '#ef4444' },
    ];

    return (
        <div className="space-y-6 fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Platform Analytics</h2>
                    <p className="text-muted-foreground">System-wide performance metrics and growth trends.</p>
                </div>
                <div className="flex gap-2">
                    <button className="inline-flex items-center justify-center gap-2 rounded-md border text-sm font-medium h-10 px-4 hover:bg-secondary">
                        <Calendar className="h-4 w-4" /> This Year
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground text-sm font-medium h-10 px-4 hover:bg-primary/90">
                        <Download className="h-4 w-4" /> Export Report
                    </button>
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <StatCard title="Total Revenue" value="$45.2M" description="YTD Gross Revenue" icon={TrendingUp} trend="+12.5%" trendUp={true} />
                <StatCard title="Active Users" value="2,543" description="All Roles Included" icon={Users} trend="+8.2%" trendUp={true} />
                <StatCard title="Total Projects" value="27" description="Across 4 Regions" icon={Building2} trend="+4" trendUp={true} />
                <StatCard title="Conversion Rate" value="3.2%" description="Lead to Booking" icon={Filter} trend="-0.4%" trendUp={false} />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {/* Revenue Chart */}
                <div className="bg-card rounded-xl border p-6 shadow-sm">
                    <div className="mb-6">
                        <h3 className="font-semibold text-lg">Revenue vs Expenses</h3>
                        <p className="text-sm text-muted-foreground">Monthly financial overview for all organizations.</p>
                    </div>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorExp" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `$${value / 1000000}M`} />
                                <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#e5e7eb" />
                                <Tooltip
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                    formatter={(value) => [`$${(value / 1000).toLocaleString()}k`, 'Amount']}
                                />
                                <Area type="monotone" dataKey="revenue" stroke="#2563eb" fillOpacity={1} fill="url(#colorRev)" />
                                <Area type="monotone" dataKey="expenses" stroke="#ef4444" fillOpacity={1} fill="url(#colorExp)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Project Status Donut */}
                <div className="bg-card rounded-xl border p-6 shadow-sm flex flex-col">
                    <div className="mb-6">
                        <h3 className="font-semibold text-lg">Project Status Distribution</h3>
                        <p className="text-sm text-muted-foreground">Active projects breakdown by phase.</p>
                    </div>
                    <div className="flex-1 min-h-[300px] relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={projectStatusData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={80}
                                    outerRadius={110}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {projectStatusData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="text-center">
                                <span className="text-3xl font-bold">27</span>
                                <p className="text-sm text-muted-foreground">Total Projects</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center mt-4">
                        {projectStatusData.map((item) => (
                            <div key={item.name} className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                                <span className="text-sm text-muted-foreground">{item.name} ({item.value})</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
