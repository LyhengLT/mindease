import { AdminNavbar } from "@/components/AdminNavbar";
import { AdminSidebar } from "@/components/AdminSidebar";
import { MetricCard } from "@/components/MetricCard";
import { Server, BarChart3, Activity, Clock } from "lucide-react";

export default function AdminSystem() {
  const apiUsageData = [
    { feature: "Mood Check-in", requests: 2840, budget: "$3.20" },
    { feature: "Journal Processing", requests: 1920, budget: "$2.10" },
    { feature: "AI Chat", requests: 1450, budget: "$1.85" },
    { feature: "Report Generation", requests: 950, budget: "$1.27" },
  ];

  const services = [
    { name: "Go Fiber (API)", status: "Operational", color: "bg-green-500/20 text-green-400" },
    { name: "Oracle DB", status: "Operational", color: "bg-green-500/20 text-green-400" },
    { name: "Gemini API", status: "Operational", color: "bg-green-500/20 text-green-400" },
    { name: "Nginx", status: "Operational", color: "bg-green-500/20 text-green-400" },
    { name: "SSL Certificate", status: "Valid (45 days)", color: "bg-green-500/20 text-green-400" },
  ];

  const activityLog = [
    { type: "system", action: "Database backup completed", time: "2:30 PM", dot: "bg-blue-500" },
    { type: "alert", action: "3 crisis alerts processed", time: "1:45 PM", dot: "bg-red-500" },
    { type: "update", action: "AI model updated to v2.1.4", time: "12:15 PM", dot: "bg-amber-500" },
    { type: "system", action: "Cache cleared and refreshed", time: "11:30 AM", dot: "bg-green-500" },
    { type: "alert", action: "1 crisis alert escalated", time: "10:05 AM", dot: "bg-red-500" },
  ];

  const usagePercent = 56;

  return (
    <div className="min-h-screen bg-background">
      <AdminNavbar />
      <AdminSidebar />

      <main className="pt-24 pb-12 px-6 ml-64 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">System health</h1>
          <p className="text-foreground/60">Last updated: 2 minutes ago</p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <MetricCard
            label="API Calls"
            value="2,841"
            icon={<Activity className="w-8 h-8" />}
          />
          <MetricCard
            label="Credits Used"
            value="$8.42"
            icon={<BarChart3 className="w-8 h-8" />}
            badge={{ text: "Within budget", color: "text-green-500" }}
          />
          <MetricCard
            label="Response Time"
            value="1.2s"
            icon={<Clock className="w-8 h-8" />}
          />
          <MetricCard
            label="Uptime"
            value="99.9%"
            icon={<Server className="w-8 h-8" />}
          />
        </div>

        {/* System Status Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* API Usage */}
          <div className="md:col-span-2 bg-card border border-border/40 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              API Usage Breakdown
            </h2>
            <div className="space-y-4">
              {apiUsageData.map((item, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-foreground">
                      {item.feature}
                    </p>
                    <p className="text-sm text-foreground/70">{item.requests} req</p>
                  </div>
                  <p className="text-xs text-foreground/60 mb-2">{item.budget}</p>
                  <div className="w-full h-2 bg-background rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{
                        width: `${Math.min((item.requests / 2841) * 100, 100)}%`,
                      }}
                    />
                  </div>
                </div>
              ))}

              {/* Budget Progress */}
              <div className="mt-6 pt-6 border-t border-border/40">
                <p className="text-sm font-medium text-foreground mb-2">
                  Monthly Budget Usage
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-3 bg-background rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${usagePercent}%` }}
                    />
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    {usagePercent}%
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Status */}
          <div className="bg-card border border-border/40 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Service Status
            </h2>
            <div className="space-y-3">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 bg-background rounded-lg"
                >
                  <p className="text-sm text-foreground">{service.name}</p>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded ${service.color}`}
                  >
                    {service.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Activity Log */}
        <div className="bg-card border border-border/40 rounded-lg p-6 backdrop-blur-sm">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Admin Activity Log
          </h2>
          <div className="space-y-3">
            {activityLog.map((log, idx) => (
              <div key={idx} className="flex items-start gap-4 pb-3 border-b border-border/40 last:border-b-0 last:pb-0">
                <div className={`w-2 h-2 rounded-full ${log.dot} mt-1.5 flex-shrink-0`} />
                <div className="flex-1">
                  <p className="text-sm text-foreground">{log.action}</p>
                  <p className="text-xs text-foreground/60">{log.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
