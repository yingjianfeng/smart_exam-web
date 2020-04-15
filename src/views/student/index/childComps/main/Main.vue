<template>
  <div id="app">
    <el-row>
      <router-link to='/index/dynamic'>
        <el-button type="primary" plain>动 态</el-button>
      </router-link>
      <router-link to="/index/tesk">
        <el-button type="primary" plain>学习任务</el-button>
      </router-link>
      <router-link to="/index/history">
        <el-button type="primary" plain>答题记录</el-button>
      </router-link>
      <el-divider class="line"></el-divider>
    </el-row>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Main",
    data() {
      return {
        dynamic: '/index/dynamic',
        tesk: '/index/tesk'
      }
    }
    
  }
</script>

<style scoped>
  .el-tabs {
    height: 60px;
  }
  
  .el-button {
    border-radius: 0;
  }
  
  .line {
    height: 3px;
    width: 100%;
    margin: 0;
    background: #409EFF;
  }
</style>