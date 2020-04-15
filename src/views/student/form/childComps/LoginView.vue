<template>
  <el-form :model="people" :rules="rules" ref="people" label-width="50px" class="demo-ruleForm">
    <el-form-item label="账号" prop="account">
      <el-input v-model="people.account"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="people.password"></el-input>
    </el-form-item>
    <el-form-item label="类型" prop="type">
      <!--<el-select v-model="people.type" placeholder="请选择类型">-->
        <!--<el-option label="学生" value="1"></el-option>-->
        <!--<el-option label="老师" value="2"></el-option>-->
        <!--<el-option label="管理员" value="3"></el-option>-->
      <!--</el-select>-->
      <el-select v-model="people.role_id">
        <el-option v-for="item in options" :key="item.role_id" :value="item.role_id" :label="item.label"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button class="submit" type="primary" @click="onSubmit('people')">立即登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import {login} from "@/network/form";
  export default {
    name: "LoginView",
    data() {
      return {
        options: [{
          role_id: 1,
          label: '学生'
        }, {
          role_id: 2,
          label: '老师'
        }, {
          role_id: 3,
          label: '管理员'
        }],
        
        people: {
          account: '',
          password: '',
          role_id: 1
        },
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
    methods: {
      onSubmit(people) {
        this.$refs[people].validate((valid) => {
          if (valid) {
            login(this.people).then(res => {
              console.log(res);
              if(res.success) {
                localStorage.setItem("Authorization","Bearer "+res.data);
                if(this.people.role_id==1){
                  this.$router.push({
                    path: '/index/dynamic',
                  })
                }else if(this.people.role_id==2){
                  this.$router.push({
                    path: '/teacher/index',
                  })
                }
                
                // console.log('status:'+res.data.status);
                // console.log('type:'+res.data.type);
                // console.log(res.data.message);
              }else{
                this.$message.error('登录失败：'+res.message);
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
  .submit {
    width: 200px;
  }
</style>