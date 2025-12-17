import { Plus, MapPin, Calendar, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { PROJECTS_DATA } from "./projectsData";
import { cn } from "../../utils/cn";

export default function ProjectsList() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
                    <p className="text-muted-foreground">Manage your ongoing and past construction projects.</p>
                </div>
                <Link
                    to="/projects/new"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                >
                    <Plus className="h-4 w-4" />
                    New Project
                </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {PROJECTS_DATA.map((project) => (
                    <Link to={`/projects/${project.id}`} key={project.id} className="group bg-card rounded-xl border shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                        <div className="h-48 overflow-hidden relative">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute top-2 right-2 bg-background/90 backdrop-blur px-2 py-1 rounded text-xs font-medium uppercase border shadow-sm">
                                {project.status}
                            </div>
                        </div>

                        <div className="p-5 space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold">{project.name}</h3>
                                <div className="flex items-center text-muted-foreground text-sm mt-1">
                                    <MapPin className="h-3.5 w-3.5 mr-1" />
                                    {project.location}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Progress</span>
                                    <span className="font-medium">{project.progress}%</span>
                                </div>
                                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                    <div className="h-full bg-primary" style={{ width: `${project.progress}%` }}></div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-2 border-t text-sm">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Calendar className="h-4 w-4" />
                                    <span>{new Date(project.startDate).getFullYear()}</span>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <BarChart3 className="h-4 w-4" />
                                    <span>{project.units} Units</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
