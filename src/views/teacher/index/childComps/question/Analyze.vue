<template>
  <div id="analyze">
    <div class="box1">
      <div style="width:500px;height:300px" ref="ecarts1"></div>
    </div>
    <div class="box2">
      <div style="width:500px;height:300px" ref="ecarts2"></div>
    </div>
    <div class="box3">
      <div class="box3heard">
        <span class="box3span">输入查询:  </span>
        <el-input class="name" placeholder="请输入学生姓名" v-model="name" ></el-input>
        <el-date-picker class="date"
                        type="date"
                        v-model="date"
                        placeholder="选择日期">
        </el-date-picker>
        <el-button type="primary" @click="btnsubmit">点击查询</el-button>
      </div>
      <div style="width:1300px;height:300px" ref="ecarts3"></div>
     {{e1}}
     {{e2}}
      {{e3}}
    </div>
  </div>
</template>

<script>
  import {qryEcharts1And2, qryEcharts3} from "@/network/teacher/question";
  
  var echarts = require("echarts");
  export default {
    name: "Analyze",
    data() {
      return {
        name: "",
        date: "",
        e1: [],
        e2: [],
        e3: {},
        color: [
          "#BFEFFF", "#B22222"
        ]
      }
    },
    methods: {
      qryEcharts1And2() {
        qryEcharts1And2().then(res => {
          // console.log(res.data);
          this.e1 = res.data.echarts1;
          this.e2 = res.data.echarts2;
          this.ecarts1()
          this.ecarts2()
        });
      },
      ecarts1() {
        var myChart = echarts.init(this.$refs.ecarts1);
        // console.log(e1);
        myChart.setOption({
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            left: 10,
            data: ['正确', '错误']
          },
          color: this.color,
          series: [
            {
              name: '数据信息',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                {value: this.e1[0].count, name: '正确'},
                {value: this.e1[1].count, name: '错误'},
              ]
            }
          ]
        })
      },
      ecarts2() {
        var myChart = echarts.init(this.$refs.ecarts2);
        console.log(this.e2);
        var arr = [];
        var h = [];
        h.push("答题情况");
        h.push("正确");
        h.push("错误");
        arr.push(h);
        for (var i = 0; i < this.e2.length; i++) {
          var arr1 = [];
          arr1.push(this.e2[i].name);
          arr1.push(this.e2[i].success);
          arr1.push(this.e2[i].fail);
          arr.push(arr1);
        }
        myChart.setOption({
          legend: {},
          tooltip: {},
          dataset: {
            source: arr
          },
          color: this.color,
          xAxis: {type: 'category'},
          yAxis: {},
          // Declare several bar series, each will be mapped
          // to a column of dataset.source by default.
          series: [
            {type: 'bar'},
            {type: 'bar'},
          ]
        })
      },
      ecarts3() {
        var myChart = echarts.init(this.$refs.ecarts3);
        myChart.setOption({
          title: {
            text: ''
          },
          tooltip: {
            trigger: 'axis'
          },
          color: this.color,
          legend: {
            data: [ '正确','错误']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: this.e3.dataArr
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '正确',
              type: 'line',
              // stack: '总量',
              data: this.e3.successArr
            },
            {
              name: '错误',
              type: 'line',
              // stack: '总量',
              data: this.e3.failArr
            }
          ]
        })
      },
      btnsubmit() {
        qryEcharts3(this.name, this.date).then(res => {
            console.log(res.data);
            this.e3 = res.data
            this.ecarts3();
          this.$message.success(res.data.name+"查询成功！");
        })
      }
    },
    mounted() {
      this.qryEcharts1And2()
      // this.qryEcharts3()
    },
    created() {
      // qryEcharts1And2().then(res => {
      //   this.e1 = res.data.echarts1;
      //   this.e2 = res.data.echarts2;
      //   this.ecarts1()
      //   this.ecarts2()
      // });
    }
  }
</script>

<style scoped>
  #analyze {
    /*background: #c5d5e2;*/
    min-height: 650px;
  }
  
  .box1 {
    float: left;
    /*background: #04bdb9;*/
    width: 40%;
  }
  
  .box2 {
    float: right;
    /*background: #04bdb9;*/
    width: 55%;
  }
  
  .box3 {
    margin-top: 10px;
    float: right;
    /*background: #e6e8db;*/
    width: 100%;
  }
  
  .name {
    width: 200px;
  }
  
  .date {
    width: 200px;
  }
  
  .box3heard {
    display: flex;
    flex-direction: row;
    line-height: 40px;
    margin-bottom: 10px;
  }
  
  .box3span {
    font-size: 20px;
    color: #71bdbd;
  }
</style>