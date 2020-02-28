<template>
  <div>
    <HeaderView :activeIndex="index"></HeaderView>
  </div>
</template>

<script>
  import HeaderView from '@/views/student/index/childComps/header/Header'
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
    }
  }
</script>

<style scoped>

</style>