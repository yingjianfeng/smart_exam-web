<template>
  <div class="box-card-item " v-show="isActive">
    <div class="box">
      <div class="left">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      </div>
      <div class="right">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-button size="small" class="btn" type="primary">评论</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MyComment",
    props: {
      isActive: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        input: ''
      }
    }
  }
</script>

<style scoped>
  .box-card-item{
    background: #eee;
    font-size: 12px;
    height: 100px;
    padding: 20px;
    border-bottom: 1px solid #e0e0e0;
  }
  .btn{
  float: right;
    margin-top: 7px;
  }
  
</style>