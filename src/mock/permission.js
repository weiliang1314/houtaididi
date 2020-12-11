import Mock from 'mockjs'
export default {
    getMenu: config => {
        const { name, pass } = JSON.parse(config.body);
        console.log(JSON.parse(config.body));
        // 先判断用户是否存在 
        if (name === 'admin' || name === 'wp') {
            // 判断账号和密码是否对应
            if (name === 'admin' && pass === '123456') {
                return {
                    code: 20000,
                    data: {
                        menu: [{
                                path: '/',
                                name: 'home',
                                label: '首页',
                                icon: 's-home',
                                url: 'home/home'
                            },
                            {
                                path: '/video',
                                name: 'videos',
                                label: '图片管理',
                                icon: 'video-play',
                                url: 'video/videos'
                            },
                            {
                                path: '/user',
                                name: 'user',
                                label: '用户管理',
                                icon: 'user',
                                url: 'user/user'
                            },
                            /* {
                                 label: '其他',
                                 icon: 's-comment',
                                 children: [{
                                         path: '/pageone',
                                         name: 'page1',
                                         label: '页面1',
                                         icon: 'eleme',
                                         url: 'other/pageone'
                                     },
                                     {
                                         path: '/pagetwo',
                                         name: 'page2',
                                         label: '页面2',
                                         icon: '-star-off',
                                         url: 'other/pagetwo'
                                     }
                                 ]
                             }*/
                        ],
                        token: Mock.Random.guid(),
                        message: '获取成功'
                    }
                }
            } else if (name === 'wp' && pass === '123456') {
                return {
                    code: 20000,
                    data: {
                        menu: [{
                            path: '/',
                            name: 'home',
                            label: '首页',
                            icon: 's-home',
                            url: 'home/home'
                        }, {
                            path: '/video',
                            name: 'videos',
                            label: '图片管理',
                            icon: 'video-play',
                            url: 'video/videos'
                        }],
                        token: Mock.Random.guid(),
                        message: '获取成功'
                    }
                }
            } else {
                return {
                    code: -999,
                    data: { message: '密码错误' }
                }
            }
        } else {
            return {
                code: -999,
                data: { message: '用户不存在' }
            }
        }
    }
}