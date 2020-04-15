<template>
  <div id="Items">
    <el-divider content-position="center">随机组卷</el-divider>
    <div class="items-main">
      <div @click="click(item.id,-1)" v-for="item in testGrade">
        <el-card :body-style="{ padding: '0px' }" class="item" shadow="always">
          <img src="../../../../assets/img/math.png" class="image"/>
          <div class="item-main ">
            <div class="item-main-info">{{item.name}}数学</div>
          </div>
        </el-card>
      </div>
    </div>
    <el-divider content-position="center">专项训练</el-divider>
    <div v-for="item in grade">
      <div class="items-header">
        <h2>{{item.name}}
          <span class="items-header-span">有{{item.questionClassify.length}}个</span>
        </h2>
      </div>
      <div class="items-main">
        <div @click="click(item.id,classify.id)" v-for="classify in item.questionClassify">
          <el-card :body-style="{ padding: '0px' }" class="item" shadow="always">
            <img src="../../../../assets/img/math.png" class="image"/>
            <div class="item-main ">
              <div class="item-main-info">数学{{classify.name}}</div>
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {qryGradeAndClassify, qryAllGrade} from "@/network/student/question";
  
  export default {
    name: "Items",
    data() {
      return {
        testGrade: [],/*考试的数据*/
        grade: []/*单项测试的数据*/
      }
    },
    methods: {
      qryItems() {
        qryGradeAndClassify().then(res => {
          this.grade = res.data;
        });
      },
      qryAllGrade() {
        qryAllGrade().then(res => {
          this.testGrade = res.data;
        });
      },
      click(gradeId, classifyId) {
        this.$confirm( gradeId+" "+classifyId+'是否开始答题?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'info'
        }).then(() => {
          this.$router.push({path: '/questions/test', query: {gradeId: gradeId, classifyId: classifyId}})
          // this.$router.push("/questions/test");
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });
      }
    },
    created() {
      this.qryItems(),
        this.qryAllGrade()
    }
  }
</script>

<style scoped>
  #Items {
    width: 100%;
  }
  
  .items-header {
    line-height: 50px;
  }
  
  .items-header-span {
    margin-left: 10px;
    font-size: 14px;
    font-weight: normal;
    color: #666;
  }
  
  .item {
    width: 286px;
    height: 235px;
    margin-left: 30px;
    margin-bottom: 15px;
  }
  
  .items-main {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
  }
  
  .item-main {
    padding: 14px;
    text-align: center;
    
  }
  
  .image {
    width: 286px;
    height: 180px;
    display: block;
  }
  
  .item-main-info {
    font-size: 20px;
    font-weight: bold;
    color: #101010;
    margin-bottom: 20px;
  }
  
  
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  
  .clearfix:after {
    clear: both
  }
  
  .test {
    margin-bottom: 80px;
  }
</style>