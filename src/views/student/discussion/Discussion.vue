<template>
  
  <div>
    <HeaderView :activeIndex="index"></HeaderView>
    <!--<ShowView></ShowView>-->
    
    <el-main>
      <el-card shadow="hover" v-show="isshow" v-for="discussion in discussions" @click.native="show(discussion.id)">
        
        <!--<div>{{discussion.id}}&#45;&#45;{{discussion.name}}</div>-->
        
        <div class="left">
          <el-avatar :src="discussion.people.img"></el-avatar>
        </div>
        <div class="right">
          <p class="head">
            <a href="" class="name">{{discussion.name}}</a>
            <span class="time">{{discussion.create_date}}</span>
          </p>
          <div class="content">
            <!--{{discussion}}-->
            {{discussion.introduce}}
          </div>
        
        </div>
      
      </el-card>
      <!--<keep-alive>-->
      <!--<router-view v-show="!isshow" ></router-view>-->
      <!--</keep-alive>-->
      <ShowView :article="article" v-show="!isshow" @func="updateshow"></ShowView>
    </el-main>
  </div>

</template>

<script>
  import HeaderView from '@/views/student/index/childComps/header/Header'
  import ShowView from '@/views/student/discussion/childComps/ShowView'
  import {qryArticleById} from "@/network/student/discussion";
  import {qryAll} from "@/network/student/discussion";
  
  export default {
    name: "Discussion",
    data() {
      return {
        index: '4',
        discussions: [],
        isshow: true,
        article: {}
      };
    },
    components: {
      HeaderView,
      ShowView
    },
    methods: {
      qryAll() {
        qryAll().then(res => {
          console.log(res.data);
          this.discussions = res.data;
        });
      },
      show(id) {
        this.isshow = false;
        qryArticleById(id).then(res => {
          console.log(res);
          this.article = res.data;
        });
      },
      updateshow(i) {
        this.isshow = i
      }
    },
    created() {
      this.qryAll()
    }
  }
</script>

<style scoped>
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    width: 1000px;
    margin: 0 auto;
  }
  
  .el-card {
    width: 73%;
    min-height: 80px;
    margin-bottom: 20px;
  }
  
  .noshow {
    display: none;
  }
  
  .head {
    display: flex;
    justify-content: space-between
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
    font-size: 26px;
  }
  
  .time {
    display: inline-block;
    vertical-align: middle;
    margin-left: 8px;
    font-size: 13px;
  }
  
  .content {
    margin-top: 10px;
  }

</style>