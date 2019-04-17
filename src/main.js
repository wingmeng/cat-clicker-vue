import Vue from 'vue'
import App from './App.vue'

require('./index.css');  // 样式文件

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#root')
