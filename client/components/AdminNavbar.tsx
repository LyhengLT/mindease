import { Link } from "react-router-dom";
import { Brain, Settings } from "lucide-react";

export function AdminNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 h-16">
        <div className="flex items-center gap-3">
          <Brain className="w-6 h-6 text-amber-500" />
          <span className="text-xl font-bold text-foreground">MindEase</span>
          <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-500">
            ADMIN
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-sidebar-accent rounded-lg transition-colors">
            <Settings className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>
    </nav>
  );
}
