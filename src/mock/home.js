import Mock from 'mockjs'
let List = []
export default {

    getStatisticalData: () => {
        for (let i = 0; i < 7; i++) {
            List.push(
                Nock.mock({
                    vue: Mock.Random.float(100, 8000, 0, 2),
                    wechat: Mock.Random.float(100, 8000, 0, 2),
                    ES6: Mock.Random.float(100, 8000, 0, 2),
                    Redis: Mock.Random.float(100, 8000, 0, 2),
                    React: Mock.Random.float(100, 8000, 0, 2),
                    springboot: Mock.Random.float(100, 8000, 0, 2),
                })
            )
        }
    },
    //定义请求的模拟数据
    getHomeData: () => {
        return {
            code: 2000,
            data: {
                videodata: [{
                        name: 'springboot',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    },
                    {
                        name: 'sping',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    },
                    {
                        name: 'spring',
                        value: Mock.Random.float(1000, 10000, 0, 2)
                    },
                ]
            }

        }
    }
}