import Cookie from 'js-cookie'
export default {
    state: {
        currentmenu: null,
        menu: [],
        currents: null,
        tablist: [{
            path: '/',
            name: 'home',
            label: '首页',
            icon: 's-home',

        }, ],
        iscollapse: false
    },
    mutations: {
        //点击不同的侧边栏，添加不同的标签
        selectmenu(state, val) {
            if (val.name !== 'home') {
                state.currents = val
                    //返回符合函数条件的数组中索引的位置
                let result = state.tablist.findIndex(item => item.name === val.name)
                result === -1 ? state.tablist.push(val) : ''
            } else {
                state.currents = null
            }

        },
        closetab(state, val) {
            //删除标签，点击
            let result = state.tablist.findIndex((item => item.name === val.name))
            state.tablist.splice(result, 1)

        },
        collapse(state) {
            state.iscollapse = !state.iscollapse

        },
        setmenu(state, val) { //权限判断菜单设置
            state.menu = val;
            Cookie.set('menu', JSON.stringify(val));
        },
        clearmenu(state) { //退出登录时清除cookie
            state.menu = [];
            Cookie.remove('menu');
        },
        addmenu(state, router) {
            if (!Cookie.get('menu')) {
                return;
            }
            let menu = JSON.parse(Cookie.get('menu'));
            state.menu = menu;
            let currentmenu = [{
                path: '/',
                component: () =>
                    import ('../views/main'),
                children: []
            }];
            menu.forEach(item => { //动态路由子路由获取
                if (item.children) {
                    item.children = item.children.map(item => {
                        item.component = () =>
                            import ('../views/' + item.path)
                    });
                    currentmenu[0].children.push(...item.children);
                    console.log(currentmenu[0].children)
                } else {
                    item.component = () =>
                        import ('../views/' + item.url);
                    currentmenu[0].children.push(item)
                }

            });
            router.addRoutes(currentmenu) //添加动态路由
            console.log(currentmenu)
        }
    },
    actions: {}
}