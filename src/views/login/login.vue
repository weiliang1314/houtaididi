<template>
<div style="padding:20px;margin:auto 370px"><el-form :model="Form" label-width="120px" class="demo-ruleForm" style="width:380px">
  <el-form-item label="用户名" prop="pass">
    <el-input  v-model="Form.name" ></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="checkPass">
    <el-input type="password" v-model="Form.Pass" ></el-input>
  </el-form-item>
  
  <el-form-item align="center">
    <el-button type="primary" @click="login">登录</el-button>
   
  </el-form-item>
</el-form></div>
  
</template>

<script>
  export default {
    name:'login',
    data(){
      return{
        Form:{
          name:'',
          pass:''
        }
      }
    },
    methods:{
      login(){
        this.$http.post('',this.form).then(res=>{
          res=res.data
        })
      }
    }
  }
</script>

<style  scoped>

</style>