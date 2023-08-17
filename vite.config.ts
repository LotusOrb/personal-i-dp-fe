import { defineConfig } from "vite";
import pluginReact from "@vitejs/plugin-react-swc";
import pluginPathConfig from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [pluginReact(),pluginPathConfig()],
});
