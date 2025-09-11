import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  if (mode === "lib") {
    // Library build configuration
    return {
      plugins: [react(), tailwindcss()],
      build: {
        lib: {
          entry: path.resolve(__dirname, "src/index.ts"),
          name: "ReactPagedComponents",
          fileName: "index",
          formats: ["es"],
        },
        rollupOptions: {
          external: ["react", "react-dom", "pagedjs", "tailwindcss"],
          output: {
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
              pagedjs: "PagedJS",
            },
          },
        },
      },
    };
  }

  // Development configuration
  return {
    plugins: [react(), tailwindcss()],
  };
});
