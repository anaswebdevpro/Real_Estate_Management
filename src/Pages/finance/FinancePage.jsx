import { Download, Plus } from "lucide-react";

const TRANSACTIONS = [
    { id: "TXN001", type: "Income", category: "Booking Payment", amount: "+$50,000", date: "2024-03-15", status: "Completed" },
    { id: "TXN002", type: "Expense", category: "Material Supply", amount: "-$12,500", date: "2024-03-14", status: "Completed" },
    { id: "TXN003", type: "Expense", category: "Broker Commission", amount: "-$4,500", date: "2024-03-12", status: "Pending" },
    { id: "TXN004", type: "Income", category: "Milestone Payment", amount: "+$25,000", date: "2024-03-10", status: "Completed" },
];

export default function FinancePage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Finance</h2>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 border px-3 py-2 rounded-md hover:bg-secondary transition-colors">
                        <Download className="h-4 w-4" /> Export
                    </button>
                    <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                        <Plus className="h-4 w-4" /> Record Transaction
                    </button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <div className="bg-card p-6 rounded-xl border shadow-sm">
                    <h3 className="text-sm font-medium text-muted-foreground">Net Revenue</h3>
                    <div className="text-2xl font-bold mt-2 text-green-600">+$254,000</div>
                    <p className="text-xs text-muted-foreground mt-1">This month</p>
                </div>
                <div className="bg-card p-6 rounded-xl border shadow-sm">
                    <h3 className="text-sm font-medium text-muted-foreground">Total Expenses</h3>
                    <div className="text-2xl font-bold mt-2 text-red-600">-$45,200</div>
                    <p className="text-xs text-muted-foreground mt-1">This month</p>
                </div>
                <div className="bg-card p-6 rounded-xl border shadow-sm">
                    <h3 className="text-sm font-medium text-muted-foreground">Pending Payouts</h3>
                    <div className="text-2xl font-bold mt-2 text-orange-600">$12,500</div>
                    <p className="text-xs text-muted-foreground mt-1">Broker Commissions</p>
                </div>
            </div>

            <div className="bg-card rounded-xl border shadow-sm overflow-hidden">
                <div className="p-4 border-b font-semibold">Recent Transactions</div>
                <table className="w-full text-sm text-left">
                    <thead className="bg-secondary text-muted-foreground font-medium">
                        <tr>
                            <th className="px-4 py-3">ID</th>
                            <th className="px-4 py-3">Type</th>
                            <th className="px-4 py-3">Category</th>
                            <th className="px-4 py-3">Date</th>
                            <th className="px-4 py-3 text-right">Amount</th>
                            <th className="px-4 py-3 text-right">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {TRANSACTIONS.map((txn) => (
                            <tr key={txn.id} className="hover:bg-muted/50 transition-colors">
                                <td className="px-4 py-3 font-medium">{txn.id}</td>
                                <td className="px-4 py-3">{txn.type}</td>
                                <td className="px-4 py-3">{txn.category}</td>
                                <td className="px-4 py-3 text-muted-foreground">{txn.date}</td>
                                <td className={`px-4 py-3 text-right font-bold ${txn.type === 'Income' ? 'text-green-600' : 'text-red-600'}`}>
                                    {txn.amount}
                                </td>
                                <td className="px-4 py-3 text-right">
                                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium 
                      ${txn.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                        {txn.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
