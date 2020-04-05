<template>
  <el-container>
    <el-header>
      <HeaderView :activeIndex="index"></HeaderView>
    </el-header>
    <el-main>
      <router-link to="/questions/items"></router-link>
      <router-link to="/questions/test"></router-link>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
  import HeaderView from '@/views/student/index/childComps/header/Header'
  import ItemsView from '@/views/student/questions/childComps/Items'
  export default {
    name: "Questions",
    data() {
      return {
        index: '2',
        state: ''
      };
    },
    components: {
      HeaderView,
      ItemsView
    }
  }
</script>

<style scoped>
  .el-main {
    /*background: #eee;*/
    color: #333;
    width: 1000px;
    margin: 0 auto;
  }
</style>