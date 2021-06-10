
import Vue from 'vue'
import App from './App.vue'
import './plugins';//  gọi đến file index.js

new Vue({
  render: h => h(App),
}).$mount('#app')
