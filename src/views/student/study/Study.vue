<template>
  <div>
    <HeaderView :activeIndex="index"></HeaderView>
    <el-main>
      <el-divider content-position="left">资料下载</el-divider>
      <el-table
              :data="tableData.filter(data => !search || data.description.toLowerCase().includes(search.toLowerCase()))"
              style="width: 100%">
        <el-table-column
                label="文件名称"
                prop="name">
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
                prop="description">
        </el-table-column>
        <el-table-column
                align="center">
          <template slot="header" slot-scope="scope">
            <el-input
                    v-model="search"
                    size="mini"
                    placeholder="输入关键字搜索"/>
          </template>
          <template slot-scope="scope">
            <el-button
                    size="mini"
                    @click="handleEdit(scope.$index)">下载</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </div>
</template>

<script>
  import HeaderView from '@/views/student/index/childComps/header/Header'
  import {qryAll} from "@/network/student/data";
  export default {
    name: "Study",
    data() {
      return {
        index: '3',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        search: ''
      };
    },
    components: {
      HeaderView,
    },
    methods: {
      qryAll(){
        qryAll().then(res => {
          this.tableData = res.data
          // console.log(res.data);
        });
      },
      handleEdit(index) {
        window.location.href=this.tableData[index].url;
      }
    },
    created() {
      this.qryAll()
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
  .el-button{
    text-align: center;
  }
</style>