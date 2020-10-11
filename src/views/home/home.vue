<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8">
       <el-card shadow="hover" body-style="height:290px">
      <div class="user">
        <img :src="urlimg">
        <div class="userion">
          <p class="name">NIKC</p>
          <p class="access">超级管理员</p>
        </div>
      </div>
      <div class="login">
        <p>上次登录时间<span>2020-1-9</span></p>
        <p>上次登录地点<span>北京</span></p>
      </div>
    </el-card>
     <el-card shadow="hover" body-style="height:363px" style="margin-top:10px">
    <el-table :data='tableDatas'>
      <el-table-column v-for="(val,key) in tablelabel" :key='key' :prop='key' :label="val"></el-table-column>
    </el-table>
    </el-card>
    </el-col>
     <el-col :span="16">
       <div class="num">
          <el-card shadow="hover" v-for="item in countData" :key="item.name" :body-style="{}">
    <i class="icon" :class="'el-icon-'+item.icon" :style="{background:item.color}"></i>
      <div class="detail">
        <p class="nums">￥ {{item.value}}</p>
      <p class="txt">{{item.name}}</p></div>
    </el-card>
       </div>
       
 <el-card shadow="hover">
 <echar style="height:280px" :chartdata="echartdata.order"></echar>
    </el-card>
    <div class="graph"> <el-card shadow="hover">
     
    </el-card>
     <el-card shadow="hover">
      
    </el-card></div>
     </el-col>
  </el-row>
</template>

<script>
import echar from '../../components/echar'
  export default {
    name:'home',
    components:{
      echar
    },
    data(){
      return{
       urlimg:require('../../assets/imgs/3.png'),
        countData:[
          {
            name:'字符订单',
            value:1234,
            icon:'zoom-out',
            color:'#2ec7c9'
          },
           {
            name:'字符订单',
            value:1456,
            icon:'question',
            color:'#2ec7c9'
          },
           {
            name:'字符订单',
            value:2876,
            icon:'picture-outline-round',
            color:'#2ec7c9'
          },
           {
            name:'字符订单',
            value:376,
            icon:'s-cooperation',
            color:'#2ec7c9'
          },
           {
            name:'字符订单',
            value:3398,
            icon:'star-off',
            color:'#ffb980'
          },
           {
            name:'字符订单',
            value:3763,
            icon:'eleme',
            color:'#5ablef'
          },
        ],

        tableData:[],
        tablelabel:{
          name:'课程',
          todaybuy:'今日购买',
          mouthbuy:'本月购买',
          totslbuy:'总购买'
        },
        //请求的数据无法请求到只能写死
         tableDatas: [{
          
          name: '王小虎',
          todaybuy:'7654',
          mouthbuy:'9765',
          totslbuy:'1234'
         
        }, {
         
         name: '王小虎',
          todaybuy:'7654',
          mouthbuy:'9765',
          totslbuy:'1234'
          
        }, {
          
          name: '王小虎',
          todaybuy:'7654',
          mouthbuy:'9765',
          totslbuy:'1234'
        
        }, {
          
          name: '王小虎',
          todaybuy:'7654',
          mouthbuy:'9765',
          totslbuy:'1234'
         
        }],
        //图表中数据的定义
        echartdata:{
          //三个图表
          order:{
            xData:['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            series:[{
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {},
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }]
          },
          user:{xData:[],
            series:[]},
          video:{xData:[],
            series:[]}
        }
      }
    },
    //在钩子函数中通过axios请求模拟数据
    mounted(){
     
    },
    created(){this.gettabledata()},
    methods:{
      //请求mock中的模拟数据无法请求到
      gettabledata(){
         this.$http('/home/getData').then(res=>{
           res=res.data
           //左侧下边，购买量数据
           this.tableData=res.data.tableData
           //订单折线图数据
          /* const order=res.data.orderData
           this.echartdata.order.xData=order.date
           //取出series中name部分键值
           let keyarray=Object.keys(order.data[0])
           keyarray.forEach(key=>{
             this.echartdata.order.series.push({
               name:key,
               data:order.data.map(item=>item[key]),
               type:'line',

             })
           })*/
        console.log(res.data)
      })
      }
    }
  }
</script>

<style>
.home{
cursor: pointer;

}
/**右侧最上边 */
.home .num{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.home .num .el-card{
  width: 238px;
  height: 80px;
  font-size: 12px;
  margin-bottom: 10px;
  
}
.home .num .el-card__body{
  display: flex;
  padding:0px;
}
.home .num .el-card .icon{
  font-size: 30px;
  height: 80px;
  width: 80px;
  text-align: center;
  line-height: 80px;

}

.home .num .el-card .detail{
  margin-left: 50px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  text-align: center;
  
}

.home .num .el-card .detail .nums{
  font-size: 16px;
 
}
.home .num .el-card .detail .txt{
  font-size: 10px;
  color:#666
}
/**右侧中间 */

.home .graph{
   display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

}
.home .graph .el-card{
  width: 355px;
  height: 230px;
  margin-top: 10px;
}
/**左侧样式 */
.home .user{
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
  width: 100%;
  border-bottom: 1px solid #999999;
}
.home .user img{
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 40px;
}
.home .user .userion .name{
  font-size: 32px;
  margin-bottom:10px

}
.home .user .userion .access{
  color: #999;

}
.home .login p{
  line-height: 20px;
  font-size: 15px;
  color: #999999;

}
.home .login p span{
  color: #666;
  margin-left: 120px;
  font-size: 12px;
}

</style>