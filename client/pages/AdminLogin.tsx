import { Link } from "react-router-dom";
import { Brain, Users, AlertTriangle, TrendingUp, Lock } from "lucide-react";
import { useState } from "react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const features = [
    { icon: <Users className="w-6 h-6" />, text: "User Management" },
    { icon: <AlertTriangle className="w-6 h-6" />, text: "Crisis Monitoring" },
    { icon: <TrendingUp className="w-6 h-6" />, text: "Analytics" },
    { icon: <Lock className="w-6 h-6" />, text: "System Control" },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Panel - 60% */}
      <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center bg-gradient-to-b from-background to-card/20">
        <div className="flex items-center gap-3 mb-6">
          <Brain className="w-10 h-10 text-amber-500" />
          <div>
            <span className="text-2xl font-bold text-foreground">MindEase</span>
            <p className="text-xs text-amber-500 font-semibold">ADMIN</p>
          </div>
        </div>

        <div className="mb-12 p-4 bg-amber-500/20 border border-amber-500/40 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            <p className="font-semibold text-amber-500">Admin access only</p>
          </div>
          <p className="text-sm text-amber-200">
            This is a restricted administrative area. Unauthorized access is prohibited.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-foreground mb-2">
          Administrative Control Panel
        </h2>
        <p className="text-foreground/60 mb-12">
          Manage platform health, users, and crisis alerts.
        </p>

        <div className="space-y-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="text-amber-500 mt-1">{feature.icon}</div>
              <div>
                <p className="font-semibold text-foreground">{feature.text}</p>
                <p className="text-sm text-foreground/60">
                  Complete platform management
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel - 40% */}
      <div className="w-full md:w-2/5 p-8 md:p-12 flex items-center justify-center">
        <div className="w-full max-w-sm space-y-4">
          {/* Warning Banner */}
          <div className="p-4 bg-amber-500/20 border border-amber-500/40 rounded-lg">
            <p className="text-sm text-amber-200">
              ⚠️ This login is separate from user accounts. Do not share credentials.
            </p>
          </div>

          {/* Login Form */}
          <div className="bg-card border border-border/40 rounded-lg p-8 backdrop-blur-sm">
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Admin Sign In
            </h1>
            <p className="text-foreground/60 mb-8">
              Enter your administrative credentials
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Admin Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@mindease.com"
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border/40 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
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
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border/40 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 rounded-lg bg-amber-500 text-foreground font-semibold hover:bg-amber-600 transition-colors"
              >
                Sign In as Admin
              </button>
            </form>

            <div className="border-t border-border/40 mt-6 pt-6">
              <p className="text-center text-foreground/60 text-sm">
                User account?{" "}
                <Link
                  to="/login"
                  className="text-amber-500 hover:text-amber-400 transition-colors font-medium"
                >
                  Return to user login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
