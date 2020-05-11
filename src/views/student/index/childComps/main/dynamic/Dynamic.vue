<template>
  <div class="box">
    <div class="box_left">
      <PublishView></PublishView>
      <el-collapse-transition v-for="discussion in discussions">
        <ItemView :itemdiscussion="discussion" :people="people"></ItemView>
      </el-collapse-transition>
    </div>
    <div class="box_right">
      <el-card class="box_right_card">
        <div slot="header" class="clearfix">
          <span>昨日答题排行榜</span>
        </div>
        <div v-for="(item,index) in group" class="text item">
          <!--{{index+1}}-{{item.p_name }}{{item.times }}-->
          <!--<el-tag type="success">标签二</el-tag>-->
          <li class="li">
            <span>{{index+1}}</span>
            <span>{{item.p_name }}</span>
            <span>{{item.times }}次</span>
          </li>
        </div>
      </el-card>
      <div id="ecarts1" style="width:500px;height:300px" ref="myEchart"></div>
      <!--{{info1}}-->
      <!--{{info2}}-->
      <!--{{info3}}-->
      <!--{{info4}}-->
    </div>
  
  </div>
</template>

<script>
  import PublishView from '@/views/student/index/childComps/main/dynamic/childComps/Publish'
  import ItemView from '@/views/student/index/childComps/main/dynamic/childComps/Item'
  import {qryNotParentId, groupByPIdQry, qryQuestionInfoByGroup} from "@/network/student/index";
  
  export default {
    name: "Dynamic",
    data() {
      return {
        discussions: {},
        people: {},
        img: "",
        group: [],
        info1: {},
        info2: {},
        info3: {},
        info4: {}
      }
    },
    components: {
      PublishView,
      ItemView
    },
    mounted() {
      this.qryall()
      this.draw()
    },
    methods: {
      qryall() {
        qryNotParentId().then(res => {
          console.log("*****");
          console.log(res);
          console.log("*****");
          this.discussions = res.data.discussions;
          this.people = res.data.people;
        })
      },
      groupByPIdQry() {
        groupByPIdQry().then(res => {
          console.log(res);
          this.group = res.data;
        })
      },
      qryQuestionInfoByGroup() {
        qryQuestionInfoByGroup().then(res => {
          console.log("tu");
          console.log(res);
          return res.data;
          for (var i = 0; i < res.data.length; i++) {
            if (res.data[i].classify == 1) {
              this.info1 = res.data[i];
            }
            if (res.data[i].classify == 2) {
              this.info2 = res.data[i];
            }
            if (res.data[i].classify == 3) {
              this.info3 = res.data[i];
            }
            if (res.data[i].classify == 4) {
              this.info4 = res.data[i];
            }
          }
        })
      },
      draw() {
        var echarts = require("echarts");
        var myChart = echarts.init(this.$refs.myEchart);
        qryQuestionInfoByGroup().then(res => {
          console.log("tu");
          console.log(res);
          for (var i = 0; i < res.data.length; i++) {
            if (res.data[i].classify == 1) {
              this.info1 = res.data[i];
            }
            if (res.data[i].classify == 2) {
              this.info2 = res.data[i];
            }
            if (res.data[i].classify == 3) {
              this.info3 = res.data[i];
            }
            if (res.data[i].classify == 4) {
              this.info4 = res.data[i];
            }
          }
          var count1 = this.info1.count;
          var count2 = this.info2.count;
          var count3 = this.info3.count;
          var count4 = this.info4.count;
          var success1 =  Math.floor(this.info1.success*100/count1);
          var success2 = Math.floor(this.info2.success*100/count2);
          var success3 = Math.floor(this.info3.success*100/count3);
          var success4 = Math.floor(this.info4.success*100/count4);
          console.log(this.info1);
          console.log("success4: " + success4);
          // 绘制图表
          myChart.setOption({
            // title: {
            //   // text: 'ECharts 入门示例'
            // },
            // tooltip: {},
            // xAxis: {
            //   data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            // },
            // yAxis: {},
            // series: [{
            //   name: '销量',
            //   type: 'bar',
            //   data: [5, 20, 36, 10, 10, 20]
            // }]
            title: {
              // text: 'ECharts 入门示例'
            },
            // backgroundColor: '#45515a', //背景颜色
            color: [
              '#5D84FF',
            ],
            tooltip: {
              trigger: 'axis'
            },
            radar: [
              {
                indicator: [
                  {text: '加法', max: 100},
                  {text: '减法', max: 100},
                  {text: '乘法', max: 100},
                  {text: '除法', max: 100}
                ],
                center: ['25%', '40%'],
                radius: 80
              },
            ],
            series: [{
              type: 'radar',
              tooltip: {
                trigger: 'item'
              },
              areaStyle: {},
              data: [
                {
                  value: [success1, success2, success3, success4],
                  name: '学生个人能力评估'
                }
              ]
            }]
          });
        })
      },
      created() {
        this.groupByPIdQry()
          // this.$nextTick(function () {
          //
          // })
      },
      
    }
  }


</script>

<style scoped>
  .box-card {
    width: 700px;
    min-height: 150px;
    margin-top: 20px;
  }
  
  .box {
    display: flex;
    justify-content: space-between;
  }
  
  .box_right {
    width: 250px;
    /*border-right:  1px solid #e0e0e0;*/
    /*margin-right: 5px;*/
  }
  
  .box_right_card {
    width: 250px;
    min-height: 100px;
    margin-top: 20px;
  }
  
  .item {
    width: 286px;
    height: 30px;
    margin-left: 30px;
    margin-bottom: 15px;
  }
  
  .li {
    list-style-type: none;
    line-height: 30px;
    display: flex;
    justify-content: space-between;
  }
</style>