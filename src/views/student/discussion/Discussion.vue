<template>
  <div>
    <HeaderView :activeIndex="index"></HeaderView>
  </div>
</template>

<script>
  import HeaderView from '@/views/student/index/childComps/header/Header'
  export default {
    name: "Discussion",
    data() {
      return {
        index: '4',
      };
    },
    components: {
      HeaderView,
    }
  }
</script>

<style scoped>

</style>