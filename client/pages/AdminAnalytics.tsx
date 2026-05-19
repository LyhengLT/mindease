import { AdminNavbar } from "@/components/AdminNavbar";
import { AdminSidebar } from "@/components/AdminSidebar";
import { MetricCard } from "@/components/MetricCard";
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Users,
  UserPlus,
  Activity,
  MessageSquare,
  TrendingUp,
  Clock,
} from "lucide-react";
import { useState } from "react";

export default function AdminAnalytics() {
  const [range, setRange] = useState<"7d" | "30d" | "90d">("30d");

  const ranges: { key: "7d" | "30d" | "90d"; label: string }[] = [
    { key: "7d", label: "Last 7 days" },
    { key: "30d", label: "Last 30 days" },
    { key: "90d", label: "Last 90 days" },
  ];

  // Growth data — varies slightly per range
  const growthData = {
    "7d": [
      { date: "May 13", users: 1240, sessions: 2180 },
      { date: "May 14", users: 1248, sessions: 2240 },
      { date: "May 15", users: 1257, sessions: 2310 },
      { date: "May 16", users: 1263, sessions: 2280 },
      { date: "May 17", users: 1271, sessions: 2350 },
      { date: "May 18", users: 1278, sessions: 2420 },
      { date: "May 19", users: 1284, sessions: 2480 },
    ],
    "30d": [
      { date: "Apr 20", users: 1108, sessions: 1820 },
      { date: "Apr 25", users: 1142, sessions: 1980 },
      { date: "Apr 30", users: 1175, sessions: 2080 },
      { date: "May 5", users: 1208, sessions: 2160 },
      { date: "May 10", users: 1235, sessions: 2240 },
      { date: "May 15", users: 1257, sessions: 2310 },
      { date: "May 19", users: 1284, sessions: 2480 },
    ],
    "90d": [
      { date: "Feb 20", users: 820, sessions: 1320 },
      { date: "Mar 5", users: 905, sessions: 1480 },
      { date: "Mar 20", users: 985, sessions: 1620 },
      { date: "Apr 5", users: 1062, sessions: 1780 },
      { date: "Apr 20", users: 1108, sessions: 1820 },
      { date: "May 5", users: 1208, sessions: 2160 },
      { date: "May 19", users: 1284, sessions: 2480 },
    ],
  }[range];

  const featureUsageData = [
    { feature: "Mood Check-in", uses: 4820 },
    { feature: "Journal", uses: 3240 },
    { feature: "AI Chat", uses: 2890 },
    { feature: "Weekly Report", uses: 1450 },
    { feature: "Dashboard", uses: 5210 },
  ];

  const moodDistribution = [
    { name: "Happy", value: 32, color: "#fbbf24" },
    { name: "Calm", value: 26, color: "#10b981" },
    { name: "Anxious", value: 18, color: "#f97316" },
    { name: "Sad", value: 14, color: "#3b82f6" },
    { name: "Angry", value: 10, color: "#ef4444" },
  ];

  const retentionData = [
    { cohort: "Wk 1", retention: 100 },
    { cohort: "Wk 2", retention: 78 },
    { cohort: "Wk 3", retention: 62 },
    { cohort: "Wk 4", retention: 54 },
    { cohort: "Wk 5", retention: 48 },
    { cohort: "Wk 6", retention: 44 },
    { cohort: "Wk 7", retention: 42 },
    { cohort: "Wk 8", retention: 41 },
  ];

  const topTriggers = [
    { name: "Work stress", count: 412, pct: 28 },
    { name: "Sleep issues", count: 318, pct: 22 },
    { name: "Relationships", count: 246, pct: 17 },
    { name: "Financial", count: 184, pct: 13 },
    { name: "Health", count: 132, pct: 9 },
  ];

  const tooltipStyle = {
    contentStyle: {
      backgroundColor: "#1e293b",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: "0.5rem",
    },
    labelStyle: { color: "#fff" },
  };

  return (
    <div className="min-h-screen bg-background">
      <AdminNavbar />
      <AdminSidebar />

      <main className="pt-24 pb-12 px-6 ml-64 max-w-6xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Analytics
            </h1>
            <p className="text-foreground/60">
              Platform-wide usage, engagement, and wellness trends
            </p>
          </div>

          {/* Range tabs */}
          <div className="flex gap-2">
            {ranges.map((r) => (
              <button
                key={r.key}
                onClick={() => setRange(r.key)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  range === r.key
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border/40 text-foreground hover:border-primary/40"
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>

        {/* Top metric cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <MetricCard
            label="Total Users"
            value="1,284"
            icon={<Users className="w-8 h-8" />}
            badge={{ text: "+8.2% vs prev", color: "text-green-500" }}
          />
          <MetricCard
            label="New Signups"
            value="176"
            icon={<UserPlus className="w-8 h-8" />}
            badge={{ text: "+12.4% vs prev", color: "text-green-500" }}
          />
          <MetricCard
            label="Avg Session"
            value="8m 42s"
            icon={<Clock className="w-8 h-8" />}
            badge={{ text: "+0:32 vs prev", color: "text-green-500" }}
          />
          <MetricCard
            label="Engagement"
            value="64%"
            icon={<Activity className="w-8 h-8" />}
            badge={{ text: "-2.1% vs prev", color: "text-red-500" }}
          />
        </div>

        {/* User growth */}
        <div className="bg-card border border-border/40 rounded-lg p-6 backdrop-blur-sm mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            User growth &amp; sessions
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={growthData}>
              <defs>
                <linearGradient id="usersGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7c3aed" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#7c3aed" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="sessGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.1)"
              />
              <XAxis dataKey="date" stroke="rgba(255,255,255,0.6)" />
              <YAxis stroke="rgba(255,255,255,0.6)" />
              <Tooltip {...tooltipStyle} />
              <Legend wrapperStyle={{ color: "rgba(255,255,255,0.7)" }} />
              <Area
                type="monotone"
                dataKey="users"
                stroke="#7c3aed"
                fill="url(#usersGrad)"
                strokeWidth={2}
                name="Users"
              />
              <Area
                type="monotone"
                dataKey="sessions"
                stroke="#10b981"
                fill="url(#sessGrad)"
                strokeWidth={2}
                name="Sessions"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Feature usage + Mood distribution */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2 bg-card border border-border/40 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Feature usage
            </h2>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={featureUsageData} layout="vertical">
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.1)"
                />
                <XAxis type="number" stroke="rgba(255,255,255,0.6)" />
                <YAxis
                  type="category"
                  dataKey="feature"
                  stroke="rgba(255,255,255,0.6)"
                  width={110}
                />
                <Tooltip {...tooltipStyle} />
                <Bar dataKey="uses" fill="#7c3aed" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-card border border-border/40 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Mood mix
            </h2>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={moodDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={75}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {moodDistribution.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip {...tooltipStyle} />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-1.5 mt-2">
              {moodDistribution.map((m) => (
                <div
                  key={m.name}
                  className="flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: m.color }}
                    />
                    <span className="text-foreground/80">{m.name}</span>
                  </div>
                  <span className="text-foreground/60">{m.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Retention + Triggers */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-card border border-border/40 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">
                Cohort retention
              </h2>
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <ResponsiveContainer width="100%" height={240}>
              <LineChart data={retentionData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.1)"
                />
                <XAxis dataKey="cohort" stroke="rgba(255,255,255,0.6)" />
                <YAxis
                  stroke="rgba(255,255,255,0.6)"
                  domain={[0, 100]}
                  tickFormatter={(v) => `${v}%`}
                />
                <Tooltip
                  {...tooltipStyle}
                  formatter={(v: number) => `${v}%`}
                />
                <Line
                  type="monotone"
                  dataKey="retention"
                  stroke="#7c3aed"
                  strokeWidth={3}
                  dot={{ fill: "#7c3aed", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-card border border-border/40 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">
                Top emotional triggers
              </h2>
              <MessageSquare className="w-5 h-5 text-primary" />
            </div>
            <div className="space-y-4">
              {topTriggers.map((t) => (
                <div key={t.name}>
                  <div className="flex items-center justify-between mb-1.5">
                    <p className="text-sm text-foreground">{t.name}</p>
                    <p className="text-sm font-semibold text-foreground">
                      {t.count}
                    </p>
                  </div>
                  <div className="w-full h-2 rounded-full bg-background overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${t.pct * 3}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
