import { useState } from "react";
import { FileText, Download, Eye, Upload, Filter, Calendar } from "lucide-react";

export default function DocumentsPage() {
    const [documents] = useState([
        { id: 1, name: "Sale Agreement_Unit_A104.pdf", type: "Contract", size: "2.4 MB", date: "2024-02-15", uploadedBy: "Admin" },
        { id: 2, name: "Floor_Plan_Tower_B.png", type: "Blueprint", size: "4.1 MB", date: "2024-01-20", uploadedBy: "Architect" },
        { id: 3, name: "Payment_Receipt_Q1.pdf", type: "Invoice", size: "150 KB", date: "2024-03-01", uploadedBy: "Finance" },
        { id: 4, name: "Site_Safety_Guidelines.docx", type: "Policy", size: "500 KB", date: "2023-11-10", uploadedBy: "Ops Manager" },
    ]);

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Documents</h2>
                    <p className="text-muted-foreground">Central repository for all project and legal files.</p>
                </div>
                <div className="flex gap-2">
                    <button className="inline-flex items-center justify-center gap-2 rounded-md border text-sm font-medium h-10 px-4 hover:bg-secondary">
                        <Filter className="h-4 w-4" /> Filter
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground text-sm font-medium h-10 px-4 hover:bg-primary/90">
                        <Upload className="h-4 w-4" /> Upload
                    </button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {documents.map((doc) => (
                    <div key={doc.id} className="group relative rounded-xl border bg-card p-4 hover:border-primary/50 transition-colors">
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                    <FileText className="h-5 w-5" />
                                </div>
                                <div className="overflow-hidden">
                                    <h3 className="font-semibold text-sm truncate pr-4" title={doc.name}>{doc.name}</h3>
                                    <p className="text-xs text-muted-foreground">{doc.type} • {doc.size}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground border-t pt-3">
                            <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" /> {doc.date}
                            </div>
                            <span>By {doc.uploadedBy}</span>
                        </div>

                        <div className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-background/80 backdrop-blur-[1px] flex items-center justify-center gap-2 transition-opacity rounded-xl">
                            <button className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90" title="View">
                                <Eye className="h-4 w-4" />
                            </button>
                            <button className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80" title="Download">
                                <Download className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
