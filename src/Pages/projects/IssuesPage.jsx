import { useState } from "react";
import { AlertTriangle, CheckCircle, Clock, Filter, Plus } from "lucide-react";

export default function IssuesPage() {
    const [issues] = useState([
        { id: 1, title: "Plumbing Leak in Unit A104", priority: "High", status: "Open", reportedBy: "Site Engineer", date: "2024-03-01" },
        { id: 2, title: "Delayed Cement Delivery", priority: "Medium", status: "In Progress", reportedBy: "Project Manager", date: "2024-02-28" },
        { id: 3, title: "Incorrect Paint Shade - Block B", priority: "Low", status: "Resolved", reportedBy: "Architect", date: "2024-02-20" },
    ]);

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Issues & Snags</h2>
                    <p className="text-muted-foreground">Track and resolve construction defects and delays.</p>
                </div>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                    <Plus className="h-4 w-4" /> Report Issue
                </button>
            </div>

            <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
                <div className="p-0 overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-secondary/50 text-muted-foreground border-b">
                            <tr>
                                <th className="px-6 py-4 font-medium">Issue</th>
                                <th className="px-6 py-4 font-medium">Priority</th>
                                <th className="px-6 py-4 font-medium">Reported By</th>
                                <th className="px-6 py-4 font-medium">Date</th>
                                <th className="px-6 py-4 font-medium">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {issues.map((issue) => (
                                <tr key={issue.id} className="hover:bg-muted/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <AlertTriangle className={`h-4 w-4 ${issue.priority === 'High' ? 'text-red-500' : 'text-orange-500'}`} />
                                            <span className="font-medium">{issue.title}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${issue.priority === 'High' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' :
                                                issue.priority === 'Medium' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400' :
                                                    'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                                            }`}>
                                            {issue.priority}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-muted-foreground">{issue.reportedBy}</td>
                                    <td className="px-6 py-4 text-muted-foreground">{issue.date}</td>
                                    <td className="px-6 py-4">
                                        {issue.status === 'Resolved' ? (
                                            <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                                                <CheckCircle className="h-4 w-4" /> Resolved
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-1 text-yellow-600 dark:text-yellow-400">
                                                <Clock className="h-4 w-4" /> {issue.status}
                                            </div>
                                        )}
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
