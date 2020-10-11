import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import http from "./api/config"
import "./mock"


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
//挂载请求axios封装,自己写的
Vue.prototype.$http = http
    //
Vue.use(ElementUI);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");