<template>
    <div class="box-card-item " v-show="isActive">
      <div class="box">
        <div class="left">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </div>
        <div class="right">
          <p>
            <a href=""style="pointer-events: none;" class="name">yjf</a>
            <span class="say">说说说说说说说说</span>
          </p>
          <p class="date">
            <span>发表于 2020-02-28 14:21:31</span>
            <a href="javascript:void(0);">点赞(3)</a>
          </p>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "Comment",
    props: {
      isActive: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .box-card-item{
    background: #eee;
    font-size: 12px;
    height: 80px;
    padding: 20px;
    border-bottom: 1px solid #e0e0e0;
  }
  .date{
    line-height: 20px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
</style>