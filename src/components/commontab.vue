<template>
  <div class="tabs">
<el-tag
  :key="tag.name"
  v-for="tag in tags"
  :closable="tag.name!=='home'"
  :disable-transitions="false"
  @close="handleClose(tag)" @click="change(tag)"
  :effect="$route.name===tag.name?'dark':'plain'">
  {{tag.label}}
</el-tag>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
  export default {
    name:"commontab",
     data() {
      return {
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
      handleClose(tag) {
        this.close(tag);
      },
...mapMutations({
  close:'closetab'
}),

     change(item){
        this.$router.push({name:item.name})
        this.$store.commit('selectmenu',item)
     } 

    },
    computed:{
...mapState({
  tags:state=>state.tab.tablist
})
    }
  }
</script>

<style  scoped>
.tabs{
  padding: 20px;

}
.tabs>.el-tag{
  margin-right:15px ;
  cursor: pointer;
}
</style>