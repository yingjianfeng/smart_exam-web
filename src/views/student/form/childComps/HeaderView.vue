<template>
  <div id="headerview">
      <img src="../../../../assets/img/logo.png"/>
      <div class="logospan">智能组卷与答题计分系统</div>
  </div>
</template>

<script>
  export default {
    name: "HeaderView"
  }
</script>

<style scoped>
  #headerview {
    /*width: 100px;*/
    height: 80px;
    /*background: #04bdb9;*/
  }
  
  #headerview img {
    float: left;
    margin-left: 150px;
    height: 90px;
    width: 120px;
  }
  .logospan{
    float: left;
    font-size: 25px;
    line-height: 120px;
  }
</style>