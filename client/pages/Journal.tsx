import { UserNavbar } from "@/components/UserNavbar";
import { Brain, RotateCcw } from "lucide-react";
import { useState } from "react";

export default function JournalPage() {
  const [responses, setResponses] = useState(["", "", ""]);

  const handleResponseChange = (index: number, value: string) => {
    const newResponses = [...responses];
    newResponses[index] = value;
    setResponses(newResponses);
  };

  const prompts = [
    "What was the highlight of your day?",
    "How did you feel emotionally today?",
    "What's one thing you're grateful for?",
  ];

  const pastEntries = [
    {
      date: "May 19, 2024",
      mood: "Happy",
      intensity: 8,
      preview: "Had a great day at work...",
    },
    {
      date: "May 18, 2024",
      mood: "Calm",
      intensity: 7,
      preview: "Morning meditation really helped...",
    },
    {
      date: "May 17, 2024",
      mood: "Anxious",
      intensity: 6,
      preview: "Had some challenges but managed well...",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <UserNavbar />

      <main className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-8">Journal</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Left - Journal Form */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-card border border-border/40 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Today's journal session
              </h2>

              {/* Mood Context */}
              <div className="mb-6 p-4 bg-background rounded-lg border border-border/40">
                <p className="text-sm text-foreground/70 mb-1">Today's mood</p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">😊</span>
                  <div>
                    <p className="font-semibold text-foreground">Happy</p>
                    <p className="text-xs text-foreground/60">Intensity: 8/10</p>
                  </div>
                </div>
              </div>

              {/* Prompts */}
              <div className="space-y-4">
                {prompts.map((prompt, idx) => (
                  <div key={idx}>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Prompt {idx + 1}
                    </label>
                    <p className="text-sm text-foreground/70 mb-3">{prompt}</p>
                    <textarea
                      value={responses[idx]}
                      onChange={(e) => handleResponseChange(idx, e.target.value)}
                      placeholder="Write your thoughts here..."
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border/40 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                      rows={3}
                    />
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-6">
                <button className="flex-1 px-4 py-2 rounded-lg bg-background border border-border/40 text-foreground font-semibold hover:border-primary/40 transition-colors flex items-center justify-center gap-2">
                  <RotateCcw className="w-4 h-4" />
                  Regenerate
                </button>
                <button className="flex-1 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
                  Submit Journal
                </button>
              </div>
            </div>
          </div>

          {/* Right - AI Reflection & Past Entries */}
          <div className="space-y-6">
            {/* AI Reflection */}
            <div className="bg-card border border-border/40 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <p className="font-semibold text-foreground">AI Reflection</p>
              </div>

              <div className="space-y-2 text-sm text-foreground/80">
                <p>
                  It's wonderful to see you had such a positive day! Your reflection shows
                  gratitude and mindfulness.
                </p>
                <p>
                  The combination of happy mood and thoughtful journaling suggests you're
                  developing strong emotional awareness.
                </p>
              </div>
            </div>

            {/* Past Entries */}
            <div className="bg-card border border-border/40 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="font-semibold text-foreground mb-4">Past Entries</h3>
              <div className="space-y-3">
                {pastEntries.map((entry, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-background rounded-lg border border-border/40 hover:border-primary/40 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <p className="text-xs font-medium text-foreground/80">
                        {entry.date}
                      </p>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                        {entry.mood}
                      </span>
                    </div>
                    <p className="text-xs text-foreground/60">{entry.preview}</p>
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
