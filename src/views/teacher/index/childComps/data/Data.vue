<template>
  <div>
    <el-divider content-position="left">资料下载</el-divider>
    <el-table
            :data="tableData"
            style="width: 100%">
      <el-table-column
              label="文件名称"
      >
        <template slot-scope="scope">
          <i class="el-icon-document"></i>
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column
              label="老师"
              prop="pname">
      </el-table-column>
      <el-table-column
              label="上传时间"
              prop="date">
      </el-table-column>
      <el-table-column
              label="描述"
      >
        <template slot-scope="scope">
          <el-input
                  type="text"
                  placeholder="描述"
                  v-model="scope.row.description"
                  maxlength="20"
                  @blur="updatedes(scope.row.id,scope.row.description)"
                  show-word-limit
          >
          </el-input>
        </template>
      </el-table-column>
      <el-table-column
              align="center">
        <template slot="header" slot-scope="scope">
          <el-button
                  size="mini"
                  @click="dialogFormVisible = true">上传新资料
          </el-button>
        </template>
        <template slot-scope="scope">
          <el-button
                  size="mini"
                  @click="handleDown(scope.$index)">下载
          </el-button>
          <el-button
                  size="mini"
                  @click="handleDelete(scope.$index)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog width="400px" :visible.sync="dialogFormVisible" @close='closeDialog'>
      <el-upload
              class="upload-demo box"
              drag
              action="http://localhost/data/fileUpload"
              multiple
              :file-list="fileList"
              :headers="myHeaders"
      >
        <i class="el-icon-upload"> </i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-dialog>
  
  </div>
</template>

<script>
  import {qryAll} from "@/network/student/data";
  import {deleteFile,updateDesById} from "@/network/teacher/data";
  
  var token = localStorage.getItem('Authorization') // 要保证取到
  export default {
    name: "Data",
    data() {
      return {
        index: '3',
        tableData: [],
        myHeaders: {Authorization: token},
        search: '',
        dialogFormVisible: false,
        fileList: [],
        desc: "",
        time: ""
      };
    },
    components: {},
    methods: {
      qryAll() {
        qryAll().then(res => {
          this.tableData = res.data
          // console.log(res.data);
        });
      },
      handleDown(index) {
        window.location.href = this.tableData[index].url;
      },
      handleDelete(index) {
        // window.location.href = this.tableData[index].url;
        // console.log(this.tableData[index]);
        deleteFile(this.tableData[index]).then(res => {
          this.qryAll();
        });
      },
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
      
      },
      handlePreview(file) {
        console.log(file);
      },
      closeDialog() {
        this.qryAll();
      },
      updatedes(id,des){
        updateDesById(id,des).then(res => {
          this.qryAll();
          this.$message('描述修改成功');
        });
      }
    },
    created() {
      this.qryAll()
    }
  }
</script>

<style scoped>
  .box {
    text-align: center;
  }
  
  .text3 {
    color: green;
  }

</style>