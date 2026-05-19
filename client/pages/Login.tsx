import { Link } from "react-router-dom";
import { Brain, Smile, BookOpen, MessageSquare, BarChart3 } from "lucide-react";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const features = [
    { icon: <Smile className="w-6 h-6" />, text: "Mood Check-in" },
    { icon: <BookOpen className="w-6 h-6" />, text: "AI Journaling" },
    { icon: <MessageSquare className="w-6 h-6" />, text: "AI Chat" },
    { icon: <BarChart3 className="w-6 h-6" />, text: "Weekly Reports" },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Panel - 60% */}
      <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center bg-gradient-to-b from-background to-card/20">
        <div className="flex items-center gap-3 mb-12">
          <Brain className="w-10 h-10 text-primary" />
          <span className="text-2xl font-bold text-foreground">MindEase</span>
        </div>

        <h2 className="text-3xl font-bold text-foreground mb-2">
          Your personal AI companion for emotional wellbeing
        </h2>
        <p className="text-foreground/60 mb-12">
          Track your mood, journal your thoughts, and get personalized insights.
        </p>

        <div className="space-y-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="text-primary mt-1">{feature.icon}</div>
              <div>
                <p className="font-semibold text-foreground">{feature.text}</p>
                <p className="text-sm text-foreground/60">
                  Get daily insights and support
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel - 40% */}
      <div className="w-full md:w-2/5 p-8 md:p-12 flex items-center justify-center">
        <div className="w-full max-w-sm bg-card border border-border/40 rounded-lg p-8 backdrop-blur-sm">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Welcome back
          </h1>
          <p className="text-foreground/60 mb-8">
            Sign in to your account to continue
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-lg bg-background border border-border/40 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded-lg bg-background border border-border/40 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>

            <div className="flex justify-end">
              <Link
                to="#"
                className="text-sm text-primary hover:text-primary/90 transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-foreground/60 mt-6">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-primary hover:text-primary/90 transition-colors font-medium"
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
