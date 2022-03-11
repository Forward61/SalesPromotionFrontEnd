import Vue from 'vue'
// import 'axios'
// import 'vue-cli-plugin-axios'
// import  axios  from 'axios';
// import   axios  from "axios";

import App from './App.vue'
import router from './router'
import store from './store'
import qs from 'qs';
import 'element'
import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css


import axios from 'axios';
// import vueAxios from 'vue-cli-plugin-axios';

// Vue.use(vueAxios, axios); //通过 vue-axios 将axios 注入Vue对象
Vue.use(ElementUI) //使用elementUI
Vue.config.productionTip = false
Vue.prototype.$qs = qs;
// Vue.use(axios)
Vue.prototype.axios1 = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
