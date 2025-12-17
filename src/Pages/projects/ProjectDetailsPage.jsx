import { useParams } from "react-router-dom";
import { CheckCircle2, Clock, Truck, Hammer } from "lucide-react";

export default function ProjectDetailsPage() {
    const { id } = useParams();

    // Mock Data
    const project = {
        id,
        name: "Sunset Valley",
        phases: [
            { id: 1, name: "Planning & Approval", status: "completed", date: "Jan 2024" },
            { id: 2, name: "Foundation Work", status: "completed", date: "Mar 2024" },
            { id: 3, name: "Structure Implementation", status: "in-progress", date: "Present" },
            { id: 4, name: "Finishing", status: "pending", date: "Est. Dec 2024" },
            { id: 5, name: "Handover", status: "pending", date: "Est. Mar 2025" },
        ]
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">{project.name}</h2>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Under Construction</span>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {/* Phases Timeline */}
                <div className="md:col-span-2 bg-card rounded-xl border p-6">
                    <h3 className="text-lg font-semibold mb-6">Construction Phases</h3>
                    <div className="relative border-l-2 border-muted ml-3 space-y-8 pb-4">
                        {project.phases.map((phase, idx) => (
                            <div key={phase.id} className="relative pl-8">
                                <div className={`absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 
                    ${phase.status === 'completed' ? 'bg-green-500 border-green-500' :
                                        phase.status === 'in-progress' ? 'bg-background border-primary animate-pulse' : 'bg-secondary border-muted'}`
                                }></div>

                                <div className="flex items-start justify-between">
                                    <div>
                                        <h4 className={`text-md font-medium ${phase.status === 'pending' ? 'text-muted-foreground' : ''}`}>{phase.name}</h4>
                                        <p className="text-sm text-muted-foreground">{phase.date}</p>
                                    </div>
                                    {phase.status === 'completed' && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                                    {phase.status === 'in-progress' && <Hammer className="h-5 w-5 text-primary" />}
                                    {phase.status === 'pending' && <Clock className="h-5 w-5 text-muted-foreground" />}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Project Actions / Info */}
                <div className="space-y-4">
                    <div className="bg-card rounded-xl border p-6">
                        <h3 className="font-semibold mb-4">Quick Actions</h3>
                        <div className="space-y-2">
                            <button className="w-full justify-start text-left px-4 py-2 text-sm rounded-md bg-secondary hover:bg-secondary/80 flex items-center gap-2">
                                <Truck className="h-4 w-4" /> Log Material Delivery
                            </button>
                            <button className="w-full justify-start text-left px-4 py-2 text-sm rounded-md bg-secondary hover:bg-secondary/80 flex items-center gap-2">
                                <Hammer className="h-4 w-4" /> Add Daily Progress
                            </button>
                        </div>
                    </div>

                    <div className="bg-card rounded-xl border p-6">
                        <h3 className="font-semibold mb-2">Vendors</h3>
                        <div className="flex -space-x-2 overflow-hidden">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-background bg-slate-300 flex items-center justify-center text-xs font-bold text-slate-600">
                                    V{i}
                                </div>
                            ))}
                            <div className="inline-block h-8 w-8 rounded-full ring-2 ring-background bg-muted flex items-center justify-center text-xs font-medium text-muted-foreground">
                                +4
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
