<template>
  <div>
    <el-table style="width: 100%;"
              :data="question.slice((currentPage-1)*pagesize,currentPage*pagesize)"
    >
      <el-table-column type="index" width="50">
      </el-table-column>
      <el-table-column label="id" prop="id" width="250">
      </el-table-column>
      <el-table-column label="名字" prop="name" width="100">
      </el-table-column>
      <el-table-column label="开始时间" prop="create_date" width="100">
      </el-table-column>
      <el-table-column label="花费时间" prop="spentTime" width="100">
      </el-table-column>
      <el-table-column label="正确率" prop="accuracy" width="100">
      </el-table-column>
      <el-table-column label="学校" prop="sname" width="100">
      </el-table-column>
      <el-table-column label="年级" prop="gname" width="100">
      </el-table-column>
      <el-table-column label="评论" prop="remark" width="100">
      </el-table-column>
      <el-table-column
              align="center" label="操作">
        <template slot-scope="scope">
          <el-button
                  size="mini"
                  @click="showAnswer(scope.row.qid)">查看答题详情
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
            :total="question.length">
    </el-pagination>
    
    
    <el-dialog title="答题详情" :visible.sync="dialogTableVisible">
      <el-table :data="gGooupAndAnswer">
        <el-table-column property="content" label="题目" width="160"></el-table-column>
        <el-table-column property="option1" label="选项1" width="80"></el-table-column>
        <el-table-column property="option2" label="选项2" width="80"></el-table-column>
        <el-table-column property="option3" label="选项3" width="80"></el-table-column>
        <el-table-column property="option4" label="选项4" width="80"></el-table-column>
        <el-table-column property="answer" label="你的答案" width="80"></el-table-column>
        <el-table-column property="result" label="正确答案" width="80"></el-table-column>
        <!--<el-table-column property="success" label="结果" width="80"></el-table-column>-->
        <el-table-column
                label="结果"
                prop="create_date">
          <template slot-scope="scope">
            <i class="el-icon-check green" v-if="scope.row.success==1"></i>
            <i class="el-icon-close red" v-else></i>
            <!--<span style="margin-left: 10px">{{ scope.row.success }}</span>-->
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  
  </div>
</template>

<script>
  import {qryPeopleQuestionDetail} from "@/network/teacher/student";
  import {qryByGid} from "@/network/student/index";
  export default {
    name: "QuestionDetail",
    data() {
      return {
        question: [],
        currentPage: 1, //初始页
        pagesize: 10,    //    每页的数据
        dialogTableVisible:false,
        gGooupAndAnswer:[],
        gid:""
      }
    },
    methods: {
      qryPeopleQuestionDetail() {
        qryPeopleQuestionDetail().then(res => {
          console.log(res);
          this.question = res.data;
        })
      },
      handleSizeChange: function (size) {
        this.pagesize = size;
        console.log(this.pagesize)  //每页下拉显示数据
      },
      handleCurrentChange: function (currentPage) {
        this.currentPage = currentPage;
        console.log(this.currentPage)  //点击第几页
      },
      showAnswer(id) {
        this.dialogTableVisible = true;
        this.gid = id;
        qryByGid(id).then(res => {
          this.gGooupAndAnswer = res.data;
        })
      }
    },
    created() {
      this.qryPeopleQuestionDetail()
    }
  }
</script>

<style scoped>
  .red {
    color: red;
  }
  
  .green {
    color: green;
  }

  .btn{
    float: right;
  }
</style>