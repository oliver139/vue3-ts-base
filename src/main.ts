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

// #region : PrimeVue
import PrimeVue from 'primevue/config'
import DialogService from 'primevue/dialogservice'
import ToastService from 'primevue/toastservice'
import PrimeConfig from './config/prime'
// #endregion

// #region : CSS
import '@/assets/css/tailwind.css'
import '@/assets/css/variable.css'
import '@/assets/css/transition.css'
//  #endregion

const app = createApp(App)

// Vue Plugins
app
  .use(createPinia())
  .use(router)
  .use(i18n)
  .use(PrimeVue, PrimeConfig)
  .use(DialogService)
  .use(ToastService)

// Global Component
app.component('Icon', Icon)

// Mount it
app.mount('#app')
