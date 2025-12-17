import { useState } from "react";
import { Filter, Search } from "lucide-react";

const UNITS = [
    { id: "A-101", project: "Sunset Valley", type: "2BHK", floor: 1, area: "1200 sqft", price: "$250,000", status: "Available" },
    { id: "A-102", project: "Sunset Valley", type: "3BHK", floor: 1, area: "1600 sqft", price: "$320,000", status: "Booked" },
    { id: "B-205", project: "Ocean Heights", type: "Penthouse", floor: 12, area: "3500 sqft", price: "$1,200,000", status: "Sold" },
    { id: "C-304", project: "Greenwood Estate", type: "1BHK", floor: 3, area: "800 sqft", price: "$150,000", status: "Available" },
    { id: "A-103", project: "Sunset Valley", type: "2BHK", floor: 1, area: "1200 sqft", price: "$250,000", status: "Blocked" },
];

export default function InventoryPage() {
    const [filter, setFilter] = useState("All");

    const filteredUnits = filter === "All" ? UNITS : UNITS.filter(u => u.status === filter);

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Unit Inventory</h2>
                    <p className="text-muted-foreground">Real-time status of all units across projects.</p>
                </div>
                <div className="flex items-center gap-2 bg-card border rounded-md px-3 py-2 w-full sm:w-auto">
                    <Search className="h-4 w-4 text-muted-foreground" />
                    <input type="text" placeholder="Search unit..." className="bg-transparent border-none focus:outline-none text-sm w-full" />
                </div>
            </div>

            {/* Filters */}
            <div className="flex gap-2 overflow-x-auto pb-2">
                {["All", "Available", "Booked", "Sold", "Blocked"].map(status => (
                    <button
                        key={status}
                        onClick={() => setFilter(status)}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${filter === status
                                ? "bg-primary text-primary-foreground border-primary"
                                : "bg-background hover:bg-secondary text-muted-foreground border-border"
                            }`}
                    >
                        {status}
                    </button>
                ))}
            </div>

            {/* Grid View */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredUnits.map((unit) => (
                    <div key={unit.id} className="bg-card rounded-xl border shadow-sm p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-center mb-3">
                            <span className="font-bold text-lg">{unit.id}</span>
                            <span className={`px-2 py-0.5 rounded text-xs font-semibold uppercase 
                   ${unit.status === 'Available' ? 'bg-green-100 text-green-700' :
                                    unit.status === 'Booked' ? 'bg-blue-100 text-blue-700' :
                                        unit.status === 'Sold' ? 'bg-gray-100 text-gray-700' : 'bg-red-100 text-red-700'}`
                            }>
                                {unit.status}
                            </span>
                        </div>
                        <div className="space-y-1 text-sm text-muted-foreground">
                            <p><span className="font-medium text-foreground">Project:</span> {unit.project}</p>
                            <p><span className="font-medium text-foreground">Type:</span> {unit.type} • {unit.floor}th Floor</p>
                            <p><span className="font-medium text-foreground">Area:</span> {unit.area}</p>
                            <p className="text-primary font-bold text-lg pt-2">{unit.price}</p>
                        </div>

                        <div className="mt-4 pt-4 border-t flex gap-2">
                            <button className="flex-1 text-xs py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50" disabled={unit.status !== 'Available'}>
                                Book Now
                            </button>
                            <button className="px-3 py-2 border rounded-md hover:bg-secondary">
                                Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
