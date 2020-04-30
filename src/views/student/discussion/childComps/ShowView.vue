<template>
  <transition name="el-zoom-in-center">
    <div>
      
      <div class="header">
        <div class="title">
          {{article.name}}
        </div>
        <div class="info">
          <span class="info-box">时间：{{article.create_date}}</span>
          <span class="info-box">访问量：{{article.visits}}</span>
        </div>
      
      </div>
      <mavon-editor
              class="md"
              :value="article.content"
              :subfield="false"
              :defaultOpen="'preview'"
              :toolbarsFlag="false"
              :editable="false"
              :scrollStyle="true"
              :ishljs="true"
              :boxShadow="false"
      />
      
      
      <div class="footer">
        <div></div>
        <div @click="back">上一页</div>
      </div>
    </div>
  </transition>
</template>

<script>
  import {qryArticleById} from "@/network/student/discussion";
  
  export default {
    name: "ShowView",
    props: {
      article: {
        type: Object,
        default: {}
      }
    },
    data() {
      return {}
    },
    methods: {
      
      back() {
        this.$emit('func', true)
      }
    }
  }
</script>

<style scoped>
  .header {
    width: 100%;
    background: #fbfbfb;
    height: 150px;
  }
  
  .title {
    width: 200px;
    margin: 0 auto;
    align-items: center;
    line-height: 100px;
    text-align: center;
    font-size: 33px;
  }
  
  .info {
    width: 300px;
    margin: 0 auto;
    display: flex;
    font-size: 15px;
    justify-content: space-between
  }
  
  .info-box {
  
  }
  
  .footer {
    width: 100%;
    display: flex;
    justify-content: space-between
  }
</style>