import { createContext, useContext, useState, useEffect } from "react";

export type Role = "user" | "admin";

export interface AuthUser {
  id: string;
  fullName: string;
  email: string;
  role: Role;
}

interface StoredUser extends AuthUser {
  password: string;
}

interface AuthContextValue {
  user: AuthUser | null;
  login: (email: string, password: string) => string | null;
  adminLogin: (email: string, password: string) => string | null;
  register: (fullName: string, email: string, password: string) => string | null;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

const SEED_USERS: StoredUser[] = [
  { id: "1", fullName: "Lyheng Test", email: "user@mindease.com", password: "password123", role: "user" },
  { id: "2", fullName: "Admin User", email: "admin@mindease.com", password: "admin123", role: "admin" },
];

function loadUsers(): StoredUser[] {
  try {
    const raw = localStorage.getItem("mindease_users");
    return raw ? JSON.parse(raw) : [...SEED_USERS];
  } catch {
    return [...SEED_USERS];
  }
}

function saveUsers(users: StoredUser[]) {
  localStorage.setItem("mindease_users", JSON.stringify(users));
}

function loadSession(): AuthUser | null {
  try {
    const raw = localStorage.getItem("mindease_session");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(loadSession);

  useEffect(() => {
    if (!localStorage.getItem("mindease_users")) {
      saveUsers(SEED_USERS);
    }
  }, []);

  function login(email: string, password: string): string | null {
    const users = loadUsers();
    const found = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password && u.role === "user"
    );
    if (!found) return "Invalid email or password.";
    const session: AuthUser = { id: found.id, fullName: found.fullName, email: found.email, role: found.role };
    localStorage.setItem("mindease_session", JSON.stringify(session));
    setUser(session);
    return null;
  }

  function adminLogin(email: string, password: string): string | null {
    const users = loadUsers();
    const found = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password && u.role === "admin"
    );
    if (!found) return "Invalid admin credentials.";
    const session: AuthUser = { id: found.id, fullName: found.fullName, email: found.email, role: found.role };
    localStorage.setItem("mindease_session", JSON.stringify(session));
    setUser(session);
    return null;
  }

  function register(fullName: string, email: string, password: string): string | null {
    if (!fullName.trim()) return "Full name is required.";
    if (!email.trim()) return "Email is required.";
    if (password.length < 6) return "Password must be at least 6 characters.";
    const users = loadUsers();
    if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
      return "An account with this email already exists.";
    }
    const newUser: StoredUser = {
      id: Date.now().toString(),
      fullName: fullName.trim(),
      email: email.toLowerCase().trim(),
      password,
      role: "user",
    };
    const updated = [...users, newUser];
    saveUsers(updated);
    const session: AuthUser = { id: newUser.id, fullName: newUser.fullName, email: newUser.email, role: newUser.role };
    localStorage.setItem("mindease_session", JSON.stringify(session));
    setUser(session);
    return null;
  }

  function logout() {
    localStorage.removeItem("mindease_session");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, adminLogin, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
