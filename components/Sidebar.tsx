"use client";

import { Link } from "react-router-dom";
import { useAuth } from "@/components/AuthContext";

const navItems = [
  { label: "Dashboard", href: "/" },
  { label: "Profile", href: "/profile" },
  { label: "Tools", href: "/tools" }
];

export function Sidebar() {
  const { user, signOut } = useAuth();

  return (
    <aside className="hidden w-80 flex-col gap-6 xl:flex">
      <div className="rounded-3xl bg-white/90 p-6 shadow-soft ring-1 ring-slate-200/70 backdrop-blur-xl dark:bg-slate-900/85 dark:ring-slate-700/80">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">SaaS</p>
        <h2 className="mt-4 text-2xl font-semibold">Product HQ</h2>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">Analytics, profile, theme, and tools in one place.</p>
      </div>

      <nav className="space-y-2 rounded-3xl bg-white/90 p-6 shadow-soft ring-1 ring-slate-200/70 dark:bg-slate-900/85 dark:ring-slate-700/80">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Navigation</p>
        <div className="mt-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      <div className="rounded-3xl bg-white/90 p-6 shadow-soft ring-1 ring-slate-200/70 dark:bg-slate-900/85 dark:ring-slate-700/80">
        <div>
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Signed in as</p>
          <p className="mt-3 text-lg font-medium text-slate-900 dark:text-slate-100">{user?.name}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{user?.email}</p>
        </div>
        <button
          onClick={signOut}
          className="mt-6 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
        >
          Sign out
        </button>
      </div>
    </aside>
  );
}
