import { useState } from "react";
import { CheckSquare, Clock, AlertCircle, Plus, Filter, User } from "lucide-react";

export default function TasksPage() {
    const [tasks] = useState([
        { id: 1, title: "Finalize Foundation Blueprint", project: "Sunset Valley", assignee: "John Doe", priority: "High", due: "2024-03-15", status: "In Progress" },
        { id: 2, title: "Order Concrete Supplies", project: "Urban Heights", assignee: "Sarah Smith", priority: "Medium", due: "2024-03-18", status: "Pending" },
        { id: 3, title: "Electrical Safety Inspection", project: "Sunset Valley", assignee: "Mike Johnson", priority: "Critical", due: "2024-03-10", status: "Overdue" },
        { id: 4, title: "Client Handover Meeting", project: "Green Earth 1", assignee: "Emily Davis", priority: "Low", due: "2024-03-25", status: "Completed" },
    ]);

    const getPriorityColor = (priority) => {
        switch (priority.toLowerCase()) {
            case 'critical': return 'text-red-500 bg-red-50 dark:bg-red-950/20';
            case 'high': return 'text-orange-500 bg-orange-50 dark:bg-orange-950/20';
            case 'medium': return 'text-blue-500 bg-blue-50 dark:bg-blue-950/20';
            default: return 'text-gray-500 bg-gray-50 dark:bg-gray-950/20';
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Task Management</h2>
                    <p className="text-muted-foreground">Track critical tasks, bottlenecks, and team assignments.</p>
                </div>
                <div className="flex gap-2">
                    <button className="inline-flex items-center justify-center gap-2 rounded-md border text-sm font-medium h-10 px-4 hover:bg-secondary">
                        <Filter className="h-4 w-4" /> Filter
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground text-sm font-medium h-10 px-4 hover:bg-primary/90">
                        <Plus className="h-4 w-4" /> New Task
                    </button>
                </div>
            </div>

            <div className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden">
                <div className="p-0 overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-secondary/50 text-muted-foreground border-b">
                            <tr>
                                <th className="px-6 py-4 font-medium">Task Details</th>
                                <th className="px-6 py-4 font-medium">Project</th>
                                <th className="px-6 py-4 font-medium">Assignee</th>
                                <th className="px-6 py-4 font-medium">Priority</th>
                                <th className="px-6 py-4 font-medium">Due Date</th>
                                <th className="px-6 py-4 font-medium">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {tasks.map((task) => (
                                <tr key={task.id} className="hover:bg-muted/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <CheckSquare className="h-4 w-4 text-muted-foreground" />
                                            <span className="font-medium">{task.title}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-muted-foreground">{task.project}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">
                                                {task.assignee.charAt(0)}
                                            </div>
                                            {task.assignee}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                                            {task.priority}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-muted-foreground flex items-center gap-1">
                                        <Clock className="h-3 w-3" /> {task.due}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`text-xs font-medium px-2 py-1 rounded-md bg-secondary text-secondary-foreground`}>
                                            {task.status}
                                        </span>
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
