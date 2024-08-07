import { defineConfig, loadEnv } from "vite";
import Vue from "@vitejs/plugin-vue";
import Pages from "unplugin-vue-router/vite";
import path from "node:path";
import Layouts from "vite-plugin-vue-layouts";
import deadcodePlugins from "vite-plugin-deadcode";

const config = ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [
      Vue(),
      Pages(),
      Layouts(),
      deadcodePlugins({
        inputDir: "src", // serarch path, default: src
        outDir: "dist", // the path where deadcode output, default: dist
      }),
    ],

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    base: process.env.VITE_ROCK_FRONTEND_BASE_URL,
    server: {
      port: process.env.VITE_ROCK_FRONTEND_PORT,
      publicDir: process.env.VITE_ROCK_FRONTEND_BASE_URL,
    },
  });
};

export default config;
