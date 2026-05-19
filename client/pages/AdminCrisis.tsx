import { AdminNavbar } from "@/components/AdminNavbar";
import { AdminSidebar } from "@/components/AdminSidebar";
import { AlertTriangle, MessageSquare, CheckCircle } from "lucide-react";

export default function AdminCrisis() {
  const filterTabs = [
    { label: "Pending", count: 3, active: true },
    { label: "All", count: 12, active: false },
    { label: "Reviewed", count: 9, active: false },
  ];

  const alerts = [
    {
      id: 1,
      userId: "USR-4521",
      timestamp: "2:45 PM today",
      message: "User reported suicidal thoughts in journal entry",
      severity: "High",
      reviewed: false,
      border: "border-red-500/40 bg-red-500/10",
    },
    {
      id: 2,
      userId: "USR-4518",
      timestamp: "1:20 PM today",
      message: "Crisis keywords detected in conversation",
      severity: "High",
      reviewed: false,
      border: "border-red-500/40 bg-red-500/10",
    },
    {
      id: 3,
      userId: "USR-4512",
      timestamp: "Yesterday at 3:15 PM",
      message: "Multiple mood drops detected over 3 days",
      severity: "Medium",
      reviewed: false,
      border: "border-amber-500/40 bg-amber-500/10",
    },
    {
      id: 4,
      userId: "USR-4501",
      timestamp: "3 days ago",
      message: "User asked for crisis resources",
      severity: "High",
      reviewed: true,
      border: "border-border/40 bg-background",
      reviewedBy: "Admin Sarah J.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <AdminNavbar />
      <AdminSidebar />

      <main className="pt-24 pb-12 px-6 ml-64 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Crisis alerts</h1>

          {/* Filter Tabs */}
          <div className="flex gap-2">
            {filterTabs.map((tab, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  tab.active
                    ? "bg-red-500/20 border border-red-500/40 text-red-400"
                    : "bg-card border border-border/40 text-foreground hover:border-primary/40"
                }`}
              >
                {tab.label}
                <span className="ml-2 text-xs">({tab.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Alerts Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`border-2 rounded-lg p-6 backdrop-blur-sm ${alert.border}`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="font-semibold text-foreground text-lg">
                    {alert.userId}
                  </p>
                  <p className="text-xs text-foreground/60">{alert.timestamp}</p>
                </div>
                <div className="flex gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      alert.severity === "High"
                        ? "bg-red-500/20 text-red-400"
                        : "bg-amber-500/20 text-amber-400"
                    }`}
                  >
                    {alert.severity}
                  </span>
                  {alert.reviewed && (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500/20 text-green-400 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Reviewed
                    </span>
                  )}
                </div>
              </div>

              {/* Message */}
              <p className="text-foreground mb-4">{alert.message}</p>

              {/* Reviewed Info */}
              {alert.reviewed && alert.reviewedBy && (
                <p className="text-xs text-foreground/60 mb-4">
                  Reviewed by: {alert.reviewedBy}
                </p>
              )}

              {/* Actions */}
              <div className="flex gap-2">
                <button className="flex-1 px-4 py-2 rounded-lg bg-background border border-border/40 text-foreground text-sm font-medium hover:border-primary/40 transition-colors flex items-center justify-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  View Chat
                </button>
                {!alert.reviewed && (
                  <button className="flex-1 px-4 py-2 rounded-lg bg-red-500/20 border border-red-500/40 text-red-400 text-sm font-medium hover:bg-red-500/30 transition-colors">
                    Mark Reviewed
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
