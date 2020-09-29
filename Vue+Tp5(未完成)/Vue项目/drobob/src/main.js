import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "u-reset.css";
import filter from "./filter";
import axios from 'axios';



Vue.use(ElementUI);

Vue.prototype.$http=axios;

Vue.filter('capitalize',filter['capitalize']);


Object.keys(filter).forEach(ele=>{
    Vue.filter(ele,filter[ele]);
})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
