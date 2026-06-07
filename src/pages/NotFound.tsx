export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-6 text-slate-900 dark:bg-slate-950 dark:text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white/90 p-10 shadow-soft ring-1 ring-slate-200/70 backdrop-blur-xl dark:bg-slate-900/85 dark:ring-slate-700/80">
        <h1 className="text-4xl font-semibold">Page not found</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">The page you are looking for does not exist.</p>
        <a href="/" className="mt-8 inline-flex rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200">
          Return home
        </a>
      </div>
    </div>
  );
}
