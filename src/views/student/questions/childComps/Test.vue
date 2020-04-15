<template>
  <div>
    {{maxtime}}
    <!--{{question}}-->
    <div class="clock">
      <span v-if="classifyId==-1">{{m}}分:{{s}}秒</span>
      <span v-else> 开始答题</span>
    </div>
    <div class="question" v-for="(item,i) in question">
      <div class="header"><span class="spanText">* </span>{{i+1}}.&nbsp;&nbsp;{{item.content}} ___ <i
              class="el-icon-star-on " :class="{collect:item.collect>0}" @click="collect(item)"></i></div>
      
      <div class="main">
        <el-radio-group v-model="item.answer">
          <el-radio :label='item.option1'>A: {{item.option1}}</el-radio>
          <el-radio :label='item.option2'>B: {{item.option2}}</el-radio>
          <el-radio :label='item.option3' v-if="item.type!=2">C: {{item.option3}}</el-radio>
          <el-radio :label='item.option4' v-if="item.type!=2">D: {{item.option4}}</el-radio>
        </el-radio-group>
      </div>
      <el-divider></el-divider>
    </div>
    <div class="div_btn">
      <el-button :disabled=btn.disabled @click="btnSubmit(false)" type="primary">{{btn.text}}</el-button>
      <el-button :disabled=!btn.disabled @click="selResult()" type="text">{{btn_result}}</el-button>
    </div>
    
    <div class="answer" v-show="show">
      <el-tooltip class="item" :class="cla(item.id,item.answer)" effect="dark" :content="tip(item.id)"
                  placement="top-start"
                  v-for="(item,i) in question">
        <el-button>{{i+1}}</el-button>
      </el-tooltip>
    </div>
    <!--{{question_result}}-->
    <!--{{question}}-->
  </div>
</template>

<script>
  import {qryByclassifyIdAndGradeId, submitAnswer, collect, deleteCollect} from "@/network/student/question";
  
  export default {
    name: "Test",
    data() {
      return {
        question: [],
        question_result: {},
        form: {
          resource: '',
        },
        m: null,
        s: null,
        maxtime:5*60,
        btn: {
          disabled: false,
          text: "提 交"
        },
        show: false,
        btn_result: "查看答题卡",
        classifyId: this.$route.query.classifyId,
        gradeId: this.$route.query.gradeId,
        timer:null
      }
    },
    mounted() {
      this.countdown();
      this.qryByclassifyIdAndGradeId();
    },
    methods: {
      //倒计时
      countdown() {
        var that = this;
        function down() {
          if (that.maxtime >= 0) {
            that.m = Math.floor(that.maxtime / 60);
            that.s = Math.floor(that.maxtime % 60);
            // if (maxtime == 5 * 60) {
            //   alert("距离结束仅剩5分钟");
            // }
            --that.maxtime;
            // console.log(this.s);
          } else {
            submitAnswer(that.question,0).then(res => {
              console.log(res.data);
              that.question_result = res.data.map;
              that.$confirm('恭喜你答对了：' + res.data.number + "题", '提示', {
                confirmButtonText: '确定',
                // cancelButtonText: '取消',
                showCancelButton: false,
                type: 'success',
                center: true
              }).then(() => {
              
              }).catch(() => {
              
              });
            });
  
            that.btn.text = "已提交";
            that.btn.disabled = true;
            
            
            clearInterval(this.timer);
          }
          
        }
        
        if (this.classifyId == -1) {
          this.timer = setInterval(down, 1000);
        }
      },
      qryByclassifyIdAndGradeId() {
        var classifyId = this.$route.query.classifyId
        var gradeId = this.$route.query.gradeId
        qryByclassifyIdAndGradeId(classifyId, gradeId).then(res => {
          this.question = res.data;
        });
      },
      btnSubmit() {
        this.$confirm('确认答题完毕，提交?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var time = 5*60-this.maxtime;
          submitAnswer(this.question,time).then(res => {
            console.log(res.data);
            this.question_result = res.data.map;
            this.$confirm('恭喜你答对了：' + res.data.number + "题", '提示', {
              confirmButtonText: '确定',
              // cancelButtonText: '取消',
              showCancelButton: false,
              type: 'success',
              center: true
            }).then(() => {
            
            }).catch(() => {
            
            });
          });
          
          this.btn.text = "已提交";
          this.btn.disabled = true;
          
          
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消提交'
          });
        });
  
        clearInterval(this.timer)
      },
      tip(id) {
        for (let key  in this.question_result) {
          if (id == key) {
            // console.log(this.question_result[key].answer);
            // console.log(answer);
            // console.log(this.question_result[key].answer==answer);
            return "正确结果为：" + this.question_result[key].answer;
          }
        }
      },
      cla(id, answer) {
        for (let key  in this.question_result) {
          if (id == key) {
            return this.question_result[key].answer == answer ? 'true' : 'false';
          }
        }
      },
      selResult() {
        if (this.show) {
          this.show = false;
          this.btn_result = "查看答题卡"
        } else {
          this.show = true;
          this.btn_result = "取消查看"
        }
        
      },
      collect(item) {
        if (item.collect < 1) {
          item.collect = 1;
          collect(item.id).then(res => {
            this.$message.success('收藏成功');
            console.log(res);
          })
        } else {
          item.collect = 0;
          deleteCollect(item.id).then(res => {
            this.$message.warning('取消收藏成功');
            console.log(res);
          })
        }
        
      },
    },
    //当离开页面时，清除倒计时
    beforeDestroy() {
      clearInterval(this.timer)
    },
  }
</script>

<style scoped>
  .question {
    font-size: 23px;
    margin-bottom: 20px;
  }
  
  .main {
    line-height: 50px;
    margin-left: 20px;
  }
  
  .clock {
    text-align: center;
    font-size: 30px;
    color: #ff5777;
    line-height: 60px;
  }
  
  .div_btn {
    /*background: #c5d5e2;*/
    text-align: center;
  }
  
  .el-button {
    width: 20%;
  }
  
  .answer {
    margin: 0 auto;
    margin-top: 50px;
    /*background: #c5d5e2;*/
    border: 1px dashed gray;
    width: 500px;
    height: 200px;
    padding: 15px;
  }
  
  .answer .item {
    
    width: 50px;
    height: 50px;
    text-align: center;
    color: white;
    line-height: 50px;
  }
  
  .false {
    background: red;
  }
  
  .true {
    background: #04bdb9;
  }
  
  .answer .el-button {
    padding: 0px;
  }
  
  .spanText {
    color: red;
  }
  
  .el-radio-group {
    flex: 1;
    display: flex;
    flex-flow: column;
    /*margin-top: 10px;*/
  }
  
  .el-radio {
    margin-top: 15px;
  }
  
  .collect {
    color: red;
  }
</style>