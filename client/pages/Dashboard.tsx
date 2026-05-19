import { UserNavbar } from "@/components/UserNavbar";
import { MetricCard } from "@/components/MetricCard";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Smile, BookOpen, MessageSquare, Calendar, LogIn } from "lucide-react";

export default function Dashboard() {
  const { user } = useAuth();
  const moodData = [
    { day: "Mon", mood: 6 },
    { day: "Tue", mood: 7 },
    { day: "Wed", mood: 5 },
    { day: "Thu", mood: 8 },
    { day: "Fri", mood: 7 },
    { day: "Sat", mood: 8 },
    { day: "Sun", mood: 9 },
  ];

  const recentMoods = [
    { emotion: "Happy", intensity: 8, time: "2 hours ago", icon: "😊" },
    { emotion: "Calm", intensity: 7, time: "Yesterday", icon: "😌" },
    { emotion: "Anxious", intensity: 5, time: "2 days ago", icon: "😰" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <UserNavbar />

      <main className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
        {/* Greeting */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground">Good morning, {user?.fullName.split(" ")[0]}</h1>
          <p className="text-foreground/60 mt-2">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <MetricCard label="Current Streak" value="7 days" icon={<Calendar className="w-8 h-8" />} />
          <MetricCard label="Mood This Week" value="Calm" icon={<Smile className="w-8 h-8" />} />
          <MetricCard
            label="Journal Entries"
            value="12"
            icon={<BookOpen className="w-8 h-8" />}
          />
          <MetricCard label="Last Report" value="May 12" />
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Chart */}
          <div className="md:col-span-2 bg-card border border-border/40 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Mood Trend (7 days)
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={moodData}>
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

          {/* Recent Moods */}
          <div className="bg-card border border-border/40 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Recent Check-ins
            </h2>
            <div className="space-y-3">
              {recentMoods.map((mood, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{mood.icon}</span>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {mood.emotion}
                      </p>
                      <p className="text-xs text-foreground/60">{mood.time}</p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-primary">
                    {mood.intensity}/10
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Streak Calendar */}
        <div className="bg-card border border-border/40 rounded-lg p-6 backdrop-blur-sm mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Streak Calendar
          </h2>
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 7 }).map((_, idx) => (
              <div
                key={idx}
                className={`w-12 h-12 rounded-lg flex items-center justify-center font-semibold text-sm ${
                  idx < 6
                    ? "bg-primary/20 border border-primary/40 text-primary"
                    : "bg-border/20 border border-border/40 text-foreground/40"
                }`}
              >
                {String.fromCharCode(65 + idx)}
              </div>
            ))}
          </div>
          <p className="text-xs text-foreground/60 mt-4">
            Keep your streak going! You're on day 7.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="grid md:grid-cols-3 gap-4">
          <Link
            to="/mood"
            className="bg-primary text-primary-foreground rounded-lg p-6 hover:bg-primary/90 transition-colors text-center font-semibold"
          >
            <LogIn className="w-6 h-6 mx-auto mb-2" />
            Log Mood
          </Link>
          <Link
            to="/journal"
            className="bg-primary text-primary-foreground rounded-lg p-6 hover:bg-primary/90 transition-colors text-center font-semibold"
          >
            <BookOpen className="w-6 h-6 mx-auto mb-2" />
            Start Journaling
          </Link>
          <Link
            to="/chat"
            className="bg-primary text-primary-foreground rounded-lg p-6 hover:bg-primary/90 transition-colors text-center font-semibold"
          >
            <MessageSquare className="w-6 h-6 mx-auto mb-2" />
            Open Chat
          </Link>
        </div>
      </main>
    </div>
  );
}
