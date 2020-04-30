<template>
  <el-container>
    <el-header>
      <HeaderView :activeIndex="index"></HeaderView>
    </el-header>
    
    <el-main>
      <el-divider content-position="left">基本信息</el-divider>
      <el-form ref="form" :model="form" label-width="80px">
        <table class="table">
          <tbody>
          <tr>
            <td class="k">账号</td>
            <td class="v">{{info.account}}</td>
            <td class="k">姓名</td>
            <td class="v">{{info.name}}</td>
          </tr>
          <tr>
            <td class="k">手机号</td>
            <td class="v">{{info.phone}}</td>
            <td class="k">学校</td>
            <td class="v">{{info.school}}</td>
          </tr>
          <tr>
            <td class="k">班级</td>
            <td class="v">{{info.grade}}</td>
            <td class="k">答题时长</td>
            <td class="v">{{info.time}}</td>
          </tr>
          </tbody>
        </table>
      </el-form>
      <el-divider content-position="left">修改</el-divider>
      <div class="formdiv">
        <el-form ref="form" :model="form" label-width="80px">
          <el-upload
                  class="avatar-uploader"
                  action="http://www.0612yjf.cn:8888/info/updateImg"
                  :headers="myHeaders"
                  :show-file-list="false"
                  :on-success="handleSuccess"
                  >
            <el-avatar class="headerimg"
                       :src="info.img"></el-avatar>
          </el-upload>
          
          <el-form-item label="旧密码">
            <el-input v-model="form.oldPwd"></el-input>
          </el-form-item>
          <el-form-item label="新密码">
            <el-input v-model="form.newPwd"></el-input>
          </el-form-item>
            <el-button type="primary" @click="updatePassword">点击修改</el-button>
        </el-form>
      </div>
    </el-main>
  </el-container>
</template>

<script>
  import HeaderView from '@/views/student/index/childComps/header/Header'
  import {qryInfo,updatePassword} from "@/network/student/info";

  var token = localStorage.getItem('Authorization'); // 要保证取到
  export default {
    name: "Information",
    data() {
      return {
        index: '0',
        info:{
        
        },
        form: {
          oldPwd:"",
          newPwd:"",
        },
        dialogImageUrl: '',
        myHeaders: {Authorization: token},
      };
    },
    components: {
      HeaderView,
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      qryInfo(){
        qryInfo().then(res => {
          console.log(res);
          this.info = res.data;
        });
      },
      updatePassword(){
        updatePassword(this.form.oldPwd,this.form.newPwd).then(res => {
          console.log(res);
          if(res.code=='30000'){
            this.$message.success(res.message);
            this.$router.push("/form/login");
          }else{
            this.$message.error(res.message);
          }
        });
      },
      handleSuccess(res, file) {
        this.dialogImageUrl = res.data;
        // 刷新当前组件
        this.$router.go(0);
      }
    },
    created() {
      this.qryInfo()
    }
  }
</script>

<style scoped>
  .el-main {
    /*background: #eee;*/
    color: #333;
    width: 1000px;
    margin: 0 auto;
  }
  
  .table {
    width: 900px;
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
  
  .formdiv {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  
  .headerimg {
    height: 80px;
    width: 80px;
    margin: 0 auto;
    margin-bottom: 10px;
  }

</style>