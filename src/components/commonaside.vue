<template>
  <div>
 <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="iscollages">
      
      <el-menu-item :index="item.path" v-for="item in nochildren" :key="item.path" @click="clickmenu(item)" >
        <i :class="'el-icon-'+item.icon" ></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>
     <el-submenu index="1" v-for="(item,index) in haschildren" :key="index">
        <template slot="title">
          <i class="el-icon-s-comment"></i>
          <span>{{item.label}}</span>
        </template>
        <el-menu-item-group>
         
          <el-menu-item index="sunitem.path" v-for="sunitem in item.children" :key="sunitem.path" @click="clickmenu(sunitem)">{{sunitem.label}}</el-menu-item>
         
        </el-menu-item-group>
        
       
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name:'commonaside',
    data(){
      return{
        asidemenu:[
          {
            path:'/',
            name:'home',
            label:'首页',
            icon:'s-home'
          },
           {
            path:'/video',
            name:'videos',
            label:'图片管理',
            icon:'video-play'
          },
           {
            path:'/user',
            name:'user',
            label:'用户管理',
            icon:'user'
          },
           {
           
            label:'其他',
            icon:'s-comment',
            children:[
              {
                path:'/pagone',
                name:'pag1',
                label:'页面1',
                icon:'eleme'
              },
              {
                path:'/pagteo',
                name:'pag2',
                label:'页面2',
                icon:'-star-off'
              }
            ]
          },
          
        ]
      }
    },
    computed:{
      nochildren(){
        return this.asidemenu.filter(item=>!item.children);

      },
      haschildren(){
        return this.asidemenu.filter(item=>item.children);
      },
      //收回侧边栏的文字菜单，获取vuex中布尔值，执行ui组件中的自定义事件（目前不起作用）
      iscollages(){
        return this.$store.state.tab.iscollage
      }
    },
    methods:{
      clickmenu(item){
        this.$store.commit('selectmenu',item)
        this.$router.push({name:item.name})
      }
    }
  }
</script>

<style scoped>
.el-menu-vertical-demo{
  height: 900px;
  border: none;
}

</style>