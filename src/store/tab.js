export default {
    state: {
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

        }
    },
    actions: {}
}