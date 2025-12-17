import { Building2, Users, TrendingUp, Activity, Globe } from "lucide-react";
import { StatCard } from "../../components/ui/StatCard";
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'; // Will implement charts later
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

export function SuperAdminDashboard() {
    const data = [
        { name: 'Mon', value: 4000 },
        { name: 'Tue', value: 3000 },
        { name: 'Wed', value: 2000 },
        { name: 'Thu', value: 2780 },
        { name: 'Fri', value: 1890 },
        { name: 'Sat', value: 2390 },
        { name: 'Sun', value: 3490 },
    ];

    return (
        <div className="space-y-6 fade-in">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Executive Overview</h2>
                    <p className="text-muted-foreground">Real-time platform insights and global performance.</p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">System Healthy</span>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <StatCard
                    title="Total Organizations"
                    value="12"
                    description="Active Tenants"
                    icon={Building2}
                    trend="+2"
                    trendUp={true}
                />
                <StatCard
                    title="Total Users"
                    value="2,543"
                    description="Registered Accounts"
                    icon={Users}
                    trend="+180"
                    trendUp={true}
                />
                <StatCard
                    title="Platform Revenue"
                    value="$1.2M"
                    description="Monthly ARR"
                    icon={TrendingUp}
                    trend="+12%"
                    trendUp={true}
                />
                <StatCard
                    title="Active Sessions"
                    value="845"
                    description="Right Now"
                    icon={Activity}
                    trend="-5%"
                    trendUp={false}
                />
            </div>

            <div className="grid gap-6 md:grid-cols-7">
                {/* Main Traffic Chart */}
                <div className="col-span-4 bg-card rounded-xl border p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="font-semibold text-lg">Platform Traffic</h3>
                            <p className="text-sm text-muted-foreground">Daily active users over last 7 days</p>
                        </div>
                    </div>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                <YAxis axisLine={false} tickLine={false} />
                                <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#e5e7eb" />
                                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none' }} />
                                <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Regional Stats */}
                <div className="col-span-3 bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-xl p-6 shadow-lg flex flex-col justify-between relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="font-semibold text-lg mb-1">Top Regions</h3>
                        <p className="text-slate-400 text-sm mb-6">Highest performing markets</p>

                        <div className="space-y-4">
                            {[
                                { name: "North America", value: "$450k", growth: "+12%" },
                                { name: "Europe", value: "$320k", growth: "+8%" },
                                { name: "Asia Pacific", value: "$280k", growth: "+24%" },
                            ].map((region, i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <Globe className="h-4 w-4 text-blue-400" />
                                        <span className="font-medium">{region.name}</span>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-sm">{region.value}</p>
                                        <p className="text-xs text-green-400">{region.growth}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-center relative z-10">
                        <button className="text-xs font-bold uppercase tracking-wider text-blue-400 hover:text-blue-300 transition-colors">View All Regions</button>
                    </div>

                    <Globe className="absolute -right-8 -bottom-8 h-48 w-48 text-white/5 animate-spin-slow" />
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-card rounded-xl border p-6 shadow-sm">
                    <h3 className="font-semibold mb-4">Pending Approvals</h3>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
                                <div>
                                    <p className="font-medium text-sm">New Org Registration</p>
                                    <p className="text-xs text-muted-foreground">Skyline Devs • 2 mins ago</p>
                                </div>
                                <button className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">Review</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
