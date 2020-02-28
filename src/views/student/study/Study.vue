<template>
  <div>
    <HeaderView :activeIndex="index"></HeaderView>
  </div>
</template>

<script>
  import HeaderView from '@/views/student/index/childComps/header/Header'
  export default {
    name: "Study",
    data() {
      return {
        index: '3',
      };
    },
    components: {
      HeaderView,
    }
  }
</script>

<style scoped>

</style>