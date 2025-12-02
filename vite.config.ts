import { fileURLToPath, URL } from 'node:url'

import { PrimeVueResolver } from '@primevue/auto-import-resolver'
import { VueUseComponentsResolver, VueUseDirectiveResolver } from 'unplugin-vue-components/resolvers'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

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
    vueDevTools(),
    AutoImport({
      dts: true,
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        { '@vueuse/core': ['promiseTimeout'] },
        'pinia',
        'vue-i18n',
        { '@/i18n': ['$t', '$te', '$tm', '$d', '$n', '$locale', 'changeSiteLang'] },
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
        // PrimeVueResolver({
        //   directives: { prefix: 'P' },
        // }),
        // FloatingVueResolver(),
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
        {
          from: '@primevue/forms',
          names: ['Form'],
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
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (!id.includes('node_modules')) return
          if (id.includes('primevue') || id.includes('primeuix')) return 'primevue'
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
