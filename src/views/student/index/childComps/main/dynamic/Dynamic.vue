<template>
  <div class="box">
    <div class="box_left">
      <PublishView></PublishView>
      <el-collapse-transition v-for="discussion in discussions">
        <ItemView :itemdiscussion="discussion"></ItemView>
      </el-collapse-transition>
    </div>
    <div class="box_right">
      <el-card class="box_right_card">
        <div slot="header" class="clearfix">
          <span>排行榜</span>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
      </el-card>
    </div>
    
  </div>
</template>

<script>
  import PublishView from '@/views/student/index/childComps/main/dynamic/childComps/Publish'
  import ItemView from '@/views/student/index/childComps/main/dynamic/childComps/Item'
  import {qryNotParentId} from "@/network/student/index";
  
  export default {
    name: "Dynamic",
    data() {
      return {
        discussions: {}
      }
    },
    components: {
      PublishView,
      ItemView
    },
    mounted() {
      this.qryall()
    },
    methods: {
      qryall() {
        qryNotParentId().then(res => {
          console.log(res);
          this.discussions = res.data;
        })
      }
    }
  }
</script>

<style scoped>
  .box-card {
    width: 700px;
    min-height: 150px;
    margin-top: 20px;
  }
  
  .box {
    display: flex;
    justify-content: space-between;
  }
  
  .box_right {
    width: 250px;
    /*border-right:  1px solid #e0e0e0;*/
    /*margin-right: 5px;*/
  }
  
  .box_right_card {
    width: 250px;
    margin-top: 20px;
  }
</style>