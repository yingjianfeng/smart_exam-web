<template>
  <div>
    <el-card class="box-card">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/dept' }">部门员工管理</el-breadcrumb-item>
        <el-breadcrumb-item>部门信息管理</el-breadcrumb-item>
      </el-breadcrumb>
      <el-table
              :data="tableData"
              height="250"
              border
              style="width: 100%">
        <el-table-column
                prop="did"
                label="部门编号"
        >
        </el-table-column>
        <el-table-column
                prop="dname"
                label="部门名称"
        >
        </el-table-column>
      </el-table>
      <template>
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="params.page"
                :page-sizes="[5, 10, 15, 20]"
                :page-size="params.pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="params.total">
        </el-pagination>
      </template>
    </el-card>
    
  </div>
</template>

<script>
  export default {
    name: "dept",
    data(){
      return{
        params:{
          pageSize: 5,
          page: 1,
          total: 10,
        },
        tableData: [{
          did: '01',
          dname: '开发部',
        }, {
          did: '02',
          dname: '测试部',
        }]
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
    
  }
</script>

<style scoped>
  .el-breadcrumb{
    height: 30px;
  }
</style>