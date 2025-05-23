import './assets/main.less'
import '@arco-design/web-vue/es/notification/style/css.js'
import '@arco-design/web-vue/es/modal/style/css.js'
import '@arco-design/web-vue/es/message/style/css.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router/admin'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.provide('app', app)
app.provide('theme', 'blue')
app.provide('breadcrumb', true)
router.isReady().then(() => {
  app.mount('#app')
})
