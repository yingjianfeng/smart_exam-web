<template>
  <el-container>
    <el-header>
      <HeaderView></HeaderView>
    </el-header>
    <el-main>
      <MainView></MainView>
    </el-main>
  </el-container>
</template>

<script>
  import HeaderView from '@/views/student/index/childComps/header/Header'
  import MainView from '@/views/student/index/childComps/main/Main'
  export default {
    name: "Index",
    components: {
      HeaderView,
      MainView
    }
  }
</script>

<style scoped>
  .el-header {
    /*background-color: #B3C0D1;*/
    display: flex;
    align-items: center;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    width: 1000px;
    margin: 0 auto;
  }
</style>