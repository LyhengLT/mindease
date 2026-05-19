import { AdminNavbar } from "@/components/AdminNavbar";
import { AdminSidebar } from "@/components/AdminSidebar";
import { Search, MoreVertical, ChevronLeft, ChevronRight } from "lucide-react";

export default function AdminUsers() {
  const users = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "SJ",
      email: "sarah.j@example.com",
      joined: "Jan 15, 2024",
      lastLogin: "2 hours ago",
      status: "Active",
      statusColor: "bg-green-500/20 text-green-400",
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "MC",
      email: "michael.c@example.com",
      joined: "Feb 3, 2024",
      lastLogin: "Today",
      status: "Active",
      statusColor: "bg-green-500/20 text-green-400",
    },
    {
      id: 3,
      name: "Emma Davis",
      avatar: "ED",
      email: "emma.d@example.com",
      joined: "Mar 10, 2024",
      lastLogin: "5 days ago",
      status: "Inactive",
      statusColor: "bg-gray-500/20 text-gray-400",
    },
    {
      id: 4,
      name: "James Wilson",
      avatar: "JW",
      email: "james.w@example.com",
      joined: "Jan 20, 2024",
      lastLogin: "Never",
      status: "Banned",
      statusColor: "bg-red-500/20 text-red-400",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <AdminNavbar />
      <AdminSidebar />

      <main className="pt-24 pb-12 px-6 ml-64 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">User management</h1>

          {/* Search and Filter */}
          <div className="flex gap-4">
            <div className="flex-1 flex items-center gap-2 bg-card border border-border/40 rounded-lg px-4 py-2">
              <Search className="w-5 h-5 text-foreground/60" />
              <input
                type="text"
                placeholder="Search users..."
                className="flex-1 bg-transparent text-foreground placeholder-foreground/50 focus:outline-none"
              />
            </div>
            <button className="px-4 py-2 rounded-lg bg-card border border-border/40 text-foreground hover:border-primary/40 transition-colors">
              Filter
            </button>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-card border border-border/40 rounded-lg overflow-hidden backdrop-blur-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/40">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    User
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Email
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Joined
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Last Login
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
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-border/40 hover:bg-background/50 transition-colors last:border-b-0"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-xs font-semibold text-primary">
                          {user.avatar}
                        </div>
                        <p className="font-medium text-foreground">{user.name}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground/70">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground/70">
                      {user.joined}
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground/70">
                      {user.lastLogin}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${user.statusColor}`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="p-2 hover:bg-background rounded-lg transition-colors">
                        <MoreVertical className="w-4 h-4 text-foreground/60" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="border-t border-border/40 px-6 py-4 flex items-center justify-between">
            <p className="text-sm text-foreground/70">
              Showing 1 to 4 of {users.length} users
            </p>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-background rounded-lg transition-colors disabled:opacity-50">
                <ChevronLeft className="w-4 h-4 text-foreground/60" />
              </button>
              <button className="p-2 hover:bg-background rounded-lg transition-colors">
                <ChevronRight className="w-4 h-4 text-foreground/60" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
