<template>

  <div class='manage'>
    <el-dialog :title="operatetype==='add'?'新增用户':'更新用户'" :visible.sync="isshow">
      <userform inline :formlabel="operformlabel" :form="operform"></userform>
       <div slot="footer" class="dialog-footer">
    <el-button @click="isshows">取 消</el-button>
    <el-button type="primary" @click="confirm">确 定</el-button>
  </div>
    </el-dialog>
<div class="manage-header">
   <el-button type="primary" @click="newuser">+ 新增</el-button>
   <userform inline :formlabel='formlabel' :form='searchform'>
   <el-button type="primary">搜索</el-button></userform></div>
<usertable :tabledata='tabledata' :tablelabel='tablelabel' :config='config' @changes="getlist" @edit="edituser" @del="deluser"></usertable>
  </div>
</template>

<script>
import userform from '../../components/userform'
import usertable from '../../components/usertable'
  export default {
    name:'user',
    data(){
      return{
        ishow:false,
        operatetype:'add',
        searchform:{
          keyword:''
        },
        operform:{
           name: '',
            addr: '',
            age:'',
            birth: '',
            sex: ''
        },
        operformlabel:[
          {
            model:'name',
            label:'姓名'
          },
          {
            model:'age',
            label:'年龄'
          },
          {
            model:'sex',
            label:'性别',
            type:'select',
            opts:[
              {
                label:'男',
                value:1
              },
               {
                label:'女',
                value:0
              },
            ]
          },
          {
            model:'birth',
            label:'出生日期',
            type:'date'
          },
          {
            model:'addr',
            label:'地址'
          },
        ],
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
      edituser(row){

       // console.log(row),点击按钮展示修改对话框
       this.operatetype='edit';
       this.isshow=true
       this.operform=row
      },
      confirm(){
        //点击编辑对话框确定按钮后，将修改表单数据获取后，在更新展示
        if(this.operatetype==='edit'){
          this.$http.post('/user/edit',
            this.operform
          ).then(res=>{
            console.log(res.data)
            this.isshow=false
            this.getlist()
          })
        }
          else if(this.operatetype==='add'){
          this.$http.post('/user/add',
            this.operform
          ).then(res=>{
            console.log(res.data)
            this.isshow=false
            this.getlist()
          })
        }
      },
      //点击编辑对话框的取消按钮
      isshows(){
        this.isshow=false
        this.getlist()
      },
      deluser(row){
         this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let id=row.id
          this.$http.get('/user/del',{
            params:{
                  id
            }
          }).then(res=>{
            console.log(res.data)
            this.$message({
            type: 'success',
            message: '删除成功!'
            
          });
          })
          this.getlist()
          
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });

      },
       newuser(row){

       // console.log(row),点击按钮展示修改对话框
       this.operatetype='add';
       this.isshow=true
       this.operform=row
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