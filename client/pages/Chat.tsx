import { UserNavbar } from "@/components/UserNavbar";
import { Brain, Plus, Send, AlertTriangle } from "lucide-react";
import { useState } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      type: "ai",
      content: "Hello! I'm MindEase, your AI companion. How are you feeling today?",
      timestamp: "2:45 PM",
    },
    {
      type: "user",
      content: "I've been feeling a bit anxious about an upcoming presentation.",
      timestamp: "2:46 PM",
    },
    {
      type: "ai",
      content:
        "Presentations can definitely trigger anxiety. Let's explore what's making you anxious. Is it the preparation, the delivery, or something else?",
      timestamp: "2:47 PM",
    },
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([
        ...messages,
        {
          type: "user",
          content: inputValue,
          timestamp: new Date().toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
          }),
        },
      ]);
      setInputValue("");
    }
  };

  const sessions = [
    { id: 1, title: "Anxiety about presentation", date: "Today" },
    { id: 2, title: "Work-life balance", date: "Yesterday" },
    { id: 3, title: "Sleep improvement tips", date: "3 days ago" },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      <UserNavbar />

      <main className="pt-16 w-full flex gap-6 px-6 pb-12 max-w-7xl mx-auto">
        {/* Left Sidebar - Sessions */}
        <div className="w-64 mt-8">
          <div className="bg-card border border-border/40 rounded-lg p-4 backdrop-blur-sm">
            <button className="w-full px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 mb-4">
              <Plus className="w-4 h-4" />
              New Session
            </button>

            <div className="space-y-2">
              {sessions.map((session) => (
                <div
                  key={session.id}
                  className="p-3 rounded-lg bg-background border border-border/40 hover:border-primary/40 transition-colors cursor-pointer"
                >
                  <p className="text-sm font-medium text-foreground">
                    {session.title}
                  </p>
                  <p className="text-xs text-foreground/60">{session.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 mt-8 flex flex-col">
          {/* Header */}
          <div className="bg-card border border-border/40 rounded-lg p-4 backdrop-blur-sm mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">MindEase Companion</p>
                <p className="text-xs text-foreground/60">Online</p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/40 text-xs font-semibold text-green-500">
              Active
            </span>
          </div>

          {/* Crisis Warning Banner */}
          <div className="bg-amber-500/20 border border-amber-500/40 rounded-lg p-4 mb-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-200">
              If you're in crisis, please reach out to a crisis helpline or emergency services.
            </p>
          </div>

          {/* Messages */}
          <div className="flex-1 bg-card border border-border/40 rounded-lg p-6 backdrop-blur-sm mb-4 overflow-y-auto space-y-4">
            {messages.map((message, idx) => (
              <div
                key={idx}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md ${
                    message.type === "user"
                      ? "bg-primary/20 border border-primary/40 text-foreground"
                      : "bg-background border border-border/40 text-foreground"
                  } rounded-lg p-4`}
                >
                  <p className="text-sm mb-1">{message.content}</p>
                  <p className="text-xs text-foreground/60">{message.timestamp}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="bg-card border border-border/40 rounded-lg p-4 backdrop-blur-sm flex gap-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 rounded-lg bg-background border border-border/40 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            <button
              onClick={handleSendMessage}
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
