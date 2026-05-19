import { AdminNavbar } from "@/components/AdminNavbar";
import { AdminSidebar } from "@/components/AdminSidebar";
import { MetricCard } from "@/components/MetricCard";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Users, TrendingUp, AlertTriangle, FileText } from "lucide-react";

export default function AdminDashboard() {
  const dailyActiveUsersData = [
    { day: "Mon", users: 280 },
    { day: "Tue", users: 310 },
    { day: "Wed", users: 290 },
    { day: "Thu", users: 340 },
    { day: "Fri", users: 350 },
    { day: "Sat", users: 320 },
    { day: "Sun", users: 300 },
  ];

  const crisisAlerts = [
    {
      userId: "USR-4521",
      timestamp: "2 hours ago",
      message: "User reported suicidal thoughts",
      severity: "High",
    },
    {
      userId: "USR-4519",
      timestamp: "4 hours ago",
      message: "Unusual activity pattern detected",
      severity: "Medium",
    },
    {
      userId: "USR-4515",
      timestamp: "6 hours ago",
      message: "Crisis keywords detected in chat",
      severity: "High",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <AdminNavbar />
      <AdminSidebar />

      <main className="pt-24 pb-12 px-6 ml-64 max-w-6xl">
        {/* Header */}
        <h1 className="text-3xl font-bold text-foreground mb-8">Platform overview</h1>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <MetricCard
            label="Total Users"
            value="1,284"
            icon={<Users className="w-8 h-8" />}
          />
          <MetricCard
            label="Active Today"
            value="347"
            icon={<TrendingUp className="w-8 h-8" />}
          />
          <MetricCard
            label="Crisis Flags"
            value="3"
            icon={<AlertTriangle className="w-8 h-8" />}
            badge={{ text: "Pending", color: "text-red-500" }}
          />
          <MetricCard
            label="Reports Generated"
            value="892"
            icon={<FileText className="w-8 h-8" />}
          />
        </div>

        {/* Charts Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Daily Active Users */}
          <div className="md:col-span-2 bg-card border border-border/40 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Daily Active Users (7 days)
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={dailyActiveUsersData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="day" stroke="rgba(255,255,255,0.6)" />
                <YAxis stroke="rgba(255,255,255,0.6)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "0.5rem",
                  }}
                  labelStyle={{ color: "#fff" }}
                />
                <Bar dataKey="users" fill="#7c3aed" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pending Crisis Alerts */}
          <div className="bg-card border border-border/40 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Pending Alerts
            </h2>
            <div className="space-y-3">
              {crisisAlerts.map((alert, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-lg border ${
                    alert.severity === "High"
                      ? "border-red-500/40 bg-red-500/10"
                      : "border-amber-500/40 bg-amber-500/10"
                  }`}
                >
                  <div className="flex items-start justify-between mb-1">
                    <p className="text-sm font-medium text-foreground">
                      {alert.userId}
                    </p>
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded ${
                        alert.severity === "High"
                          ? "bg-red-500/20 text-red-400"
                          : "bg-amber-500/20 text-amber-400"
                      }`}
                    >
                      {alert.severity}
                    </span>
                  </div>
                  <p className="text-xs text-foreground/70 mb-2">
                    {alert.message}
                  </p>
                  <p className="text-xs text-foreground/60">{alert.timestamp}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
