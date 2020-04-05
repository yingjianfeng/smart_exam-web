<template>
  <el-container>
    <el-header>
      <HeaderView :activeIndex="index"></HeaderView>
    </el-header>
  </el-container>
</template>

<script>
  import HeaderView from '@/views/student/index/childComps/header/Header'
  export default {
    name: "Information",
    data() {
      return {
        index: '0',
      };
    },
    components: {
      HeaderView,
    }
  }
</script>

<style scoped>

</style>