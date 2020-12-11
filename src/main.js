import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import http from "./api/config"
import "./mock"


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//路由守卫根据token判断用户页面跳转

//判断用户登录状态，未登录跳转到登录界面
router.beforeEach((to, from, next) => {
    store.commit('gettoken');
    let token = store.state.user.token;
    if (!token && to.name !== 'login') {
        next({ name: 'login' })
    } else {
        next()
    }
})
Vue.config.productionTip = false;
//挂载请求axios封装,自己写的
Vue.prototype.$http = http
    //
Vue.use(ElementUI);
new Vue({
    router,
    store,
    render: h => h(App),
    created() {
        store.commit('addmenu', router)
    }
}).$mount("#app");