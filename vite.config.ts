// vite.config.js (or vite.config.ts if using TypeScript)
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin({
      jsAssetsFilterFunction: function customJsAssetsfilterFunction(
        outputChunk
      ) {
        return outputChunk.fileName == "index.js";
      },
    }),
  ],
  build: {
    lib: {
      name: "customized-module",
      entry: "./src/index.tsx",
      formats: ["es"],
      fileName: () => "index.js",
    },
    rollupOptions: {
      input: "./src",
      output: {
        dir: "./dist",
      },
    },
  },
});
