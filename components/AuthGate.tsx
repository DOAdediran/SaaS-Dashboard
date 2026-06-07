"use client";

import { useAuth } from "@/components/AuthContext";

export function AuthGate({ children }: { children: React.ReactNode }) {
  const { user, signIn } = useAuth();

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <div className="w-full max-w-xl rounded-3xl bg-white/95 p-10 shadow-soft ring-1 ring-slate-200/70 backdrop-blur-xl dark:bg-slate-900/85 dark:ring-slate-700/80">
          <h1 className="text-3xl font-semibold">Welcome back</h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Sign in to unlock the dashboard, charts, profile settings, and SaaS tools.
          </p>
          <button
            onClick={signIn}
            className="mt-8 inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200"
          >
            Sign in
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
