import { Sidebar } from "@/components/Sidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AuthGate } from "@/components/AuthGate";

const tools = [
  {
    title: "Workflow builder",
    description: "Create onboarding and automation flows for new customers."
  },
  {
    title: "Insights explorer",
    description: "Drill into product usage and segment performance."
  },
  {
    title: "Team settings",
    description: "Manage roles, access, and collaboration rules."
  }
];

export default function ToolsPage() {
  return (
    <AuthGate>
      <div className="min-h-screen bg-slate-50 px-4 py-6 text-slate-900 dark:bg-slate-950 dark:text-slate-100 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl gap-6 xl:px-12">
          <Sidebar />

          <main className="flex-1 space-y-6">
            <div className="flex flex-col gap-4 rounded-3xl bg-white/90 p-6 shadow-soft ring-1 ring-slate-200/70 backdrop-blur-xl dark:bg-slate-900/85 dark:ring-slate-700/80 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Tools</p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight">Built for your SaaS team</h1>
              </div>
              <ThemeToggle />
            </div>

            <section className="grid gap-6 sm:grid-cols-2">
              {tools.map((tool) => (
                <div key={tool.title} className="rounded-3xl bg-white/90 p-6 shadow-soft ring-1 ring-slate-200/70 dark:bg-slate-900/85 dark:ring-slate-700/80">
                  <h2 className="text-xl font-semibold">{tool.title}</h2>
                  <p className="mt-3 text-slate-600 dark:text-slate-300">{tool.description}</p>
                  <button className="mt-6 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200">
                    Open tool
                  </button>
                </div>
              ))}
            </section>
          </main>
        </div>
      </div>
    </AuthGate>
  );
}
