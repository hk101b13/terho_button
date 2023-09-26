// vite.config.js (or vite.config.ts if using TypeScript)
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      name: "TerhoButton",
      entry: "./src/TerhoButton.tsx",
      formats: ["es"],
      fileName: () => "TerhoButton.js",
    },
    // rollupOptions: {
    //   input: "./src/TerhoButton.tsx",
    //   output: {
    //     file: "TerhoButton",
    //   },
    // },
  },
});
