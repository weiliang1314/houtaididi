<template>
  
    <header>
    <div class="l-content"><el-button type="primary" icon="el-icon-menu" @click="collapses"></el-button>
    <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item v-if="current">
   <router-link :to='current.path'>{{current.label}}</router-link>
    </el-breadcrumb-item>
  
</el-breadcrumb></div>
    <div class="r-content">
      <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <img :src='userimg' class="user">
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="">个人中心</el-dropdown-item>
        <el-dropdown-item icon="">退出</el-dropdown-item>
        
      </el-dropdown-menu>
    </el-dropdown>
    </div>
    </header>

 
</template>

<script>
import {mapState} from 'vuex'
  export default {
    name:'commonheader',
    data(){
      return{
        userimg:require('../assets/imgs/1.png')
      }
    },
    computed:{
      ...mapState({
        current:state=>state.tab.currents
      })
    },
    methods:{
      //点击按钮，执行vuex中的事件，收回侧边栏中的文字菜单（不起作用）
      collapses(){
        this.$store.commit('collapse')
      }
    }
  }
</script>

<style scoped>
header{
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}
.r-content>.user{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.l-content{
  display: flex;
  align-items: center;
 
}
.l-content>.el-button{
margin-right:20px ;
}
</style>
<style>
.el-breadcrumb__inner a, .el-breadcrumb__inner.is-link{
  color: #fff;
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner, .el-breadcrumb__item:last-child .el-breadcrumb__inner a, .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover, .el-breadcrumb__item:last-child .el-breadcrumb__inner{
  color: #fff;
}

</style>