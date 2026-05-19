import { useLocation } from "react-router-dom";

export default function Placeholder() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          {location.pathname.split("/").pop() || "Page"}
        </h1>
        <p className="text-foreground/70 mb-8">
          This page is being built. Tell me what you'd like to see here!
        </p>
        <div className="bg-card border border-border/40 rounded-lg p-6 backdrop-blur-sm">
          <p className="text-sm text-foreground/60">
            Current path: <code className="text-primary">{location.pathname}</code>
          </p>
        </div>
      </div>
    </div>
  );
}
