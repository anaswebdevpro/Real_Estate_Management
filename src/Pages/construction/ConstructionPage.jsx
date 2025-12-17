import { Hammer, AlertTriangle, CheckCircle } from "lucide-react";

export default function ConstructionPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-bold tracking-tight">Construction Tracking</h2>
                <p className="text-muted-foreground">Monitor daily progress, issues, and site reports.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-card p-6 rounded-xl border shadow-sm space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="font-semibold">Daily Logs</h3>
                        <Hammer className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-3xl font-bold">12</div>
                    <p className="text-xs text-muted-foreground">Updates submitted today</p>
                </div>

                <div className="bg-card p-6 rounded-xl border shadow-sm space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="font-semibold">Pending Issues</h3>
                        <AlertTriangle className="h-5 w-5 text-yellow-500" />
                    </div>
                    <div className="text-3xl font-bold">4</div>
                    <p className="text-xs text-muted-foreground">Require attention</p>
                </div>

                <div className="bg-card p-6 rounded-xl border shadow-sm space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="font-semibold">Milestones Met</h3>
                        <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="text-3xl font-bold">85%</div>
                    <p className="text-xs text-muted-foreground">On schedule</p>
                </div>
            </div>

            <div className="bg-card rounded-xl border p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                                <div className="w-0.5 h-full bg-secondary mt-2"></div>
                            </div>
                            <div className="pb-4">
                                <p className="text-sm font-medium">Foundation work updated for Block C</p>
                                <p className="text-xs text-muted-foreground mb-2">2 hours ago by Site Engineer</p>
                                <div className="h-24 w-32 bg-secondary rounded-md flex items-center justify-center text-xs text-muted-foreground">
                                    Site Photo
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
