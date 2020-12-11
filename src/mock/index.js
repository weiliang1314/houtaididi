import Mock from "mockjs"
import homeapi from './home.js'
import userApi from './user.js'
import permissionApi from './permission.js'
//设置延时
Mock.setup({
    timeout: '200-2000'

})





//首页相关 /home/getData
Mock.mock(/\/home\/getData/, 'get', homeapi.getHomeTableData)

// 用户相关 /user/....
Mock.mock(/\/user\/getUser/, 'get', userApi.getUserList)
Mock.mock(/\/user\/del/, 'get', userApi.deleteUser)
Mock.mock(/\/user\/batchremove/, 'get', userApi.batchremove)
Mock.mock(/\/user\/add/, 'post', userApi.createUser)
Mock.mock(/\/user\/edit/, 'post', userApi.updateUser)
    //权限相关
Mock.mock(/\/permission\/getMenu/, 'post', permissionApi.getMenu)