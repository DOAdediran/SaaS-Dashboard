import { Sidebar } from "@/components/Sidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AuthGate } from "@/components/AuthGate";
import { ChartSection } from "@/components/ChartSection";
import { formatCurrencyNaira, formatNumberShort } from "@/utils/format";

export default function HomePage() {
  return (
    <AuthGate>
      <div className="min-h-screen bg-slate-50 px-4 py-6 text-slate-900 dark:bg-slate-950 dark:text-slate-100 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl gap-6 xl:px-12">
          <Sidebar />

          <main className="flex-1 space-y-6">
            <header className="flex flex-col gap-4 rounded-3xl bg-white/90 p-6 shadow-soft ring-1 ring-slate-200/70 backdrop-blur-xl dark:bg-slate-900/85 dark:ring-slate-700/80">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                    Analytics Dashboard
                  </p>
                  <h1 className="mt-2 text-3xl font-semibold tracking-tight">Monitor your product growth</h1>
                </div>
                <ThemeToggle />
              </div>
              <p className="max-w-2xl text-slate-600 dark:text-slate-300">
                View active users, monthly revenue, conversion trends, and quick tools for managing your SaaS product in one place.
              </p>
            </header>

            <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { label: "Active Users", value: 12400000, formatter: (v: number) => formatNumberShort(v) },
                      { label: "Monthly Revenue", value: 78600000, formatter: (v: number) => formatCurrencyNaira(v) },
                      { label: "Conversion Rate", value: "5.8%" }
                    ].map((stat) => (
                    <div key={stat.label} className="rounded-3xl bg-white/90 p-5 shadow-soft ring-1 ring-slate-200/70 dark:bg-slate-900/85 dark:ring-slate-700/80">
                      <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
                        <p className="mt-3 text-3xl font-semibold">{typeof stat.value === 'number' && stat.formatter ? stat.formatter(stat.value) : stat.value}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-3xl bg-white/90 p-6 shadow-soft ring-1 ring-slate-200/70 dark:bg-slate-900/85 dark:ring-slate-700/80">
                  <ChartSection />
                </div>
              </div>

              <aside className="space-y-6">
                <div className="rounded-3xl bg-white/90 p-6 shadow-soft ring-1 ring-slate-200/70 dark:bg-slate-900/85 dark:ring-slate-700/80">
                  <h2 className="text-lg font-semibold">Today’s highlights</h2>
                  <div className="mt-5 space-y-4 text-sm text-slate-600 dark:text-slate-300">
                    <p>• Product onboarding completion increased by 14%.</p>
                    <p>• New premium trials grew by 28% this week.</p>
                    <p>• Support ticket backlog reduced to 18 items.</p>
                  </div>
                </div>
                <div className="rounded-3xl bg-white/90 p-6 shadow-soft ring-1 ring-slate-200/70 dark:bg-slate-900/85 dark:ring-slate-700/80">
                  <h2 className="text-lg font-semibold">Quick actions</h2>
                  <div className="mt-5 grid gap-3">
                    <button className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200">
                      Create new campaign
                    </button>
                    <button className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 dark:border-slate-700 dark:text-slate-100 dark:hover:border-slate-500">
                      Review user feedback
                    </button>
                  </div>
                </div>
              </aside>
            </section>
          </main>
        </div>
      </div>
    </AuthGate>
  );
}
