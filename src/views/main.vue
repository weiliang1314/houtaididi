<template>
  <div>
<el-container style="height:100%">
  <el-aside width="auto"><commonaside/></el-aside>
  <el-container>
    <el-header><commonheader/></el-header>
    <commontab/>
    <el-main><router-view/></el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
import commonaside from '../components/commonaside'
import commonheader from '../components/commonheader'
import commontab from '../components/commontab'
  export default {
    name:'mains',
    components:{
      commonaside,
      commonheader,
      commontab
    }
  }
</script>

<style  scoped>
.el-header{
  background-color: black;
}

</style>