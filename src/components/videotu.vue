<template>
  <div class="demo-image__preview">
  <el-image 
    style="width: 300px; height: 300px"
    :src="url" 
    :preview-src-list="srcList">
  </el-image>
</div>


</template>

<script>
  export default {
    name:'videotu',
    props:{
      urls:{
      type:Array
      },
      srclists:{
        type:Array
      }
    },
     data() {
      return {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        srcList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
          'http://f.hiphotos.baidu.com/zhidao/pic/item/5ab5c9ea15ce36d348f80f7d39f33a87e850b1fb.jpg'
        ]
      }
    }
  }
</script>

<style  scoped>

</style>