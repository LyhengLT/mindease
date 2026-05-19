import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  label: string;
  value: string | number;
  icon?: ReactNode;
  badge?: { text: string; color: string };
  variant?: "default" | "admin";
}

export function MetricCard({
  label,
  value,
  icon,
  badge,
  variant = "default",
}: MetricCardProps) {
  return (
    <div className="bg-card border border-border/40 rounded-lg p-6 backdrop-blur-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-foreground/70 mb-1">
            {label}
          </p>
          <p className="text-3xl font-bold text-foreground">{value}</p>
          {badge && (
            <p className={cn("text-xs font-semibold mt-2", badge.color)}>
              {badge.text}
            </p>
          )}
        </div>
        {icon && <div className="text-primary">{icon}</div>}
      </div>
    </div>
  );
}
