import './assets/main.less'
import '@arco-design/web-vue/es/notification/style/css.js'
import '@arco-design/web-vue/es/modal/style/css.js'
import '@arco-design/web-vue/es/message/style/css.js'
import { Modal } from '@arco-design/web-vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { isMobile } from './lib/utils'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.provide('app', app)
app.provide('theme', 'green')
app.provide('breadcrumb', false)
app.provide('isMobile', isMobile())
app.config.errorHandler = function (err, vm, info) {
  err && console.error(err)
  return false
}
Modal._context = app._context
router.isReady().then(() => {
  app.mount('#app')
})
