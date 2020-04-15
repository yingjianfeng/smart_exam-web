<template>
  <el-card class="box-card">
    <div class="header">
      <router-link  to="/form/login" class="text item" active-class="selected"  @click.native="clickme('1')">登录</router-link>
      <router-link to="/form/register" class="text item" active-class="selected"  @click.native="clickme('2')">注册</router-link>
    </div>
    <router-view/>
  </el-card>
</template>

<script>
  export default {
    name: "FormView",
    data: function() {
      return {
      };
    },
  methods: {
  
  }
  }
</script>

<style scoped>
  .selected{
    border-bottom: 2px solid #409EFF;
  }
  .header{
    text-align: center;
    display: flex;
    justify-content: center; /* 水平居中 */
  }
  .header a{
    font-size: 20px;
    width: 100px;
    height: 60px;
  }
  .box-card {
    float: right;
    margin-top: 60px;
    margin-right: 150px;
    width: 350px;
    line-height: 60px;
  }
  .text {
    font-size: 14px;
  }

  .item {
    padding: 0px 0;
  }
</style>