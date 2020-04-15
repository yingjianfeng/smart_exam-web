<template>
  <div class="box-card-item " v-show="isActive">
    <div class="box">
      <div class="left">
        <el-avatar :src="people_img"></el-avatar>
      </div>
      <div class="right">
        <el-input v-model="discussion.content" placeholder="请输入内容"></el-input>
        <el-button size="small" class="btn" type="primary" @click="submit">评论</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import {reply} from "@/network/student/index";
  export default {
    name: "MyComment",
    props: {
      isActive: {
        type: Boolean,
        default: false
      },
      people_img: {
        type: String,
      },
      itemdiscussion: {
        type: Object,
        default: () => {
      
        }
      }
    },
    methods:{
      submit(){
      this.discussion.parent_id=this.itemdiscussion.id;
        reply(this.discussion).then(res=>{
          this.$router.go(0);
        })
      }
    },
    data() {
      return {
        input: '',
        discussion:{}
      }
    }
  }
</script>

<style scoped>
  .box-card-item {
    background: #eee;
    font-size: 12px;
    height: 100px;
    padding: 20px;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .btn {
    float: right;
    margin-top: 7px;
  }

</style>