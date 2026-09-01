import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
import router from './router'

// #region : Pinia
import { createPinia } from 'pinia'
// #endregion

// #region : Iconify
import { Icon } from '@iconify/vue'
import './utils/icon'
// #endregion

// #region : Tailwind CSS
import '@/assets/css/main.css'
//  #endregion

// #region : Nuxt UI
import NuxtUi from '@nuxt/ui/vue-plugin'
// #endregion

const app = createApp(App)

// Vue Plugins
app
  .use(createPinia())
  .use(router)
  .use(NuxtUi)
  .use(i18n)

// Global Component
app.component('Icon', Icon)

// Mount it
app.mount('#app')
