import Vue from 'vue'
import VueGtag from 'vue-gtag'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

const isProduction = (process.env.NODE_ENV === 'production')

Vue.use(VueGtag, {
  config: { id: 'UA-58585432-2' },
  disableScriptLoad: !isProduction,
}, router)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
