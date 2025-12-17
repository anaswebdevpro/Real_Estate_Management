import { Filter } from "lucide-react";

export default function BrokersPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Broker Network</h2>
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                    Onboard Broker
                </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-card rounded-xl border shadow-sm p-6 flex flex-col gap-4">
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold">
                                    B{i}
                                </div>
                                <div>
                                    <h3 className="font-semibold">Elite Realtors {i}</h3>
                                    <p className="text-xs text-muted-foreground">Certified Agency</p>
                                </div>
                            </div>
                            <span className="text-xs bg-secondary px-2 py-1 rounded">Level 2</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="bg-secondary/50 p-2 rounded">
                                <p className="text-xs text-muted-foreground">Leads</p>
                                <p className="font-bold">45</p>
                            </div>
                            <div className="bg-secondary/50 p-2 rounded">
                                <p className="text-xs text-muted-foreground">Conversion</p>
                                <p className="font-bold">12%</p>
                            </div>
                        </div>

                        <div className="pt-2 border-t flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Commission Paid</span>
                            <span className="font-bold text-green-600">$12,450</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
