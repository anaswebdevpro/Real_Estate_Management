import { cn } from "../../utils/cn";

export function StatCard({ title, value, description, icon: Icon, trend, trendUp }) {
    return (
        <div className="p-6 bg-card rounded-xl border shadow-sm flex items-start justify-between">
            <div>
                <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
                <div className="text-2xl font-bold mt-2">{value}</div>
                {description && (
                    <p className={cn(
                        "text-xs mt-1",
                        trendUp === true ? "text-green-600" : trendUp === false ? "text-red-600" : "text-muted-foreground"
                    )}>
                        {trend && <span className="font-medium mr-1">{trend}</span>}
                        {description}
                    </p>
                )}
            </div>
            {Icon && (
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Icon className="h-5 w-5" />
                </div>
            )}
        </div>
    );
}
