import { useState } from "react";
import { Truck, Phone, Star, MoreHorizontal, Mail, MapPin } from "lucide-react";

export default function VendorsPage() {
    const [vendors] = useState([
        { id: 1, name: "ABC Cement Suppliers", type: "Material", contact: "John Smith", phone: "+1 (555) 012-3456", rating: 4.8, location: "Austin, TX" },
        { id: 2, name: "Elite Electricals", type: "Contractor", contact: "Mike Jones", phone: "+1 (555) 098-7654", rating: 4.5, location: "Dallas, TX" },
        { id: 3, name: "Green Scapes Landscaping", type: "Service", contact: "Sarah Lee", phone: "+1 (555) 111-2222", rating: 4.9, location: "Austin, TX" },
        { id: 4, name: "Metro Plumbers", type: "Contractor", contact: "David Brown", phone: "+1 (555) 333-4444", rating: 4.2, location: "San Antonio, TX" },
    ]);

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Vendors & Contractors</h2>
                    <p className="text-muted-foreground">Manage authorized suppliers and service providers.</p>
                </div>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                    Add Vendor
                </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {vendors.map((vendor) => (
                    <div key={vendor.id} className="rounded-xl border bg-card text-card-foreground shadow-sm">
                        <div className="p-6 space-y-4">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-lg bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-orange-600">
                                        <Truck className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">{vendor.name}</h3>
                                        <p className="text-xs text-muted-foreground">{vendor.type}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <UserIcon className="h-4 w-4" /> {vendor.contact}
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Phone className="h-4 w-4" /> {vendor.phone}
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <MapPin className="h-4 w-4" /> {vendor.location}
                                </div>
                            </div>

                            <div className="pt-4 border-t flex items-center justify-between">
                                <div className="flex items-center gap-1 text-amber-500 text-sm font-medium">
                                    <Star className="h-4 w-4 fill-current" /> {vendor.rating}
                                </div>
                                <button className="text-sm font-medium text-primary hover:underline">View Profile</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function UserIcon(props) {
    return <Mail {...props} />; // Placeholder icon reuse
}
