import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  AlertTriangle,
  TrendingUp,
  FileText,
  Server,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function AdminSidebar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const sidebarItems = [
    {
      path: "/admin/dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      path: "/admin/users",
      label: "Users",
      icon: Users,
    },
    {
      path: "/admin/crisis",
      label: "Crisis Alerts",
      icon: AlertTriangle,
      badge: { count: 3, color: "bg-red-500" },
    },
    {
      path: "/admin/analytics",
      label: "Analytics",
      icon: TrendingUp,
    },
    {
      path: "/admin/reports",
      label: "Reports",
      icon: FileText,
    },
    {
      path: "/admin/system",
      label: "System",
      icon: Server,
    },
  ];

  return (
    <aside className="fixed left-0 top-16 w-64 h-[calc(100vh-4rem)] border-r border-border/40 bg-background/95 backdrop-blur-sm overflow-y-auto">
      <div className="flex flex-col h-full p-4">
        <nav className="flex-1 space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors",
                  isActive(item.path)
                    ? "bg-primary/20 text-primary border border-primary/40"
                    : "text-foreground/70 hover:text-foreground hover:bg-sidebar-accent"
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="flex-1">{item.label}</span>
                {item.badge && (
                  <span
                    className={cn(
                      item.badge.color,
                      "px-2 py-0.5 rounded-full text-xs font-semibold text-white"
                    )}
                  >
                    {item.badge.count}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-foreground/70 hover:text-foreground hover:bg-sidebar-accent transition-colors font-medium">
          <LogOut className="w-5 h-5" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
