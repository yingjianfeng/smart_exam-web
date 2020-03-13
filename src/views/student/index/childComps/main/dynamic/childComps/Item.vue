<template>
  <div class="box-card bg-white border">
    <el-card>
      <div class="box-card-item">
        <div class="box">
          <div class="left">
            <el-avatar :src="discussion.imgs"></el-avatar>
          </div>
          <div class="right">
            <p>
              <a href="" class="name">{{discussion.people_name}}</a>
              <span class="time">{{discussion.create_time}}</span>
              <span class="say">说</span>
            </p>
            <div class="content">
              <!--{{discussion}}-->
              {{discussion.content}}
            </div>
          </div>
        </div>
      </div>
    </el-card>
    <el-row class="operation">
      <a class="flex-item " @click="do_like" :class="{active:discussion.liked}"><i class="el-icon-star-on"></i>
        {{discussion.like}}</a>
      <a class="flex-item " @click="do_discuss" :class="{active:discuss.isActive}"><i class="el-icon-s-comment"></i>
        {{discussion.comment}}</a>
      <a class="flex-item " @click="do_share" :class="{active:share.isActive}"><i class="el-icon-share"></i>
        {{discussion.share}}</a>
      <a class="flex-item "><i class="el-icon-more-outline"></i></a>
    </el-row>
    <CommentView v-for="item in comment" :isActive="discuss.isActive" :content="item"></CommentView>
    
    <MyCommentView :isActive="discuss.isActive"></MyCommentView>
  </div>
</template>

<script>
  import CommentView from '@/views/student/index/childComps/main/dynamic/childComps/Comment'
  import MyCommentView from '@/views/student/index/childComps/main/dynamic/childComps/MyComment'
  import {deleteLikeByDiscussion,addLikeByDiscussion,qryByParentId} from "@/network/student/index";
  
  export default {
    name: "Item",
    components: {
      CommentView,
      MyCommentView
    },
    props: {
      itemdiscussion: {
        type: Object,
        default: () => {
        
        }
      }
    },
    data() {
      return {
        discussion: this.itemdiscussion,
        like: {
          isActive: false,
          times: 1,
        },
        discuss: {
          isActive: false,
          data: []
        },
        share: {
          isActive: false,
          times: 1,
        },
        comment:{
        
        }
      }
    },
    methods: {
      do_like() {
        
        if (this.discussion.liked) {
          if (this.discussion.like == 0) {
            return
          }
          deleteLikeByDiscussion(this.discussion.id).then(res => {
            console.log(res);
          });
          this.discussion.like--;
        } else {
          addLikeByDiscussion(this.discussion.id).then(res => {
            console.log(res);
          });
          this.discussion.like++;
        }
        this.discussion.liked = !this.discussion.liked;
        console.log(this.discussion.liked);
      },
      do_discuss() {
        qryByParentId(this.discussion.id).then(res => {
          console.log(this.discussion.id);
          
          this.comment = res.data;
          console.log(this.comment);
        });
        this.discuss.isActive = !this.discuss.isActive;
      },
      do_share() {
        if (this.share.isActive) {
          this.share.times--;
        } else {
          this.share.times++;
        }
        this.share.isActive = !this.share.isActive;
      }
    }
  }
</script>

<style>
  .active {
    color: #ff5777;
  }
  
  .border {
    border: 1px solid #e0e0e0;
  }
  
  .flex-item {
    text-align: center;
    line-height: 30px;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    flex: 1;
  }
  
  .bg-white {
    background: white;
  }
  
  .box-card-item {
    width: 100%;
  }
  
  .box {
    display: flex;
    justify-content: space-between;
  }
  
  .left {
    width: 50px;
    height: 100px;
    /*background: rebeccapurple;*/
  }
  
  .right {
    width: 600px;
    min-height: 100px;
    /*background: blanchedalmond;*/
  }
  
  .name {
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
    color: #25bb9b;
  }
  
  .say {
    display: inline-block;
    vertical-align: middle;
    margin-left: 8px;
  }
  
  .time {
    display: inline-block;
    vertical-align: middle;
    margin-right: 8px;
    font-size: 13px;
  }
  
  .content {
    margin-top: 10px;
  }
  
  .operation {
    /*position:fixed;*/
    /*bottom:0;*/
    display: flex;
    border-top: 1px solid #eee;
  }
  
  
  .el-tabs {
    height: 60px;
  }
  
  .el-button {
    border-radius: 0;
  }
  
  .el-card.is-always-shadow {
    box-shadow: none;
    -webkit-box-shadow: none;
  }
  
  .el-card {
    border: none;
  }
  
  .el-button + .el-button {
    margin-left: 0px;
  }
</style>