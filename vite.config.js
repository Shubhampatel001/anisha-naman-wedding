import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        naman: resolve(__dirname, "naman-anisha.html"),
        anisha: resolve(__dirname, "anisha-naman.html"),
      },
    },
  },
});