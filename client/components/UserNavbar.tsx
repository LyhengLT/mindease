import { Link, useLocation } from "react-router-dom";
import { Brain, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

export function UserNavbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/mood", label: "Mood" },
    { path: "/journal", label: "Journal" },
    { path: "/chat", label: "Chat" },
    { path: "/report", label: "Report" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 h-16">
        <div className="flex items-center gap-2">
          <Brain className="w-6 h-6 text-primary" />
          <span className="text-xl font-bold text-foreground">MindEase</span>
        </div>

        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors relative",
                isActive(link.path)
                  ? "text-primary"
                  : "text-foreground/70 hover:text-foreground"
              )}
            >
              {link.label}
              {isActive(link.path) && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-sm font-semibold text-primary">
            LL
          </div>
        </div>
      </div>
    </nav>
  );
}
