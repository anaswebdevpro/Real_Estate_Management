import { Home, MapPin, CheckCircle, Clock } from "lucide-react";

export default function ClientPropertyPage() {
    const property = {
        name: "Sunset Valley Estates",
        unit: "A-104",
        type: "2BHK Premium Apartment",
        location: "Downtown, Austin, TX",
        price: "$450,000",
        paid: "$150,000",
        status: "Under Construction",
        completion: "85%",
        handoverDate: "Dec 2024"
    };

    const progressSteps = [
        { title: "Booking Confirmed", date: "Jan 10, 2024", status: "completed" },
        { title: "Agreement Signed", date: "Jan 25, 2024", status: "completed" },
        { title: "Foundation Complete", date: "Mar 15, 2024", status: "completed" },
        { title: "Structure Complete", date: "Aug 20, 2024", status: "completed" },
        { title: "Finishing Works", date: "In Progress", status: "current" },
        { title: "Handover", date: "Estimated Dec 2024", status: "pending" },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">My Property</h2>
                <p className="text-muted-foreground">View details and construction progress of your unit.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {/* Property Card */}
                <div className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden">
                    <div className="h-48 bg-gray-200 dark:bg-gray-800 relative">
                        <img
                            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&auto=format&fit=crop"
                            alt="Property"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                            {property.status}
                        </div>
                    </div>
                    <div className="p-6 space-y-4">
                        <div>
                            <h3 className="text-xl font-bold">{property.name}</h3>
                            <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
                                <MapPin className="h-4 w-4" /> {property.location}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 py-4 border-y">
                            <div>
                                <p className="text-xs text-muted-foreground">Unit Number</p>
                                <p className="font-semibold">{property.unit}</p>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Type</p>
                                <p className="font-semibold">{property.type}</p>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Total Value</p>
                                <p className="font-semibold">{property.price}</p>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Paid Amount</p>
                                <p className="font-semibold text-green-600 dark:text-green-400">{property.paid}</p>
                            </div>
                        </div>

                        <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">Estimated Handover</span>
                            <span className="font-medium">{property.handoverDate}</span>
                        </div>
                    </div>
                </div>

                {/* Construction Timeline */}
                <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
                    <h3 className="font-semibold text-lg mb-6">Construction Timeline</h3>
                    <div className="space-y-6 relative ml-2">
                        {/* Vertical Line */}
                        <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-border " />

                        {progressSteps.map((step, idx) => (
                            <div key={idx} className="relative flex items-center gap-4">
                                <div className={`z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 
                            ${step.status === 'completed' ? 'bg-green-500 border-green-500 text-white' :
                                        step.status === 'current' ? 'bg-background border-primary text-primary' :
                                            'bg-background border-muted text-muted-foreground'
                                    }`}>
                                    {step.status === 'completed' && <CheckCircle className="h-3 w-3" />}
                                    {step.status === 'current' && <div className="h-2 w-2 rounded-full bg-primary" />}
                                </div>
                                <div className="flex-1">
                                    <p className={`text-sm font-medium ${step.status === 'pending' ? 'text-muted-foreground' : ''}`}>{step.title}</p>
                                    <p className="text-xs text-muted-foreground">{step.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
