<template>
  <div id="Items">
    <!--<el-divider content-position="center">随机组卷</el-divider>-->
    <div class="bar"><span class="reddiv"></span> 随机组卷</div>
    <div class="items-main">
      <div @click="click(item.id,-1)" v-for="item in testGrade">
        <el-card :body-style="{ padding: '0px' }" class="item" shadow="always">
          <img src="http://bpic.588ku.com/art_origin_min_pic/19/03/12/e80425556622ce02fbeba03fdb043987.jpg"
               class="image"/>
          <div class="item-main ">
            <div class="item-main-info">{{item.name}}数学</div>
          </div>
        </el-card>
      </div>
    </div>
    <!--<el-divider content-position="center">专项训练</el-divider>-->
    <div class="bar"><span class="reddiv"></span> 专项训练</div>
    <div v-for="item in grade">
      <div class="items-header">
        <h3>{{item.name}}
          <span class="items-header-span">有{{item.questionClassify.length}}个</span>
        </h3>
      </div>
      <div class="items-main">
        <div @click="click(item.id,classify.id)" v-for="classify in item.questionClassify">
          <el-card :body-style="{ padding: '0px' }" class="item" shadow="always">
            <img :src="classify.img" class="image"/>
            <div class="item-main ">
              <div class="item-main-info">数学{{classify.name}}</div>
            </div>
          </el-card>
        </div>
      </div>
    </div>
    
    <div class="rightbar">
      <ul>
        <li @click="dofail"><i class="el-icon-edit"></i></li>
        <li><i class="el-icon-arrow-up"></i></li>
      </ul>
    </div>
    
    <!--错题-->
    <el-dialog class="dialog" title="错题练一练" :visible.sync="dialogFormVisible">
      <div class="dialog_heard">
        <span>剩余错题数：{{size}}</span>
      </div>
      <el-form label-width="80px">
        <div class="header">{{question.content}} ___</div>
        <div class="main">
          <el-radio-group v-model="question.answer">
            <el-radio :label='question.option1'>A: {{question.option1}}</el-radio>
            <el-radio :label='question.option2'>B: {{question.option2}}</el-radio>
            <el-radio :label='question.option3' v-if="question.type!=2">C: {{question.option3}}</el-radio>
            <el-radio :label='question.option4' v-if="question.type!=2">D: {{question.option4}}</el-radio>
          </el-radio-group>
          
        </div>
        <div class="divbtn">
          <el-button type="primary" @click="failsubmit" >提交</el-button>
          &nbsp;
          <el-button type="primary" @click="failnext">下一题</el-button>
        </div>
      </el-form>
    </el-dialog>

  
  </div>
</template>

<script>
  import {qryGradeAndClassify, qryAllGrade, qryQuestionFailByPId,questionFailSubmit} from "@/network/student/question";
  
  export default {
    name: "Items",
    data() {
      return {
        testGrade: [],/*考试的数据*/
        grade: [],/*单项测试的数据*/
        dialogFormVisible: false,
        size: 0,
        question: {
        
        }
      }
    },
    methods: {
      qryItems() {
        qryGradeAndClassify().then(res => {
          console.log(res.data);
          this.grade = res.data;
        });
      },
      qryAllGrade() {
        qryAllGrade().then(res => {
          this.testGrade = res.data;
        });
      },
      click(gradeId, classifyId) {
        this.$confirm(gradeId + " " + classifyId + '是否开始答题?', '提示', {
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
      },
      dofail() {
        this.failnext()
        
      },
      failnext(){
        qryQuestionFailByPId().then(res => {
          console.log(res);
          if(res.code==1001){
            console.log(1001);
            this.$message.error('没有错题啦~');
            this.dialogFormVisible = false;
          }else{
            this.size = res.data.size;
            this.question = res.data.question;
            this.dialogFormVisible = true;
          }
        });
      },
      failsubmit(){
        questionFailSubmit(this.question).then(res => {
          console.log(res);
          if(res.code==1001){
            this.$message.error('回答错误~');
            console.log("0000");
          }else{
            console.log("11111");
            this.$message.success('回答正确~');
            this.failnext();
          }
        });
      }
    },
    created() {
      this.qryItems(),
        this.qryAllGrade()
    }
  }
</script>

<style>
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
    /*font-weight: bold;*/
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
  
  .bar {
    width: 100%;
    line-height: 30px;
    font-size: 20px;
    font-weight: bold;
  }
  
  .reddiv {
    width: 10px;
    height: 10px;
    line-height: 30px;
    background: red;
    display: inline-block;
  }
  
  .rightbar {
    width: 60px;
    height: 100px;
    /*background: #04bdb9;*/
    position: fixed;
    top: 30%;
    right: 10%;
    font-size: 30px;
  }
  
  .rightbar li {
    list-style: none;
    float: left;
    width: 40px;
    height: 40px;
    line-height: 16px;
    border-radius: 3px;
    border: 1px solid #d6d6d6;
    background: #fff;
    text-align: center;
    line-height: 40px;
    margin-top: 10px;
  }
  
  .rightbar li:hover {
    color: #ff5777;
  }
  
  .dialog_heard {
    margin-top: 0px;
    width: 100%;
    height: 50px;
    background: #c5d5e2;
    line-height: 50px;
    font-size: 23px;
    text-align: center;
  }
  
  .dialog .header {
    line-height: 50px;
    font-size: 22px;
    /*text-align: center;*/
    margin-left: 40%;
  }
  
  .dialog .main {
    margin-left: 40%;
    /*text-align: center;*/
    line-height: 50px;
  }
  
  .el-radio-group {
    flex: 1;
    display: flex;
    flex-flow: column;
  }
  
  .el-radio {
    margin-top: 15px;
    margin-bottom: 5px;
  }
  
  .el-dialog__body {
    padding: 0px 0px;
  }
  
  .main {
    line-height: 50px;
    margin-left: 20px;
  }
  
  .divbtn{
    width: 100%;
    height: 60px;
    text-align: center;
  }
  .element.style {
     margin-left: 0px;
  }
</style>