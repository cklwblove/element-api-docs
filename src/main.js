import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import ElementApiDocs from '@/components'

Vue.use(ElementUI)
  .use(ElementApiDocs)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
