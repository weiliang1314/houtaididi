<template>
  <div class='manage'>
<div class="manage-header">
   <el-button type="primary">+ 新增</el-button>
   <userform inline :formlabel='formlabel' :form='searchform'>
   <el-button type="primary">搜索</el-button></userform></div>
<usertable :tabledata='tabledata' :tablelabel='tablelabel' :config='config' @changes="getlist"></usertable>
  </div>
</template>

<script>
import userform from '../../components/userform'
import usertable from '../../components/usertable'
  export default {
    name:'user',
    data(){
      return{
        searchform:{
          keyword:''
        },
        formlabel:[
          {
            model:'keyword',
            label:'',
          },
        ],
        tabledata:[
        ],
        tablelabel:[
          {
						prop: 'name',
						label: '姓名',
					},
					{
						prop: 'addr',
						label: '地址',
						width: '200'
					},
					{
						prop: 'age',
						label: '年龄',
					},
					{
						prop: 'birth',
            label: '出生年月',
            width:'200'
					},
					{
            prop: 'sex',
           
            label: '性别',
           
					},

        ],
        //表格的分页参数定义
        config:{
          page:1,
          total:30,
          loading:false
        }
      }
    },
    components:{
      userform,
      usertable
    },
    methods:{
      //用户页数据请求，mock数据没有只是方法
      getlist(val){
        this.config.loading=true
        this.$http.get('/user/getUser',{
          params:{
            page:this.config.page
          }
        }).then(res=>{
          this.tabledata=res.data.list.map(
            item=>{
              //根据返回的是否为0返回性别的处理
              item.sexLabel=item.sex===0?'女':'男'
              return item
            }
          )
          this.config.total=res.data.count
          this.config.loading=false
        })
        
      },
      
     
    },
    //在生命周期函数中调用数据
   created(){this.getlist()}
  }
</script>

<style  scoped>
.manage{
  height: 90%;
  padding-bottom: 20px;
  overflow: hidden;

}
.manage .manage-header{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
</style>