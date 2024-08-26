import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/James-Attia-Portfolio/",
  server: {
    historyApiFallback: true,
  },
});
