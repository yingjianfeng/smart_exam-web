<template>
  <el-form :model="people" :rules="rules" ref="people" label-width="50px" class="demo-ruleForm">
    <el-form-item label="账号" prop="account">
      <el-input v-model="people.account"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="people.password"></el-input>
    </el-form-item>
    <el-form-item label="类型">
      <el-select v-model="people.type" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :value="item.value" :label="item.label"></el-option>
      </el-select>
    </el-form-item>
  
    <el-form-item label="班级" >
      <el-select v-model="people.grade" placeholder="请选择">
        <el-option v-for="item in grade" :key="item.id" :value="item.id" :label="item.name"></el-option>
      </el-select>
    </el-form-item>
    
    <el-form-item label="学校" >
      <el-select v-model="people.school" placeholder="请选择">
        <el-option v-for="item in school" :key="item.id" :value="item.id" :label="item.name"></el-option>
      </el-select>
    </el-form-item>
    
    <el-form-item>
      <el-button class="submit" type="primary" @click="onSubmit('people')">立即登录</el-button>
    </el-form-item>
  </el-form>
  
</template>

<script>
  import {qryAllGrade,qryAllSchool} from "@/network/form";
  export default {
    name: "Register",
    data() {
      return {
        people: {
          account: '',
          password: '',
          type: '',
          grade:'',
          school:''
        },
        options: [{
          value: '1',
          label: '学生'
        }, {
          value: '2',
          label: '老师'
        }],
        grade:[],
        school:[],
        rules: {
          account: [
            {required: true, message: '请输入账号', trigger: 'blur'},
            {min: 0, max: 10, message: '长度在 0 到 10 个字符', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'change'}
          ]
        }
      };
    },
    created() {
      this.qryAllGradeAndSchool();
    },
    methods:{
      qryAllGradeAndSchool(){
        qryAllGrade().then(res=>{
          console.log(res);
          this.grade=res.data.grade;
        })
        qryAllSchool().then(res=>{
          console.log(res);
          this.school=res.data.school;
        })
      }
    }
  }
</script>

<style scoped>

</style>