import { Link } from "react-router-dom";
import { Brain, Smile, BookOpen, MessageSquare, BarChart3, ArrowRight } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <Smile className="w-8 h-8" />,
      title: "Mood Check-in",
      description: "Track your emotional state with daily mood check-ins",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "AI Journaling",
      description: "Journal with AI-powered prompts and reflections",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "AI Chat Support",
      description: "Chat with MindEase companion for emotional support",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Weekly Reports",
      description: "Get insights into your emotional wellness trends",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="flex items-center justify-between px-6 h-16 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold text-foreground">MindEase</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Your personal AI companion for emotional wellbeing
          </h1>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            MindEase helps you understand and improve your mental health through daily mood tracking, AI-powered journaling, and personalized insights.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            Get Started Free
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-card border border-border/40 rounded-lg p-6 backdrop-blur-sm hover:border-primary/40 transition-colors"
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-foreground/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="border-t border-border/40 py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Start your wellness journey today
          </h2>
          <p className="text-foreground/70 mb-8">
            Join thousands of users improving their mental health with MindEase.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            Create Account
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
