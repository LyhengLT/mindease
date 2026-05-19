import { UserNavbar } from "@/components/UserNavbar";
import { Brain, Send } from "lucide-react";
import { useState } from "react";

export default function MoodPage() {
  const [selectedMood, setSelectedMood] = useState("Happy");
  const [intensity, setIntensity] = useState(4);
  const [note, setNote] = useState("");

  const moods = [
    { name: "Happy", emoji: "😊", color: "bg-yellow-500/20 border-yellow-500/40" },
    { name: "Sad", emoji: "😢", color: "bg-blue-500/20 border-blue-500/40" },
    { name: "Anxious", emoji: "😰", color: "bg-orange-500/20 border-orange-500/40" },
    { name: "Angry", emoji: "😠", color: "bg-red-500/20 border-red-500/40" },
    { name: "Calm", emoji: "😌", color: "bg-green-500/20 border-green-500/40" },
  ];

  const recentCheckIns = [
    { mood: "Calm", intensity: 7, note: "Had a good meditation session", time: "Yesterday" },
    { mood: "Happy", intensity: 8, note: "Great day with friends", time: "2 days ago" },
    { mood: "Anxious", intensity: 5, note: "Work deadline approaching", time: "3 days ago" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <UserNavbar />

      <main className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-8">Mood Check-in</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Left - Check-in Form */}
          <div className="md:col-span-2 space-y-6">
            {/* How are you feeling */}
            <div className="bg-card border border-border/40 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="text-xl font-semibold text-foreground mb-6">
                How are you feeling today?
              </h2>

              <div className="grid grid-cols-5 gap-3 mb-6">
                {moods.map((mood) => (
                  <button
                    key={mood.name}
                    onClick={() => setSelectedMood(mood.name)}
                    className={`p-4 rounded-lg border-2 transition-all text-center ${
                      selectedMood === mood.name
                        ? `${mood.color} border-primary bg-primary/10`
                        : "border-border/40 bg-background hover:border-primary/40"
                    }`}
                  >
                    <div className="text-3xl mb-2">{mood.emoji}</div>
                    <p className="text-xs font-medium text-foreground">{mood.name}</p>
                  </button>
                ))}
              </div>

              {/* Intensity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Intensity Level: {intensity}
                </label>
                <div className="flex gap-2">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setIntensity(idx + 1)}
                      className={`flex-1 py-2 rounded-lg font-semibold transition-colors ${
                        intensity === idx + 1
                          ? "bg-primary text-primary-foreground"
                          : "bg-background border border-border/40 text-foreground hover:border-primary/40"
                      }`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Optional Note */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Optional Note
                </label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="What's on your mind?"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border/40 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                  rows={4}
                />
              </div>

              <button className="w-full px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
                Submit Check-in
              </button>
            </div>
          </div>

          {/* Right - AI Response */}
          <div className="space-y-6">
            <div className="bg-card border border-border/40 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">AI Response</p>
                  <p className="text-xs text-foreground/60">MindEase Companion</p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <p className="text-sm text-foreground/80">
                  It sounds like you're feeling quite positive today! That's wonderful to see.
                </p>
                <p className="text-sm text-foreground/80">
                  Let's build on this momentum. Here are some suggestions to maintain your wellbeing.
                </p>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 px-3 py-2 rounded-lg bg-background border border-border/40 text-sm font-medium text-foreground hover:border-primary/40 transition-colors">
                  Explore Tips
                </button>
                <button className="flex-1 px-3 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
                  Chat More
                </button>
              </div>
            </div>

            {/* Recent Check-ins List */}
            <div className="bg-card border border-border/40 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="font-semibold text-foreground mb-4">Recent Check-ins</h3>
              <div className="space-y-3">
                {recentCheckIns.map((checkin, idx) => (
                  <div key={idx} className="pb-3 border-b border-border/40 last:border-b-0 last:pb-0">
                    <div className="flex items-start justify-between mb-1">
                      <p className="font-medium text-foreground">{checkin.mood}</p>
                      <p className="text-xs text-foreground/60">{checkin.time}</p>
                    </div>
                    <p className="text-xs text-foreground/70 mb-1">{checkin.note}</p>
                    <p className="text-xs text-primary font-semibold">
                      Intensity: {checkin.intensity}/10
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
