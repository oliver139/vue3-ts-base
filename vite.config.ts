import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";

import AutoImport from "unplugin-auto-import/vite";
import { VueUseComponentsResolver, VueUseDirectiveResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";

import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
      },
    },
  },
  plugins: [
    vue(),
    vueDevTools(),
    AutoImport({
      dts: true,
      imports: [
        "vue",
        "vue-router",
        "@vueuse/core",
        "pinia",
        { "@vueuse/core": ["promiseTimout"] },
        "vue-i18n",
        { "@raffaelesgarro/vue-use-sound": ["useSound"] },
        { "@/i18n": ["$t", "$d", "$n", "$locale", "_changeLang"] },
        {
          from: "vue-router",
          imports: ["RouteLocationRaw"],
          type: true,
        },
      ],
      dirs: [
        "src/stores/**",
      ],
      vueTemplate: true,
    }),
    Components({
      dts: true,
      version: 3,
      dirs: [
        "src/components",
        "src/views",
      ],
      resolvers: [
        VueUseComponentsResolver(),
        VueUseDirectiveResolver(),
      ],
      types: [
        {
          from: "vue-router",
          names: ["RouterLink", "RouterView"],
        },
        {
          from: "@iconify/vue",
          names: ["Icon"],
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  esbuild: {
    drop: mode === "production" ? ["debugger"] : [],
    pure: mode === "production" ? ["console.log", "console.debug"] : [],
  },
}));
