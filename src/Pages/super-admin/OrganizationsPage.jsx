import { useState } from "react";
import {
  Building,
  MapPin,
  Users,
  Plus,
  MoreVertical,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function OrganizationsPage() {
  const [organizations] = useState([
    {
      id: 1,
      name: "Skyline Developers",
      location: "New York, USA",
      admins: 3,
      projects: 12,
      status: "Active",
    },
    {
      id: 2,
      name: "Urban Spaces Ltd",
      location: "London, UK",
      admins: 2,
      projects: 5,
      status: "Active",
    },
    {
      id: 3,
      name: "Green Earth Homes",
      location: "Austin, TX",
      admins: 1,
      projects: 2,
      status: "Pending",
    },
    {
      id: 4,
      name: "Luxury Living Inc",
      location: "Dubai, UAE",
      admins: 5,
      projects: 20,
      status: "Active",
    },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Organizations</h2>
          <p className="text-muted-foreground">
            Manage all registered broker and builder companies.
          </p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
          <Plus className="h-4 w-4" />
          Add Organization
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {organizations.map((org) => (
          <div
            key={org.id}
            className="rounded-xl border bg-card text-card-foreground shadow-sm"
          >
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Building className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{org.name}</h3>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {org.location}
                    </div>
                  </div>
                </div>
                <button className="text-muted-foreground hover:text-foreground">
                  <MoreVertical className="h-4 w-4" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 py-2 border-y border-border/50">
                <div className="flex flex-col items-center justify-center text-center p-2 bg-secondary/20 rounded-md">
                  <span className="text-xl font-bold">{org.projects}</span>
                  <span className="text-xs text-muted-foreground">
                    Projects
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center text-center p-2 bg-secondary/20 rounded-md">
                  <span className="text-xl font-bold">{org.admins}</span>
                  <span className="text-xs text-muted-foreground">Admins</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    org.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {org.status === "Active" ? (
                    <CheckCircle className="h-3 w-3" />
                  ) : (
                    <XCircle className="h-3 w-3" />
                  )}
                  {org.status}
                </span>
                <button className="text-sm font-medium text-primary hover:underline">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
