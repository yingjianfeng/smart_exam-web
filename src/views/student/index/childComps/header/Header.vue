<template>
  <div id="header">
    <div class="header_left">
      <img src="../../../../../assets/img/logo.png" height="60" width="60"/>
      <el-menu :default-active="activeIndex" mode="horizontal">
        <el-menu-item index="1" @click="toindex">首页</el-menu-item>
        <el-menu-item index="2" @click="toquestions">题库</el-menu-item>
        <el-menu-item index="3" @click="tostudy">学习</el-menu-item>
        <el-menu-item index="4" @click="todiscussion">讨论区</el-menu-item>
      </el-menu>
    </div>
    <div class="header_right">
      <el-autocomplete
              popper-class="my-autocomplete"
              v-model="state"
              :fetch-suggestions="querySearch"
              placeholder="请输入内容"
              @select="handleSelect">
        <i
                class="el-icon-s-promotion el-input__icon"
                slot="suffix"
                @click="handleIconClick">
        </i>
        <template slot-scope="{ item }">
          <div class="name">{{ item.value }}</div>
          <span class="addr">{{ item.address }}</span>
        </template>
      </el-autocomplete>
      
      <el-dropdown @command="handleCommand">
        <el-avatar class="headerimg"
                   :src="info.img"></el-avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="information">查看资料</el-dropdown-item>
          <el-dropdown-item command="form/login">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div></div>
    
    
    </div>
  
  </div>
</template>

<script>
  import {qryInfo} from "@/network/student/info";
  
  export default {
    name: "Header",
    props: {
      activeIndex: {
        type: String,
        default: "1"
      }
    },
    
    data() {
      return {
        // activeIndex: '1',
        restaurants: [],
        state: '',
        info:{
    
        }
      };
    },
    methods: {
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          {"value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号"},
          {"value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号"},
          {"value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113"},
          {"value": "泷千家(天山西路店)", "address": "天山西路438号"},
        ];
      },
      handleSelect(item) {
        console.log(item);
      },
      handleIconClick(ev) {
        console.log(ev);
      },
      toindex() {
        this.$router.push("/index/dynamic");
      },
      toquestions() {
        this.$router.push("/questions/items");
      },
      tostudy() {
        this.$router.push("/study");
      },
      todiscussion() {
        this.$router.push("/discussione");
      },
      
      handleCommand(command) {
        if(command=='form/login'){
          localStorage.removeItem("Authorization");
        }
        this.$router.push("/" + command);
      },
      qryInfo() {
        qryInfo().then(res => {
          console.log(res);
          this.info = res.data;
        });
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    },
    created() {
      this.qryInfo()
    }
  }
</script>

<style scoped>
  #header img {
    height: 60px;
    width: 100px;
  }
  
  #header {
    /*background: #04bdb9;*/
    width: 1200px;
    height: 60px;
    margin: 0 auto;
    /*margin-bottom: 10px;*/
    display: flex;
    justify-content: space-between;
  }
  
  .header_right {
    width: 400px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .header_left {
    display: flex;
    justify-content: space-between;
  }
  
  .header_right_imgdiv {
    height: 40px;
  }
  
  
  .my-autocomplete li {
    line-height: normal;
    padding: 7px;
  }
  
  .my-autocomplete li .name {
    text-overflow: ellipsis;
    overflow: hidden;
  }
  
  .my-autocomplete li .addr {
    font-size: 12px;
    color: #b4b4b4;
  }
  
  .my-autocomplete li .highlighted .addr {
    color: #ddd;
  }
  
  .headerimg {
    height: 60px;
    width: 60px;
  }


</style>