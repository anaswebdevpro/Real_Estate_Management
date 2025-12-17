import { useState } from "react";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

// Mock Leads Data
const INITIAL_LEADS = [
    { id: "1", name: "Alice Johnson", budget: "$450k", status: "New", phone: "555-0123" },
    { id: "2", name: "Bob Smith", budget: "$320k", status: "Follow Up", phone: "555-0124" },
    { id: "3", name: "Charlie Davis", budget: "$1.2M", status: "Site Visit", phone: "555-0125" },
    { id: "4", name: "Diana Prince", budget: "$500k", status: "Negotiation", phone: "555-0126" },
    { id: "5", name: "Evan Wright", budget: "$280k", status: "New", phone: "555-0127" },
];

const COLUMNS = [
    { id: "New", label: "New Leads" },
    { id: "Follow Up", label: "Follow Up" },
    { id: "Site Visit", label: "Site Visit" },
    { id: "Negotiation", label: "Negotiation" },
    { id: "Booked", label: "Booked" },
];

export default function LeadsPage() {
    const [leads, setLeads] = useState(INITIAL_LEADS);

    const onDragEnd = (result) => {
        const { source, destination, draggableId } = result;

        // Dropped outside the list
        if (!destination) {
            return;
        }

        // Dropped in the same place
        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        ) {
            return;
        }

        // Find the moved lead
        const newLeads = Array.from(leads);
        const movedLeadIndex = newLeads.findIndex(l => l.id.toString() === draggableId);

        // Update its status to the new column ID
        newLeads[movedLeadIndex] = {
            ...newLeads[movedLeadIndex],
            status: destination.droppableId
        };

        setLeads(newLeads);
    };

    return (
        <div className="h-[calc(100vh-8rem)] flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Leads Pipeline</h2>
                    <p className="text-muted-foreground">Manage ongoing deals by dragging cards.</p>
                </div>
                <Link
                    to="/leads/new"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                >
                    <Plus className="h-4 w-4" />
                    Add Lead
                </Link>
            </div>

            <DragDropContext onDragEnd={onDragEnd}>
                <div className="flex-1 overflow-x-auto">
                    <div className="flex gap-4 h-full min-w-[1000px] pb-4">
                        {COLUMNS.map((col) => (
                            <Droppable key={col.id} droppableId={col.id}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                        className={`flex-1 flex flex-col bg-secondary/30 rounded-xl border min-w-[200px] transition-colors ${snapshot.isDraggingOver ? 'bg-secondary/60' : ''}`}
                                    >
                                        <div className="p-3 border-b flex items-center justify-between bg-card text-card-foreground rounded-t-xl">
                                            <h3 className="font-semibold text-sm">{col.label}</h3>
                                            <span className="text-xs font-mono bg-secondary px-2 py-0.5 rounded-full">
                                                {leads.filter(l => l.status === col.id).length}
                                            </span>
                                        </div>

                                        <div className="p-3 space-y-3 flex-1 overflow-y-auto">
                                            {leads.filter(l => l.status === col.id).map((lead, index) => (
                                                <Draggable key={lead.id} draggableId={lead.id} index={index}>
                                                    {(provided, snapshot) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            className={`p-3 bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow 
                                   ${snapshot.isDragging ? 'shadow-lg ring-2 ring-primary/20 rotate-2' : ''}`}
                                                        >
                                                            <div className="flex justify-between items-start mb-2">
                                                                <h4 className="font-medium text-sm">{lead.name}</h4>
                                                                <span className="text-xs text-muted-foreground">{lead.budget}</span>
                                                            </div>
                                                            <p className="text-xs text-muted-foreground">{lead.phone}</p>
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}

                                            {leads.filter(l => l.status === col.id).length === 0 && (
                                                <div className="h-20 border-2 border-dashed border-muted rounded-lg flex items-center justify-center text-xs text-muted-foreground">
                                                    Drop here
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </Droppable>
                        ))}
                    </div>
                </div>
            </DragDropContext>
        </div>
    );
}
