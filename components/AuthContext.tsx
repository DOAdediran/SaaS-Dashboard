"use client";

import { createContext, useContext, useEffect, useState } from "react";

type User = {
  name: string;
  email: string;
  role: string;
};

type AuthContextValue = {
  user: User | null;
  signIn: () => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const defaultUser: User = {
  name: "Avery Lane",
  email: "avery@company.com",
  role: "Product Owner"
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem("saas-dashboard-user");
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    if (user) {
      window.localStorage.setItem("saas-dashboard-user", JSON.stringify(user));
    } else {
      window.localStorage.removeItem("saas-dashboard-user");
    }
  }, [user]);

  const signIn = () => setUser(defaultUser);
  const signOut = () => setUser(null);

  return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
