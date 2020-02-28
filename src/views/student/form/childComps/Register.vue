<template>
  <el-form :model="people" :rules="rules" ref="people" label-width="50px" class="demo-ruleForm">
    <el-form-item label="账号" prop="account">
      <el-input v-model="people.account"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="people.password"></el-input>
    </el-form-item>
    <el-form-item label="类型" prop="type">
      <el-select v-model="people.type" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :value="item.value" :label="item.label"></el-option>
      </el-select>
    </el-form-item>
    
    <el-form-item label="班级" prop="grade">
      <el-select v-model="people.grade" placeholder="请选择">
        <el-option v-for="item in grade" :key="item.id" :value="item.id" :label="item.name"></el-option>
      </el-select>
    </el-form-item>
    
    <el-form-item label="学校" prop="school">
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
  import {qryAllGrade, qryAllSchool, register} from "@/network/form";
  
  export default {
    name: "Register",
    data() {
      return {
        people: {
          account: '',
          password: '',
          type: '1',
          grade: '',
          school: ''
        },
        options: [{
          value: '1',
          label: '学生'
        }, {
          value: '2',
          label: '老师'
        }],
        grade: [],
        school: [],
        rules: {
          account: [
            {required: true, message: '请输入账号', trigger: 'blur'},
            {min: 0, max: 10, message: '长度在 0 到 10 个字符', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'change'}
          ],
          type: [
            {required: true, message: '请选择类型', trigger: 'change'}
          ],
          grade: [
            {required: true, message: '请选择班级', trigger: 'change'}
          ],
          school: [
            {required: true, message: '请选择学校', trigger: 'change'}
          ],
        }
      };
    },
    created() {
      this.qryAllGradeAndSchool();
    },
    methods: {
      qryAllGradeAndSchool() {
        qryAllGrade().then(res => {
          console.log(res);
          this.grade = res.grade;
        })
        qryAllSchool().then(res => {
          console.log(res);
          this.school = res.school;
        })
      },
      onSubmit(people) {
        this.$refs[people].validate((valid) => {
          if (valid) {
            console.log(this.people);
            register(this.people).then(res => {
              
              if (res.data.status == '1') {
                this.$notify({
                  title: '成功',
                  message: "可以前去登录" ,
                  type: 'success'
                });
                // console.log('status:'+res.data.status);
                // console.log('type:'+res.data.type);
                // console.log(res.data.message);
              } else {
                this.$notify({
                  title: '注册失败',
                  message:  res.data.message,
                  type: 'warning'
                });
              }
            })
          } else {
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped>

</style>