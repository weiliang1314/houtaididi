import cookie from 'js-cookie'
export default {
    state: {
        token: ''
    },
    mutations: {
        settoken(state, val) {
            state.token = val;
            cookie.set('token', val)
        },
        cleartoken(state) {
            state.token = '',
                cookie.remove('token')
        },
        gettoken(state) {
            state.token = cookie.get('token')
        }
    },
    actions: {}
}