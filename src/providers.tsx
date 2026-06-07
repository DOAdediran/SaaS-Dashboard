import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "@/components/AuthContext";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="saas-dashboard-theme">
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
}
