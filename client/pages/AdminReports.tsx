import { AdminNavbar } from "@/components/AdminNavbar";
import { AdminSidebar } from "@/components/AdminSidebar";
import { MetricCard } from "@/components/MetricCard";
import {
  FileText,
  Download,
  Calendar,
  Filter,
  Search,
  Plus,
  CheckCircle2,
  Clock,
  XCircle,
} from "lucide-react";
import { useMemo, useState } from "react";

type ReportStatus = "Ready" | "Generating" | "Failed";

interface Report {
  id: string;
  name: string;
  type: "Weekly" | "Monthly" | "Custom" | "Crisis" | "Engagement";
  generatedBy: string;
  date: string;
  size: string;
  status: ReportStatus;
}

export default function AdminReports() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("All");
  const [statusFilter, setStatusFilter] = useState<string>("All");

  const allReports: Report[] = [
    {
      id: "RPT-2026-0512",
      name: "Weekly Platform Summary",
      type: "Weekly",
      generatedBy: "System",
      date: "May 19, 2026",
      size: "2.4 MB",
      status: "Ready",
    },
    {
      id: "RPT-2026-0511",
      name: "Monthly Engagement Report",
      type: "Monthly",
      generatedBy: "admin@mindease.com",
      date: "May 17, 2026",
      size: "5.1 MB",
      status: "Ready",
    },
    {
      id: "RPT-2026-0510",
      name: "Crisis Alert Audit – Q2",
      type: "Crisis",
      generatedBy: "admin@mindease.com",
      date: "May 15, 2026",
      size: "1.2 MB",
      status: "Ready",
    },
    {
      id: "RPT-2026-0509",
      name: "User Engagement Deep-Dive",
      type: "Engagement",
      generatedBy: "admin@mindease.com",
      date: "May 14, 2026",
      size: "—",
      status: "Generating",
    },
    {
      id: "RPT-2026-0508",
      name: "Weekly Platform Summary",
      type: "Weekly",
      generatedBy: "System",
      date: "May 12, 2026",
      size: "2.3 MB",
      status: "Ready",
    },
    {
      id: "RPT-2026-0507",
      name: "Custom: Mood Trends (Jan–Apr)",
      type: "Custom",
      generatedBy: "admin@mindease.com",
      date: "May 10, 2026",
      size: "—",
      status: "Failed",
    },
    {
      id: "RPT-2026-0506",
      name: "Monthly Engagement Report",
      type: "Monthly",
      generatedBy: "System",
      date: "May 1, 2026",
      size: "4.8 MB",
      status: "Ready",
    },
  ];

  const types = ["All", "Weekly", "Monthly", "Custom", "Crisis", "Engagement"];
  const statuses: (ReportStatus | "All")[] = [
    "All",
    "Ready",
    "Generating",
    "Failed",
  ];

  const filtered = useMemo(() => {
    return allReports.filter((r) => {
      if (typeFilter !== "All" && r.type !== typeFilter) return false;
      if (statusFilter !== "All" && r.status !== statusFilter) return false;
      if (
        search &&
        !r.name.toLowerCase().includes(search.toLowerCase()) &&
        !r.id.toLowerCase().includes(search.toLowerCase())
      )
        return false;
      return true;
    });
  }, [search, typeFilter, statusFilter]);

  const statusStyles: Record<ReportStatus, { badge: string; icon: JSX.Element }> = {
    Ready: {
      badge: "bg-green-500/20 text-green-400",
      icon: <CheckCircle2 className="w-3.5 h-3.5" />,
    },
    Generating: {
      badge: "bg-amber-500/20 text-amber-400",
      icon: <Clock className="w-3.5 h-3.5 animate-pulse" />,
    },
    Failed: {
      badge: "bg-red-500/20 text-red-400",
      icon: <XCircle className="w-3.5 h-3.5" />,
    },
  };

  const typeBadge: Record<Report["type"], string> = {
    Weekly: "bg-blue-500/20 text-blue-400",
    Monthly: "bg-purple-500/20 text-purple-400",
    Custom: "bg-pink-500/20 text-pink-400",
    Crisis: "bg-red-500/20 text-red-400",
    Engagement: "bg-emerald-500/20 text-emerald-400",
  };

  const scheduled = [
    {
      name: "Weekly Platform Summary",
      cadence: "Every Monday 09:00",
      next: "May 25, 2026",
    },
    {
      name: "Monthly Engagement Report",
      cadence: "1st of each month",
      next: "Jun 1, 2026",
    },
    {
      name: "Crisis Alert Digest",
      cadence: "Daily 18:00",
      next: "Tomorrow 18:00",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <AdminNavbar />
      <AdminSidebar />

      <main className="pt-24 pb-12 px-6 ml-64 max-w-6xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Reports</h1>
            <p className="text-foreground/60">
              Generate, schedule, and export platform reports
            </p>
          </div>
          <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Generate report
          </button>
        </div>

        {/* Summary metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <MetricCard
            label="Reports This Month"
            value="34"
            icon={<FileText className="w-8 h-8" />}
          />
          <MetricCard
            label="Scheduled"
            value="3"
            icon={<Calendar className="w-8 h-8" />}
          />
          <MetricCard
            label="Total Downloads"
            value="892"
            icon={<Download className="w-8 h-8" />}
          />
          <MetricCard
            label="Failed"
            value="1"
            icon={<XCircle className="w-8 h-8" />}
            badge={{ text: "Needs attention", color: "text-red-500" }}
          />
        </div>

        {/* Filters */}
        <div className="bg-card border border-border/40 rounded-lg p-4 backdrop-blur-sm mb-6">
          <div className="flex flex-wrap gap-3 items-center">
            <div className="flex-1 min-w-[220px] flex items-center gap-2 bg-background border border-border/40 rounded-lg px-3 py-2">
              <Search className="w-4 h-4 text-foreground/60" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search by report name or ID..."
                className="flex-1 bg-transparent text-foreground placeholder-foreground/50 focus:outline-none text-sm"
              />
            </div>

            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-foreground/60" />
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="bg-background border border-border/40 rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary/40"
              >
                {types.map((t) => (
                  <option key={t} value={t}>
                    {t === "All" ? "All types" : t}
                  </option>
                ))}
              </select>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-background border border-border/40 rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary/40"
              >
                {statuses.map((s) => (
                  <option key={s} value={s}>
                    {s === "All" ? "All statuses" : s}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Reports table */}
        <div className="bg-card border border-border/40 rounded-lg overflow-hidden backdrop-blur-sm mb-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/40">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Report
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Type
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Generated by
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Size
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-6 py-12 text-center text-foreground/60 text-sm"
                    >
                      No reports match your filters.
                    </td>
                  </tr>
                ) : (
                  filtered.map((r) => (
                    <tr
                      key={r.id}
                      className="border-b border-border/40 hover:bg-background/50 transition-colors last:border-b-0"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center">
                            <FileText className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground text-sm">
                              {r.name}
                            </p>
                            <p className="text-xs text-foreground/60">{r.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${typeBadge[r.type]}`}
                        >
                          {r.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-foreground/70">
                        {r.generatedBy}
                      </td>
                      <td className="px-6 py-4 text-sm text-foreground/70">
                        {r.date}
                      </td>
                      <td className="px-6 py-4 text-sm text-foreground/70">
                        {r.size}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[r.status].badge}`}
                        >
                          {statusStyles[r.status].icon}
                          {r.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          disabled={r.status !== "Ready"}
                          className="p-2 rounded-lg transition-colors text-foreground/60 hover:text-primary hover:bg-background disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:text-foreground/60 disabled:hover:bg-transparent"
                          title="Download"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="border-t border-border/40 px-6 py-3 flex items-center justify-between">
            <p className="text-xs text-foreground/60">
              Showing {filtered.length} of {allReports.length} reports
            </p>
          </div>
        </div>

        {/* Scheduled reports */}
        <div className="bg-card border border-border/40 rounded-lg p-6 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">
              Scheduled reports
            </h2>
            <Calendar className="w-5 h-5 text-primary" />
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {scheduled.map((s, i) => (
              <div
                key={i}
                className="p-4 bg-background border border-border/40 rounded-lg hover:border-primary/40 transition-colors"
              >
                <p className="font-medium text-foreground text-sm mb-2">
                  {s.name}
                </p>
                <p className="text-xs text-foreground/60 mb-3">{s.cadence}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-foreground/60">Next run</span>
                  <span className="text-xs font-semibold text-primary">
                    {s.next}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
