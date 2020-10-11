<template>
  <div style="height:100%" ref='echart'>

  </div>
</template>

<script>
import echarts from 'echarts'
  export default {
    name:'echar',
    props:{
      chartdata:{
        type:Object,
        default(){
          return{
            //x轴坐标数据
            xData:[],
            //柱状图数据
            series:[]
          }
        }
      },
      isaxiscgart:{
        type:Boolean,
        default:true
      }
    },
    computed: {
      //判断传人的参数是否有坐标轴
     options() {
        return this.isaxiscgart?this.axisoption:this.normaloption
      }
    },
    //监听传进来的数据
    watch:{
      chartdata:{
      handler:function(){
        this.initchart()
      },
      deep:true}
    },
    data(){
      return{
        echart:null,
        //有坐标轴的图表
        axisoption:{  xAxis: [
        {
            type: 'category',
            data: []
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        
    ]},
        //无坐标轴的图表
        normaloption:{
           series:[]
        }
      }
    },
    methods: {
     initchart() {
       this.initchartdata()
       if(this.echart){
         //使用刚指定的配置项和数据显示图表。
         this.echart.setOption(this.options)
       }else{
         //初始化图表
         this.echart=echarts.init(this.$refs.echart);
         this.echart.setOption(this.options)
       }
        
      },
      //如果是坐标轴图表该如何
      initchartdata(){
        if(this.axisoption){
        this.axisoption.xAxis.data=this.chartdata.xData
        this.axisoption.series=this.chartdata.series
        }else{
          console.log("non")
        }
      }

    },
  }
</script>

<style lang="scss" scoped>

</style>