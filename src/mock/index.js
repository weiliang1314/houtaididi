import Mock from "mockjs"
import homeapi from './home'
//设置延时
Mock.setup({
        timeout: '200-2000'

    })
    //首页数据相关
Mock.mock(/\/home\/getData/, 'get', homeapi.getHomeData)