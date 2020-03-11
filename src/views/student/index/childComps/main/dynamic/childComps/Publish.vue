<template>
  <el-card class="box-card">
    <el-input
            class="textarea"
            type="textarea"
            :autosize="{ minRows: 5, maxRows: 5}"
            placeholder="请输入内容"
            v-model="discussion.content">
    </el-input>
    <div>
      <el-upload
              action="http://localhost/discussion/imgUpload"
              :headers="myHeaders"
              list-type="picture-card"
              :limit = "1"
              :file-list="fileList"
              :on-success="handleSuccess"
              :on-remove="handleRemove"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible"
                 class="upimg">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </div>
    <div class="footer">
      <div></div>
      <el-button type="primary" @click="submit">发 表</el-button>
    </div>
  </el-card>
</template>

<script>
  import {insertDiscussion,deleteImg} from "@/network/student/index";
  
  var token = localStorage.getItem('Authorization') // 要保证取到
  export default {
    name: "Publish",
    data() {
      return {
        fileList:[],
        dialogImageUrl: '',
        dialogVisible: false,
        myHeaders: {Authorization: token},
        discussion: {
          content: "",
          imgs: "",
        }
      }
    },
    methods: {
      handleSuccess(response, file, fileList) {
        this.discussion.imgs = fileList[0].response.data;
      },
      submit() {
        insertDiscussion(this.discussion);
        console.log("success");
      },
      handleRemove(file, fileList) {
        deleteImg(this.discussion.imgs);
        console.log("deleteImg success "+this.discussion.imgs);
      }
    }
  }
</script>

<style>
  .textarea {
    margin-bottom: 5px;
  }
  
  .el-upload--picture-card {
    width: 80px;
    height: 80px;
    line-height: 80px;
  }
  
  .el-upload-list--picture-card .el-upload-list__item {
    width: 80px;
    height: 80px;
    line-height: 80px;
  }
  
  .footer {
    display: flex;
    justify-content: space-between;
  }
</style>