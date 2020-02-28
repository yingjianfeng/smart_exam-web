<template>
  <el-container>
    <el-header>
      <FormView></FormView>
    </el-header>
    <el-main>Main</el-main>
  </el-container>
</template>

<script>
  import FormView from '@/views/student/index/childComps/header/Header'
  
  export default {
    name: "Index",
    components: {
      FormView
    }
  }
</script>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    display: flex;
    align-items: center;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>