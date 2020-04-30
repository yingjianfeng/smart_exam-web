<template>
  <div class="block">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in img" >
        <img :src="item"></img>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: "Carousel",
    data() {
      return {
        img: [
          'https://cdn.pixabay.com/photo/2019/05/14/21/50/storytelling-4203628_1280.jpg',
          'https://cdn.pixabay.com/photo/2015/06/02/12/59/narrative-794978_1280.jpg',
          'https://cdn.pixabay.com/photo/2017/08/07/15/18/boy-2604853_1280.jpg',
        ]
      }
    }
  }
</script>

<style scoped>
  .el-carousel{
    height: 40%;
    width: 60%;
    float: left;
    margin-top: 50px;
    margin-left: 20px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  /*.el-carousel__item:nth-child(2n) {*/
    /*background-color: #99a9bf;*/
  /*}*/
  
  /*.el-carousel__item:nth-child(2n+1) {*/
    /*background-color: #d3dce6;*/
  /*}*/
</style>