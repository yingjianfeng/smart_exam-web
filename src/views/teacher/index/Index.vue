<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>学生管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="toquestiondetail">答题详情</el-menu-item>
              <el-menu-item index="1-2">布置作业</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>题库管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1" @click="toquestionall">全部题目</el-menu-item>
              <el-menu-item index="2-2"  @click="toquestioninsert">题目录入</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
         
          <el-menu-item index="3" @click="todata">
              <i class="el-icon-setting"></i>
              <span slot="title">资料管理</span>
          </el-menu-item>
        </el-menu>
      
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  
  
  export default {
    name: "Index",
    components: {},
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      tostudent(){
        this.$router.push("/teacher/index/student");
      },
      toquestionall(){
        this.$router.push("/teacher/index/questionall");
      },
      toquestioninsert(){
        this.$router.push("/teacher/index/questioninsert");
      },
      todata(){
        this.$router.push("/teacher/index/data");
      },
      toquestiondetail(){
        this.$router.push("/teacher/index/questionDetail");
      }
      
    }
  }
</script>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    color: #333;
    height: 780px;
  }
</style>