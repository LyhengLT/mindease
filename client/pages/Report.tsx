import { UserNavbar } from "@/components/UserNavbar";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Download, RefreshCw } from "lucide-react";

export default function ReportPage() {
  const moodTrendData = [
    { day: "Mon", mood: 6 },
    { day: "Tue", mood: 7 },
    { day: "Wed", mood: 5 },
    { day: "Thu", mood: 8 },
    { day: "Fri", mood: 7 },
    { day: "Sat", mood: 8 },
    { day: "Sun", mood: 9 },
  ];

  const moodDistributionData = [
    { name: "Happy", value: 35, color: "#fbbf24" },
    { name: "Calm", value: 28, color: "#10b981" },
    { name: "Sad", value: 15, color: "#3b82f6" },
    { name: "Anxious", value: 15, color: "#f97316" },
    { name: "Angry", value: 7, color: "#ef4444" },
  ];

  const triggers = [
    { name: "Work deadlines", count: 12, color: "text-red-400" },
    { name: "Social interactions", count: 8, color: "text-yellow-400" },
    { name: "Sleep deprivation", count: 6, color: "text-orange-400" },
  ];

  const suggestions = [
    "Try 10 minutes of daily meditation to reduce stress",
    "Establish a consistent sleep schedule for better mood stability",
    "Engage in physical exercise 3-4 times per week",
  ];

  const pastReports = [
    { week: "May 5-12", date: "May 12, 2024", mood: "Happy" },
    { week: "Apr 28-May 5", date: "May 5, 2024", mood: "Calm" },
    { week: "Apr 21-28", date: "Apr 28, 2024", mood: "Mixed" },
  ];

  const weekTabs = [
    { label: "This Week", active: true },
    { label: "Last Week", active: false },
    { label: "2 Weeks Ago", active: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      <UserNavbar />

      <main className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Weekly wellness report
          </h1>
          <p className="text-foreground/60">May 12-19, 2026</p>
        </div>

        {/* Header Actions & Tabs */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex gap-2">
            {weekTabs.map((tab, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  tab.active
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border/40 text-foreground hover:border-primary/40"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2">
            <RefreshCw className="w-4 h-4" />
            Generate Report
          </button>
        </div>

        {/* Charts Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Mood Trend */}
          <div className="bg-card border border-border/40 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Mood Trend
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={moodTrendData}>
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
                <Bar dataKey="mood" fill="#7c3aed" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Mood Distribution */}
          <div className="bg-card border border-border/40 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Mood Distribution
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={moodDistributionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {moodDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "0.5rem",
                  }}
                  labelStyle={{ color: "#fff" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Insights Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Emotional Triggers */}
          <div className="bg-card border border-border/40 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Emotional Triggers
            </h2>
            <div className="space-y-3">
              {triggers.map((trigger, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${trigger.color}`} />
                    <p className="text-sm text-foreground">{trigger.name}</p>
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    {trigger.count} times
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* AI Suggestions */}
          <div className="bg-card border border-border/40 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              AI Suggestions
            </h2>
            <div className="space-y-3">
              {suggestions.map((suggestion, idx) => (
                <div key={idx} className="flex gap-3">
                  <span className="text-primary font-bold text-lg">
                    {idx + 1}.
                  </span>
                  <p className="text-sm text-foreground/80">{suggestion}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Past Reports */}
        <div className="bg-card border border-border/40 rounded-lg p-6 backdrop-blur-sm">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Past Reports
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {pastReports.map((report, idx) => (
              <div
                key={idx}
                className="p-4 bg-background border border-border/40 rounded-lg hover:border-primary/40 transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-medium text-foreground">{report.week}</p>
                    <p className="text-xs text-foreground/60">{report.date}</p>
                  </div>
                  <Download className="w-4 h-4 text-foreground/60 hover:text-primary" />
                </div>
                <p className="text-sm text-primary font-semibold">{report.mood}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
