<template>
  <div class="insert">
    <el-steps :active="active" finish-status="success">
      <el-step title="题目基本信息"></el-step>
      <el-step title="题目类型信息"></el-step>
      <el-step title="确认完成"></el-step>
    </el-steps>
    <div class="content">
      <div v-if="0==active">
        <el-form ref="form" label-width="80px">
          <el-form-item label="题目">
            <el-input v-model="question.content"></el-input>
          </el-form-item>
          <el-form-item label="选项">
            <el-form :inline="true" class="demo-form-inline">
              <br>
              <el-form-item label="A">
                <el-input placeholder="A" v-model="question.option1"></el-input>
              </el-form-item>
              <el-form-item label="B">
                <el-input placeholder="B" v-model="question.option2"></el-input>
              </el-form-item>
            </el-form>
            <br>
            <el-form :inline="true" class="demo-form-inline">
              <el-form-item label="C">
                <el-input placeholder="C" v-model="question.option3"></el-input>
              </el-form-item>
              <el-form-item label="D">
                <el-input placeholder="D" v-model="question.option4"></el-input>
              </el-form-item>
            </el-form>
          </el-form-item>
          <el-form-item label="答案">
            <el-input v-model="question.answer"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div v-else-if="1==active">
        <el-form ref="form" label-width="200px">
          <el-form-item label="题目类型">
            <el-select placeholder="题目类型" v-model="question.type">
              <el-option label="选择" value="1"></el-option>
              <el-option label="判断" value="2"></el-option>
              <el-option label="填空" value="3"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <el-form ref="form" label-width="200px">
          <el-form-item label="题目年级">
            <el-select placeholder="题目年级" v-model="question.grade_id">
              <el-option v-for="item in grade" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <el-form ref="form" label-width="200px">
          <el-form-item label="题目类别">
            <el-select placeholder="题目类别" v-model="question.classify">
              <el-option v-for="item in classify" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <el-form ref="form" label-width="200px">
          <el-form-item label="学校名称">
            <el-select placeholder="学校名称" v-model="question.school">
              <el-option v-for="item in school" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <div v-else class="result">
            <img v-if="code==1001" src="../../../../../../public/失败.png" height="200" width="200"/>
            <img v-else-if="code==1000" src="../../../../../../public/成功.png" height="200" width="200"/>
          <div v-else>等待</div>
      </div>
    </div>
    <div class="btndiv">
      <el-button style="margin-top: 12px;" @click="pre">上一步</el-button>
      <el-button v-if="0==active" style="margin-top: 12px;" @click="next">下一步</el-button>
      <el-button v-else-if="active>1" style="margin-top: 12px;" @click="finish">完成</el-button>
      <el-button v-else-if="1==active" style="margin-top: 12px;" @click="submit">请提交</el-button>
    </div>
  </div>
</template>

<script>
  import {qryQClassify, qryAllGrade, addQuestion, qryAllSchool} from "@/network/teacher/question";
  
  export default {
    name: "Insert",
    data() {
      return {
        active: 0,
        question: {},
        classify: [],
        grade: [],
        school: [],
        code:""
      };
    },
    created() {
      this.qryQClassify(),
        this.qryAllGrade(),
        this.qryAllSchool()
    },
    methods: {
      qryQClassify() {
        qryQClassify().then(res => {
          this.classify = res.data
        });
      },
      qryAllGrade() {
        qryAllGrade().then(res => {
          this.grade = res.data
        });
      },
      qryAllSchool() {
        qryAllSchool().then(res => {
          this.school = res.data
        });
      },
      next() {
        this.active++
      },
      pre() {
        this.active--
      },
      submit() {
        addQuestion(this.question).then(res => {
          if(res.code==1001){
            this.code= res.code
            this.$message.error('增加失败！');
          }else{
            this.code= res.code
            this.active=3;
            this.$message.success('增加成功！');
            this.handleUserList() ;
          }
        });
      },
      finish(){
        this.$router.push('/teacher/index/questionall')
      }
    }
  }
</script>

<style scoped>
  .insert {
    width: 800px;
    height: 560px;
    /*background: #c5d5e2;*/
    margin: 0 auto;
    position: relative;
  }
  
  .content {
    width: 600px;
    height: 300px;
    margin: 0 auto;
    margin-top: 150px;
    /*background: #c5d5e2;*/
  }
  
  .btndiv {
    width: 300px;
    height: 50px;
    /*background: #04bdb9;*/
    margin: 0 auto;
    text-align: center;
    bottom: 0px;
    position: absolute;
    left: 30%;
  }
  .table {
    width: 600px;
    margin: 0 auto;
    color: #838383 !important;
    margin-bottom: 50px;
  }

  .table tr {
    height: 45px;
    
  }

  .table td {
    border-left: 1px solid #ededed;
    border-top: 1px solid #ededed;
    text-align: center;
  }

  .table .k {
    width: 20%;
    text-align: right;
  }

  .table .v {
    width: 30%;
    padding-left: 20px;
  }

  .table {
    border-right: 1px solid #ededed;
    border-bottom: 1px solid #ededed;
  }

  /*奇数变色*/
  .table tr:nth-child(odd) {
    background: rgb(249, 249, 249);
  }
  
  
  .result{
    text-align: center;
  }
</style>