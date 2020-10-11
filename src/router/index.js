import Vue from "vue";
import Router from "vue-router";


Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        redirect: '/home',
        component: () =>
            import ('../views/main.vue'),
        children: [{
                path: '/home',
                name: 'home',
                component: () =>
                    import ('../views/home/home.vue')
            },
            {
                path: '/video',
                name: 'videos',
                component: () =>
                    import ('../views/video/videos.vue')
            },
            {
                path: '/user',
                name: 'user',
                component: () =>
                    import ('../views/user/user.vue')
            },
            {
                path: '/pagone',
                name: 'pag1',
                component: () =>
                    import ('../views/other/pagone.vue')
            },
            {
                path: '/pagteo',
                name: 'pag2',
                component: () =>
                    import ('../views/other/pagteo.vue')
            },
        ]
    }, ]
});