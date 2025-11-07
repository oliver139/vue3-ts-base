import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import { VueUseComponentsResolver, VueUseDirectiveResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

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
    vueDevTools(),
    AutoImport({
      dts: true,
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        { '@vueuse/core': ['promiseTimout'] },
        'pinia',
        'vue-i18n',
        { '@/i18n': ['$t', '$d', '$n', '$locale', '_changeLang'] },
        { 'primevue/usedialog': ['useDialog'] },
        { 'primevue/usetoast': ['useToast'] },
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
    }),
    Components({
      dts: true,
      version: 3,
      dirs: [
        'src/components',
        'src/layouts',
        'src/views',
      ],
      resolvers: [
        VueUseComponentsResolver(),
        VueUseDirectiveResolver(),
        PrimeVueResolver(),
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
    }),
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
}))
