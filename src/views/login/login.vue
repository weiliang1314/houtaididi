<template>
<div class="login"><el-form :model="Form" label-width="80px" class="demo-ruleForm" style="">
  <el-form-item label="用户名" prop="pass">
    <el-input  v-model="Form.name" ></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="checkPass">
    <el-input type="password" v-model="Form.pass" ></el-input>
  </el-form-item>
  
  <el-form-item align="center">
    <el-button type="primary" @click="login" style="width:270px">登录</el-button>
   
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
        this.$http.post('/permission/getMenu',this.Form).then(res=>{
          res=res.data;
          if(res.code==20000){
            this.$store.commit('clearmenu')//防止二次登录
            this.$store.commit('setmenu',res.data.menu)
            this.$store.commit('settoken',res.data.token)
            this.$store.commit('addmenu',this.$router)
            this.$router.push({name:'home'})
          }else{
            this.$message.warning(res.data.message)
          }

        })
      }
    }
  }
</script>

<style  scoped>
.login{
  position: absolute;
  width:400px;
  height: 250px;
   box-shadow: 0 18px 30px rgba(0, 0, 0, 0.18);
   margin:auto;
   left:0;
   right:0;
   top:0;
   bottom:0;
   border-radius: 8px;

}
.demo-ruleForm{
  width:360px;
 margin-top: 30px;
}

</style>