import { FileText, CheckCircle, Clock, XCircle, Search, Filter } from "lucide-react";

// Mock Bookings Data
const BOOKINGS = [
    { id: "BK-2024-001", customer: "Alice Johnson", project: "Sunset Valley", unit: "A-101", amount: "$250,000", date: "2024-03-01", status: "Confirmed" },
    { id: "BK-2024-002", customer: "Bob Smith", project: "Ocean Heights", unit: "B-205", amount: "$1,200,000", date: "2024-03-05", status: "Pending" },
    { id: "BK-2024-003", customer: "Charlie Davis", project: "Greenwood Estate", unit: "C-304", amount: "$150,000", date: "2024-03-10", status: "Cancelled" },
    { id: "BK-2024-004", customer: "Diana Prince", project: "Sunset Valley", unit: "A-102", amount: "$320,000", date: "2024-03-12", status: "Confirmed" },
];

export default function BookingsPage() {
    const getStatusColor = (status) => {
        switch (status) {
            case "Confirmed": return "bg-green-100 text-green-700 border-green-200";
            case "Pending": return "bg-yellow-100 text-yellow-700 border-yellow-200";
            case "Cancelled": return "bg-red-100 text-red-700 border-red-200";
            default: return "bg-secondary text-muted-foreground";
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case "Confirmed": return <CheckCircle className="h-4 w-4" />;
            case "Pending": return <Clock className="h-4 w-4" />;
            case "Cancelled": return <XCircle className="h-4 w-4" />;
            default: return <FileText className="h-4 w-4" />;
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Bookings & Agreements</h2>
                    <p className="text-muted-foreground">Manage sales agreements and customer bookings.</p>
                </div>
                <div className="flex gap-2">
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search bookings..."
                            className="pl-9 pr-4 py-2 bg-background border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 w-64"
                        />
                    </div>
                    <button className="flex items-center gap-2 border px-3 py-2 rounded-md hover:bg-secondary transition-colors">
                        <Filter className="h-4 w-4" /> Filter
                    </button>
                </div>
            </div>

            <div className="bg-card rounded-xl border shadow-sm overflow-hidden">
                <table className="w-full text-sm text-left">
                    <thead className="bg-secondary text-muted-foreground font-medium border-b">
                        <tr>
                            <th className="px-4 py-3">Booking ID</th>
                            <th className="px-4 py-3">Customer</th>
                            <th className="px-4 py-3">Project & Unit</th>
                            <th className="px-4 py-3">Date</th>
                            <th className="px-4 py-3 text-right">Amount</th>
                            <th className="px-4 py-3 text-center">Status</th>
                            <th className="px-4 py-3 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {BOOKINGS.map((booking) => (
                            <tr key={booking.id} className="hover:bg-muted/30 transition-colors">
                                <td className="px-4 py-3 font-medium">{booking.id}</td>
                                <td className="px-4 py-3">
                                    <div className="flex flex-col">
                                        <span className="font-medium">{booking.customer}</span>
                                        <span className="text-xs text-muted-foreground">View Profile</span>
                                    </div>
                                </td>
                                <td className="px-4 py-3">
                                    <div className="flex flex-col">
                                        <span>{booking.project}</span>
                                        <span className="text-xs text-muted-foreground">Unit: {booking.unit}</span>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-muted-foreground">{booking.date}</td>
                                <td className="px-4 py-3 text-right font-semibold">{booking.amount}</td>
                                <td className="px-4 py-3 text-center">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(booking.status)}`}>
                                        {getStatusIcon(booking.status)}
                                        {booking.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-right">
                                    <button className="text-xs font-medium text-primary hover:underline">View Details</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
