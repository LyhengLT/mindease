import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

// User Pages
import Dashboard from "./pages/Dashboard";
import Mood from "./pages/Mood";
import Journal from "./pages/Journal";
import Chat from "./pages/Chat";
import Report from "./pages/Report";

// Admin Pages
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminUsers from "./pages/AdminUsers";
import AdminCrisis from "./pages/AdminCrisis";
import AdminSystem from "./pages/AdminSystem";
import Placeholder from "./pages/Placeholder";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* User Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mood" element={<Mood />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/report" element={<Report />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/crisis" element={<AdminCrisis />} />
        <Route path="/admin/analytics" element={<Placeholder />} />
        <Route path="/admin/reports" element={<Placeholder />} />
        <Route path="/admin/system" element={<AdminSystem />} />

        {/* Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
