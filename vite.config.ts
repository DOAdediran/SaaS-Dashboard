import { defineConfig } from "vite";
import path from "path";

export default defineConfig(async () => {
  const react = (await import("@vitejs/plugin-react-swc")).default;
  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, ".")
      }
    },
    build: {
      sourcemap: false
    }
  };
});
