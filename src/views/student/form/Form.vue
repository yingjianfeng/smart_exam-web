<template>
  <el-container>
    <el-header>
      <HeaderView></HeaderView>
    </el-header>
    <el-main class="main">
        <Carousel></Carousel>
        <FormView></FormView>
    </el-main>
    <el-footer class="footer">
      <FooterView/>
    </el-footer>
  </el-container>
</template>

<script>
  import FormView from '@/views/student/form/childComps/FormView'
  import Carousel from '@/views/student/form/childComps/Carousel'
  import HeaderView from '@/views/student/form/childComps/HeaderView'
  import FooterView from '@/views/student/form/childComps/FooterView'
  
  export default {
    name: "Login",
    components: {
      FormView,
      Carousel,
      HeaderView,
      FooterView
    }
  }
</script>

<style scoped>
  .el-header, .el-footer {
    /*background-color: #e6e8db;*/
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .main {
    position: fixed;
    top: 60px;
    width: 100%;
    height: 85%;
    /*background: #92a19a;*/
  }
  
  .footer {
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 100%;
    background: #c5d5e2;
  }
  
  /*.el-main {*/
  /*background-color: #E9EEF3;*/
  /*color: #333;*/
  /*text-align: center;*/
  /*line-height: 160px;*/
  /*}*/


</style>