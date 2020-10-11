module.exports = {
    //本地服务器启动配置
    devServer: {
        port: 8080,
        open: true,
        overlay: {
            warning: false,
            errors: false,
        }

    },
    //预处理器配置,(有问题)
    /*css: {
        loaderOptions: {
            sass: {
                data: '@import "@/assets/scss/_variable.scss";'
            }
        }
    }*/
}