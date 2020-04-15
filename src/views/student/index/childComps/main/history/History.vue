<template>
  <div class="history">
    <el-table
            :data="qGroup"
            style="width: 100%">
      <el-table-column
              label="时间"
              prop="create_date">
        <template slot-scope="scope">
          <i class="el-icon-timer"></i>
          <span style="margin-left: 10px">{{ scope.row.create_date }}</span>
        </template>
      </el-table-column>
      <el-table-column
              label="时长"
              prop="spentTime">
      </el-table-column>
      <el-table-column
              label="正确率"
      >
        <template slot-scope="scope">
          <span style="margin-left: 10px" :class="{red:scope.row.accuracy<0.6}">{{ scope.row.accuracy*100 }}%</span>
        </template>
      </el-table-column>
      <el-table-column
              align="center" label="操作">
        <template slot-scope="scope">
          <el-button
                  size="mini"
                  @click="showAnswer(scope.row.id)">查看答题详情
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="答题详情" :visible.sync="dialogTableVisible">
      <el-table :data="gGooupAndAnswer">
        {{option2}}
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
      <div style="margin: 20px 0;">
        <span class="text">分享心情</span>
        <el-input
                type="textarea"
                placeholder="请输入内容"
                v-model="textarea"
                maxlength="30"
                show-word-limit
        >
        </el-input>
        <el-button type="primary" class="btn" @click="submitRemark">提交</el-button>
      </div>
    </el-dialog>
  
  </div>
</template>

<script>
  import {qryQGroupByPid, qryByGid,updateQGroupRemarkById} from "@/network/student/index";
  
  export default {
    name: "History",
    data() {
      return {
        qGroup: [],
        gGooupAndAnswer: [],
        gid:"",
        dialogTableVisible: false,
        textarea: ''
      }
    }
    ,
    methods: {
      qryQGroupByPid() {
        qryQGroupByPid().then(res => {
          // console.log(res);
          this.qGroup = res.data;
        })
      },
      showAnswer(id) {
        this.dialogTableVisible = true;
        this.gid = id;
        qryByGid(id).then(res => {
          this.gGooupAndAnswer = res.data;
        })
      },
      submitRemark(){
        updateQGroupRemarkById(this.gid,this.textarea).then(res => {
          this.$message.success('分享成功啦~~');
        })
      }
    },
    created() {
      this.qryQGroupByPid()
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
  
  .history {
    margin-top: 20px;
  }
  .text{
    font-size: 20px;
    line-height: 30px;
  }
  .btn{
    float: right;
    margin-top: 8px;
  }
</style>