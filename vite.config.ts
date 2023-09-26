// vite.config.js (or vite.config.ts if using TypeScript)
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      name: "TerhoButton",
      entry: "./src/TerhoButton.tsx", // Specify the path to your custom entry file
      formats: ["cjs"], // Output format as CommonJS module
      fileName: () => "TerhoButton.js", // Output filename
    },
    // rollupOptions: {
    //   input: "./src/TerhoButton.tsx",
    //   output: {
    //     file: "TerhoButton",
    //   },
    // },
  },
});
