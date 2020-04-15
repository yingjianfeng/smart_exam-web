<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item><i class="el-icon-date"></i> 数据管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="cantainer">
      <el-table style="width: 100%;"
                :data="userList.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      >
        <el-table-column type="index" width="50">
        </el-table-column>
        <el-table-column label="题目" prop="content" width="250">
        </el-table-column>
        <el-table-column label="类型" prop="type" width="100">
        </el-table-column>
        <el-table-column label="选项1" prop="option1" width="100">
        </el-table-column>
        <el-table-column label="选项2" prop="option2" width="100">
        </el-table-column>
        <el-table-column label="选项3" prop="option3" width="100">
        </el-table-column>
        <el-table-column label="选项4" prop="option4" width="100">
        </el-table-column>
        <el-table-column label="答案" prop="answer" width="100">
        </el-table-column>
        <el-table-column label="类型" prop="classify" width="100">
        </el-table-column>
        <el-table-column label="年级" prop="grade" width="100">
        </el-table-column>
        <el-table-column label="年级" width="180">
          <template slot-scope="scope">
            <el-button
                    size="mini"
                    @click="handleUpdate(scope.row.id)">修改
            </el-button>
            <el-button
                    size="mini"
                    @click="handleDelete(scope.row.id)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[5, 10, 20, 40]"
              :page-size="pagesize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="userList.length">
      </el-pagination>
    </div>
    
    
    <el-dialog class="dialog" title="修改" :visible.sync="dialogFormVisible" @close='closeDialog'>
      <el-form ref="form" label-width="80px">
        <el-form-item label="题目">
          <el-input v-model="dialogData.content"></el-input>
        </el-form-item>
        <el-form-item label="选项">
          <!--<div class="inputdiv">-->
          <!--<div><span>A</span><el-input class="input"></el-input></div>-->
          <!--<div><span>B</span><el-input class="input"></el-input></div>-->
          <!--</div>-->
          <!--<div   class="inputdiv">-->
          <!--<div><span>C</span><el-input class="input"></el-input></div>-->
          <!--<div><span>D</span><el-input class="input"></el-input></div>-->
          <!--</div>-->
          <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="A">
              <el-input placeholder="A" v-model="dialogData.option1"></el-input>
            </el-form-item>
            <el-form-item label="B">
              <el-input placeholder="B" v-model="dialogData.option2"></el-input>
            </el-form-item>
          </el-form>
          <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="C">
              <el-input placeholder="C" v-model="dialogData.option3"></el-input>
            </el-form-item>
            <el-form-item label="D">
              <el-input placeholder="D" v-model="dialogData.option4"></el-input>
            </el-form-item>
          </el-form>
        </el-form-item>
  
        <el-form-item label="答案">
          <el-input v-model="dialogData.answer"></el-input>
        </el-form-item>
        <!--<el-form-item label="年级" >-->
          <!--<el-select  placeholder="年级" v-model="dialogData.grade">-->
            <!--<el-option label="一年级" value="6"></el-option>-->
            <!--<el-option label="二年级" value="7"></el-option>-->
          <!--</el-select>-->
        <!--</el-form-item>-->
        <!--<el-form-item label="类型" >-->
          <!--<el-select  placeholder="类型" v-model="dialogData.classify">-->
            <!--<el-option label="加法" value="1"></el-option>-->
            <!--<el-option label="减法" value="2"></el-option>-->
            <!--<el-option label="乘法" value="3"></el-option>-->
            <!--<el-option label="除法" value="4"></el-option>-->
          <!--</el-select>-->
        <!--</el-form-item>-->
        <el-form-item >
          <el-button type="primary" @click="submitUpdate">立即修改</el-button>
        </el-form-item>
      </el-form>
      <!--{{dialogData}}-->
    </el-dialog>
  
  
  </div>
</template>

<script>
  import {qryAllQuestionInfo,qryQuestionInfoById,updateQuestionInfoById,deleteQuestionInfoById} from "@/network/teacher/question";
  
  export default {
    name: "All",
    data() {
      return {
        currentPage: 1, //初始页
        pagesize: 10,    //    每页的数据
        userList: [],
        dialogFormVisible: false,
        dialogData:{},
      }
    },
    created() {
      this.handleUserList()
    },
    methods: {
      // 初始页currentPage、初始每页数据数pagesize和数据data
      handleSizeChange: function (size) {
        this.pagesize = size;
        console.log(this.pagesize)  //每页下拉显示数据
      },
      handleCurrentChange: function (currentPage) {
        this.currentPage = currentPage;
        console.log(this.currentPage)  //点击第几页
      },
      handleUserList() {
        qryAllQuestionInfo().then(res => {
          this.userList = res.data
          console.log(res.data);
        });
      },
      handleUpdate(index) {
        console.log(index);
        this.dialogFormVisible = true
        qryQuestionInfoById(index).then(res => {
          this.dialogData = res.data
        });
      },
      handleDelete(index) {
        deleteQuestionInfoById(index).then(res => {
          console.log(res);
          if(res.code==1001){
            this.$message.error('删除失败！');
          }else{
            this.$message.success('删除成功！');
            this.handleUserList() ;
          }
        });
      },
      submitUpdate(){
        updateQuestionInfoById(this.dialogData).then(res => {
          this.$message('修改成功');
        });
      },
    closeDialog() {
      this.handleUserList()
    }
    }
  }
</script>

<style scoped>
  .right {
    display: flex;
    justify-content: flex-end ;
  }
</style>