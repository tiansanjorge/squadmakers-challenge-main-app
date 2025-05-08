import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "mainApp",
      remotes: {
        listApp: "http://localhost:3001/assets/remoteEntry.js",
        detailApp: "http://localhost:3000/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: true,
    modulePreload: false,
    rollupOptions: {
      output: {
        format: "esm",
      },
    },
  },
});
