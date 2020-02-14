import Vue from 'vue'
import VueGtag from 'vue-gtag'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueGtag, {
  config: { id: 'G-J4XWH9N49Z' },
}, router)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
