import { fileURLToPath, URL } from 'node:url'

import { VueUseComponentsResolver, VueUseDirectiveResolver } from 'unplugin-vue-components/resolvers'

import nuxtUi from '@nuxt/ui/vite'
import tailwindcss from '@tailwindcss/vite'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Suppress warning
          isCustomElement: tag => ['search', 'output'].includes(tag),
        },
      },
    }),
    tailwindcss(),
    nuxtUi({
      autoImport: {
        dts: true,
        imports: [
          'vue',
          'vue-router',
          '@vueuse/core',
          { '@vueuse/core': ['promiseTimeout'] },
          { '@vueuse/router': ['useRouteHash', 'useRouteParams', 'useRouteQuery'] },
          'pinia',
          'vue-i18n',
          { '@/i18n': ['$t', '$te', '$tm', '$d', '$n', '$locale', 'changeSiteLang'] },
          {
            from: 'vue-router',
            imports: ['RouteLocationRaw'],
            type: true,
          },
        // { valibot: [['*', 'v']] },
        // {
        //   from: 'valibot',
        //   imports: ['InferInput'],
        //   type: true,
        // },
        ],
        dirs: [
          'src/stores/**',
          'src/utils/**',
          'src/types/**',
        ],
        vueTemplate: true,
      },
      components: {
        dts: true,
        dirs: [
          'src/components',
          'src/layouts',
          'src/views',
        ],
        resolvers: [
          VueUseComponentsResolver(),
          VueUseDirectiveResolver(),
        ],
        types: [
          {
            from: 'vue-router',
            names: ['RouterLink', 'RouterView'],
          },
          {
            from: '@iconify/vue',
            names: ['Icon'],
          },
        ],
      },
    }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  esbuild: {
    drop: mode === 'production' ? ['debugger'] : [],
    pure: mode === 'production' ? ['console.log', 'console.debug'] : [],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (!id.includes('node_modules')) return
          if (id.includes('vue') || id.includes('vue-router') || id.includes('pinia') || id.includes('vue-i18n')) return 'vendor-vue'
          return 'vendor'
        },
      },
      // external: [
      //   // Things to exclude from the bundle
      // ],
    },
  },
}))
