import { useState } from "react";
import { Download, SlidersHorizontal, ArrowUpRight, CheckCircle, Clock } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export default function ClientPaymentsPage() {
    // Chart Data: Payment Schedule vs Actual
    const data = [
        { name: 'Booking', planned: 20000, paid: 20000 },
        { name: 'Agreement', planned: 50000, paid: 50000 },
        { name: 'Foundation', planned: 40000, paid: 40000 },
        { name: 'Structure', planned: 40000, paid: 40000 },
        { name: 'Brickwork', planned: 30000, paid: 0 },
        { name: 'Finishing', planned: 30000, paid: 0 },
        { name: 'Handover', planned: 20000, paid: 0 },
    ];

    const transactions = [
        { id: "TXN-99821", date: "15 Jan 2024", desc: "Booking Amount", amount: "$20,000", status: "Paid", method: "Bank Transfer" },
        { id: "TXN-99945", date: "01 Feb 2024", desc: "Agreement Signing", amount: "$50,000", status: "Paid", method: "Cheque" },
        { id: "TXN-10023", date: "10 Mar 2024", desc: "Plinth Level Completion", amount: "$40,000", status: "Paid", method: "Bank Transfer" },
        { id: "TXN-10112", date: "22 Aug 2024", desc: "Structure Completion", amount: "$40,000", status: "Paid", method: "Bank Transfer" },
    ];

    const upcoming = [
        { desc: "Brickwork Completion", due: "15 Oct 2024", amount: "$30,000", status: "Pending" },
        { desc: "Finishing Initiation", due: "20 Dec 2024", amount: "$30,000", status: "Locked" },
    ];

    return (
        <div className="space-y-6 fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Payments & Invoices</h2>
                    <p className="text-muted-foreground">Track your payment history and upcoming milestones.</p>
                </div>
                <button className="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground text-sm font-medium h-10 px-4 hover:bg-primary/90 shadow-sm">
                    <Download className="h-4 w-4" /> Download Statement
                </button>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {/* Main Chart Section */}
                <div className="col-span-2 bg-card rounded-xl border p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-semibold text-lg">Payment Schedule</h3>
                        <div className="flex items-center gap-2 text-xs">
                            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-500"></div> Paid</span>
                            <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-gray-200"></div> Planned</span>
                        </div>
                    </div>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
                                <Tooltip
                                    cursor={{ fill: 'transparent' }}
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                />
                                <Bar dataKey="planned" fill="#e5e7eb" radius={[4, 4, 0, 0]} stackId="a" />
                                <Bar dataKey="paid" fill="#2563eb" radius={[4, 4, 0, 0]} stackId="a" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Cards Column */}
                <div className="space-y-6">
                    <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-6 text-white shadow-lg">
                        <p className="text-green-100 text-sm font-medium mb-1">Total Paid</p>
                        <h3 className="text-3xl font-bold">$150,000</h3>
                        <p className="text-green-100 text-xs mt-2 opacity-80">Last payment: 22 Aug 2024</p>
                    </div>

                    <div className="bg-card rounded-xl border p-6 shadow-sm">
                        <h4 className="font-semibold mb-4">Upcoming Due</h4>
                        <div className="space-y-4">
                            {upcoming.map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 border border-secondary">
                                    <div>
                                        <p className="font-medium text-sm">{item.desc}</p>
                                        <p className="text-xs text-muted-foreground">Due: {item.due}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-sm">{item.amount}</p>
                                        <span className={`text-[10px] uppercase font-bold ${item.status === 'Pending' ? 'text-orange-500' : 'text-gray-400'}`}>
                                            {item.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-4 py-2 text-sm font-medium text-primary border border-primary/20 rounded-md hover:bg-primary/5 transition-colors">
                            View Payment Plan
                        </button>
                    </div>
                </div>
            </div>

            {/* Transaction History Table */}
            <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
                <div className="p-6 border-b flex items-center justify-between">
                    <h3 className="font-bold text-lg">Transaction History</h3>
                    <button className="text-sm text-muted-foreground flex items-center gap-1 hover:text-foreground">
                        <SlidersHorizontal className="h-4 w-4" /> Filter
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-secondary/50 text-muted-foreground border-b">
                            <tr>
                                <th className="px-6 py-4 font-medium">Transaction ID</th>
                                <th className="px-6 py-4 font-medium">Description</th>
                                <th className="px-6 py-4 font-medium">Date</th>
                                <th className="px-6 py-4 font-medium">Method</th>
                                <th className="px-6 py-4 font-medium">Amount</th>
                                <th className="px-6 py-4 font-medium">Status</th>
                                <th className="px-6 py-4 font-medium text-right">Receipt</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {transactions.map((txn) => (
                                <tr key={txn.id} className="hover:bg-muted/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-primary">{txn.id}</td>
                                    <td className="px-6 py-4">{txn.desc}</td>
                                    <td className="px-6 py-4 text-muted-foreground">{txn.date}</td>
                                    <td className="px-6 py-4 text-muted-foreground">{txn.method}</td>
                                    <td className="px-6 py-4 font-bold">{txn.amount}</td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                            <CheckCircle className="h-3 w-3" /> {txn.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors">
                                            <Download className="h-4 w-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
