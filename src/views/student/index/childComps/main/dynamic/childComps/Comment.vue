<template>
  <div class="box-card-item " v-show="isActive">
    <div class="box">
      <div class="left">
        <el-avatar :src="content.people_img"></el-avatar>
      </div>
      <div class="right">
        <p>
          <a href="" style="pointer-events: none;" class="name">{{content.people_name}}</a>
          <span class="say">{{content.content}}</span>
        </p>
        <p class="date">
          <span>发表于 {{content.create_time}}</span>
          <a href="javascript:void(0);">点赞(0)</a>
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
      },
      content: {
        type: Object,
        default: () => {
        
        }
      }
    }
  }
</script>

<style scoped>
  .box-card-item {
    background: #eee;
    font-size: 12px;
    height: 80px;
    padding: 20px;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .date {
    line-height: 20px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
</style>