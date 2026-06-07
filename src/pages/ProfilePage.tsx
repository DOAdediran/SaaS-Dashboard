import { useAuth } from "@/components/AuthContext";
import { Sidebar } from "@/components/Sidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AuthGate } from "@/components/AuthGate";

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <AuthGate>
      <div className="min-h-screen bg-slate-50 px-4 py-6 text-slate-900 dark:bg-slate-950 dark:text-slate-100 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl gap-6 xl:px-12">
          <Sidebar />

          <main className="flex-1 space-y-6">
            <div className="flex flex-col gap-4 rounded-3xl bg-white/90 p-6 shadow-soft ring-1 ring-slate-200/70 backdrop-blur-xl dark:bg-slate-900/85 dark:ring-slate-700/80 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">User Profile</p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight">Manage your account</h1>
              </div>
              <ThemeToggle />
            </div>

            <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
              <div className="rounded-3xl bg-white/90 p-6 shadow-soft ring-1 ring-slate-200/70 dark:bg-slate-900/85 dark:ring-slate-700/80">
                <h2 className="text-xl font-semibold">Profile details</h2>
                <div className="mt-6 space-y-4 text-slate-700 dark:text-slate-300">
                  <div className="rounded-2xl border border-slate-200 p-5 dark:border-slate-700">
                    <p className="text-sm text-slate-500">Name</p>
                    <p className="mt-2 text-lg font-medium">{user?.name}</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 p-5 dark:border-slate-700">
                    <p className="text-sm text-slate-500">Email</p>
                    <p className="mt-2 text-lg font-medium">{user?.email}</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 p-5 dark:border-slate-700">
                    <p className="text-sm text-slate-500">Role</p>
                    <p className="mt-2 text-lg font-medium">{user?.role}</p>
                  </div>
                </div>
              </div>

              <aside className="space-y-6">
                <div className="rounded-3xl bg-white/90 p-6 shadow-soft ring-1 ring-slate-200/70 dark:bg-slate-900/85 dark:ring-slate-700/80">
                  <h2 className="text-xl font-semibold">Account actions</h2>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                    Update your profile details, manage billing, and review your permissions.
                  </p>
                </div>
                <div className="rounded-3xl bg-white/90 p-6 shadow-soft ring-1 ring-slate-200/70 dark:bg-slate-900/85 dark:ring-slate-700/80">
                  <h2 className="text-lg font-semibold">Security</h2>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                    Password reset, two-factor authentication, and session management will appear here.
                  </p>
                </div>
              </aside>
            </section>
          </main>
        </div>
      </div>
    </AuthGate>
  );
}
