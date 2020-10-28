import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuescroll from 'vuescroll';
import QrcodeVue from 'qrcode.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(vuescroll);
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

new Vue({
  el: '#root',
  data: {
    value: 'https://example.com',
  },
  template: '<qrcode-vue :value="value"></qrcode-vue>',
  components: {
    QrcodeVue,
  },
})