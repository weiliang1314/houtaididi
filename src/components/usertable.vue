<template>
  <div class='user-table'>
 <el-table
 height="90%"
 stripe
 :data='tabledata'
 v-loading="config.loading"><!--加载状态的显示，加载时圆圈转动-->
    <el-table-column
      label="序号"
      width="85">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{(config.page-1)*20+scope.$index+1}}</span>
      </template>
    </el-table-column>
      <el-table-column show-overflow-tooltip stripe v-for='item in tablelabel' :key='item.prop' :label='item.label' :prop='item.prop' :width="item.width?item.width:120">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{scope.row[item.prop]}}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit( scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.row)">删除</el-button>
      </template>
    </el-table-column>
    
  </el-table>
  <!--表格信息分页操作，点击分页-->
  <el-pagination  v-if='config' layout="prev,pager,next" :total="config.total" :current-page.sync="config.page" @current-change="changes"></el-pagination>
  </div>
</template>

<script>
  export default {
    name:'usertable',
    props: {
       tabledata: {
        type: Array,

      
      },
       tablelabel: {
        type: Array,
      
      },
      config:{
        type:Object
      }
    },
    methods:{
      handleEdit(){

      },
      handleDelete(){}

    },
    changes(page){
      this.$emit('changes',page)
    }
  }
</script>

<style  scoped>
.user-table{
  height: 280px;
  background-color: #fff;
  position: relative;

}
.el-pagination{
  position: absolute;
  bottom: -5px;
  right: 20px;
  
}
</style>