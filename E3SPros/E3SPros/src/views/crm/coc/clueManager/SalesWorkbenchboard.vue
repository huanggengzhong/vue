<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" style="height:25px">
      <!--  -->
      <!-- <span > &nbsp;</span> -->
      <!-- <br>  -->
    </div>

    <!-- <div class="filter-container filter-title">电销主管看板</div> -->
    <div class="filter-container filter-params param-left query-params">
      <!-- <el-form label-position="right"> -->
      <el-row>
        <el-col :span="16">
          <el-row>
            <el-carousel height="220px">
              <!-- indicator-position="outside" -->
              <el-carousel-item v-for="item in 4" :key="item">
                <!-- <h3>{{ item } }</h3> -->
              </el-carousel-item>
            </el-carousel>
          </el-row>

          <el-row>
            <div class="filter-container filter-title">业绩榜 截至昨天(2019-6-16)</div>
            <el-col :span="8.0">
              <div id="myChart" :style="{width: '300px', height: '230px'}"></div>
            </el-col>
            <el-col :span="12">
              <div id="formChart" :style="{width: '550px', height: '230px'}"></div>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="8">
          <el-row>
            <div class="myNoticeTopArea" :span="24">
              <h5 style="
    margin-bottom: 0px;
    margin-top: 0px;
">最新公告</h5>
              <p style="position: absolute;right: 0;top: -4px;">更多</p>
              <!-- <div class="filter-container filter-title">
        查询条件
        <div style="float:right">
          <el-button type="primary" size="small" @click="queryXZ()">查询</el-button>
          <el-button size="small" @click="commitXZ">确认</el-button>
          <el-button size="small" @click="resetXZ">重置</el-button>
        </div>
              </div>-->
              <ul class="list-group">
                <li class="list-group-item" style="border-top:none">
                  <a>东风标致携8款产品亮相，包括2款量产产品</a>
                  <span class="newsTime">2019-08-05</span>
                </li>
                <li class="list-group-item">
                  <a>保军运 迎大庆 确保安全环保“零事故、零事件”</a>
                  <span class="newsTime">2019-08-05</span>
                </li>
                <li class="list-group-item">
                  <a>东风汽车股份发布质量中期事业计划“MUST”行动</a>
                  <span class="newsTime">2019-08-05</span>
                </li>
                <li class="list-group-item">
                  <a>神龙公司：压实安全生产责任制</a>
                  <span class="newsTime">2019-08-05</span>
                </li>
                <li class="list-group-item">
                  <a>2019东风汽车·武汉网球公开赛全球开票</a>
                  <span class="newsTime">2019-08-05</span>
                </li>
                <li class="list-group-item">
                  <a>2019东风汽车·武汉网球公开赛全球开票</a>
                  <span class="newsTime">2019-08-05</span>
                </li>
              </ul>
            </div>
          </el-row>

          <el-row>
            <h5 style="
                margin-bottom: 0px;
                margin-top: 0px;
            ">待办任务</h5>
            <el-col :span="8">
              <div id="pieChart" :style="{width: '160px', height: '255px'}"></div>
            </el-col>
            <el-col :span="8">
              <div id="pieChart_2" :style="{width: '160px', height: '255px'}"></div>
            </el-col>
            <el-col :span="8">
              <div id="pieChart_3" :style="{width: '160px', height: '255px'}"></div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>

      <!-- </el-form> -->
    </div>
  </div>
</template>
<script>
import ApplyExtensionTimes from "@/components/crm/Time/ApplyExtensionTimes";
import ServiceMenuNumber from "@/components/crm/textbox/Public/ServiceMenuNumber";
import Table from "@/components/crm/table/Table";
import echarts from 'echarts'
import { crmApis } from "@/api/graphQLApiList/crm";
import RelatedBenchmarkCar from "@/components/crm/EjectWindows/RelatedBenchmarkCar";
// let echarts = require("echarts/lib/echarts");
// // 引入柱状图组件
// require("echarts/lib/chart/bar");
// // 引入提示框和title组件
// require("echarts/lib/component/tooltip");
// require("echarts/lib/component/title");
export default {
  name: "SalesWorkbenchboard",
  components: {
    ApplyExtensionTimes,
    ServiceMenuNumber,
    Table,
    RelatedBenchmarkCar
  },
  mounted() {
    this.draw();
    this.formChart();
    this.pieChart();
    this.pieChart_2();
    this.pieChart_3();
  },
  data() {
    return {
      toggleParam: false,
      delayreason: "",

      tabledatas_week: {
        // 操作列
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [
          { label: "电销员", value: "dianxiao" },
          { label: "回访数", value: "serverOrder" },
          { label: "转意向数", value: "serverOrder" },
          { label: "到店数", value: "serverOrder" },
          { label: "成交数", value: "serverOrder" },
          { label: "战败数", value: "serverOrder" },
          { label: "战败率", value: "serverOrder" },
          { label: "到店率", value: "serverOrder" }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.csBuComplaintDelayQueryFindAll,
          apiQueryRow: ["serverOrder", "createdDate", "delayReson"],
          params: {
            delayId: "",
            createdDateStart: "",
            createdDateEnd: "",
            serverOrder: "",
            delayStatus: ""
          }
        }
      },

      applyEx: {
        value: ""
      },
      serviceMenu: {
        input: ""
      }
    };
  },
  methods: {
    draw() {
      // 初始化echarts实例
      let myChart = echarts.init(document.getElementById("myChart")); // 绘制图表

      var option = {
        title: {
          text: "有效线索跟进情况",
          // subtext: '纯属虚构',
          x: "center",
          y: "top"
        },
        tooltip: {
          trigger: "item",
          formatter: "<br/>{b}:  ({d}%)"
        },
        legend: {
          orient: "horizontal",
          y: "bottom",
          x: "center",
          data: ["按时已回访", "超时已回访", "未超时待回访", "超时未回访"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            label: {
              formatter: "{d}%",
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            data: [
              { value: 10, name: "超时未回访" },
              { value: 20, name: "未超时待回访" },
              { value: 60, name: "超时已回访" },
              { value: 10, name: "按时已回访" }
            ]
          }
        ]
      };
      //防止越界，重绘canvas
      window.onresize = myChart.resize;
      myChart.setOption(option); //设置option
    },
    formChart() {
      // 初始化echarts实例
      let formChart = echarts.init(document.getElementById("formChart")); // 绘制图表

      var option = {

    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
           var html=params[0].name+"<br>";
            for(var i=0;i<params.length;i++){
            	 html+='<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'+params[i].color+';"></span>'
                if(option.series[params[i].seriesIndex].valueType=="percent"){
                    html+=params[i].seriesName+":"+params[i].value+"%<br>";
                }else{
                   html+=params[i].seriesName+":"+params[i].value+"<br>";
                }
            }
            return html;
        }
    },
    // toolbox: {
    //     feature: {
    //         dataView: {show: true, readOnly: false},
    //         magicType: {show: true, type: ['line', 'bar']},
    //         restore: {show: true},
    //         saveAsImage: {show: true}
    //     }
    // },
     legend: {
          orient: "horizontal",
          y: "bottom",
          x: "center",
        data:['线索数','到店数','成交数','线索转化率','成交贡献度','线索战败率']
    },
    xAxis: [
        {
            type: 'category',
            data: ['垂直媒体合作','电商','专营店热线'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '条数',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value} 条'
            }
        },
        {
            type: 'value',
            name: '百分比',
            min: 0,
            max: 10,
            interval: 5,
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            name:'线索数',
            type:'bar',
            data:[26, 59, 90],
            itemStyle: {
							normal: {
								label: {
									show: true, //开启显示
									position: 'top', //在上方显示
									textStyle: { //数值样式
										color: 'black',
										fontSize: 13
									}
								}
							}
						},
        },
        {
            name:'到店数',
            type:'bar',
            data:[20, 49, 70],
            itemStyle: {
							normal: {
								label: {
									show: true, //开启显示
									position: 'top', //在上方显示
									textStyle: { //数值样式
										color: 'black',
										fontSize: 13
									}
								}
							}
						},
        },
        {
            name:'成交数',
            type:'bar',
            data:[20, 49, 70],
            itemStyle: {
							normal: {
								label: {
									show: true, //开启显示
									position: 'top', //在上方显示
									textStyle: { //数值样式
										color: 'black',
										fontSize: 13
									}
								}
							}
						},
        },

        {
            name:'线索转化率',
            type:'line',
            yAxisIndex: 1,
            data:[1.0, 4.2, 6.3],
            valueType:"percent",
             itemStyle: {
							normal: {
								label: {
									show: true, //开启显示
									position: 'top', //在上方显示
									textStyle: { //数值样式
										color: 'black',
										fontSize: 13
									},
									formatter : '{c0}%'
								}
							}
						},


        },
        {
            name:'成交贡献度',
            type:'line',
            yAxisIndex: 1,
            data:[2.0, 2.2, 3.3],
            valueType:"percent",
            itemStyle: {
							normal: {
								label: {
									show: true, //开启显示
									position: 'top', //在上方显示
									textStyle: { //数值样式
										color: 'black',
										fontSize: 13
									},
									formatter : '{c0}%'
								}
							}
						},
        },
        {
            name:'线索战败率',
            type:'line',
            yAxisIndex: 1,
            data:[1.0, 1.2, 2.3],
            valueType:"percent",
            itemStyle: {
							normal: {
								label: {
									show: true, //开启显示
									position: 'top', //在上方显示
									textStyle: { //数值样式
										color: 'black',
										fontSize: 13
									},
									formatter : '{c0}%'
								}
							}
						},
        }
    ]
      };
      //防止越界，重绘canvas
      window.onresize = formChart.resize;
      formChart.setOption(option); //设置option
    },

    pieChart() {
      // 初始化echarts实例
      let pieChart = echarts.init(document.getElementById("pieChart")); // 绘制图表

      var option = {
        tooltip: {
          trigger: "item",
          formatter: "{b}: {c} ({d}%)"
        },
        legend: {
          icon:"circle",
          selectedMode:false,
          orient: "horizontal",
          x: "center",
          y: "center",
          formatter: '首次回访\n 8/12',
          textStyle: {
            fontSize: 13
          },
          data: ["首次回访"]
        },
        series: [
          {
            name: "首次回访",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: false,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            //  label: {
            //             normal: {
            //                 position:'inside',
            //                 align:'center',
            //                 fontSize: 18,
            //                 fontFamily:'Microsoft YaHei',
            //                 color:"#FFEFE0"
            //             }
            //         },
            data: [
              { value: 8, name: "首次回访" },
              { value: 4, name: "未首次回访" },

            ]
          }
        ]
      };
      //防止越界，重绘canvas
      window.onresize = pieChart.resize;
      pieChart.setOption(option); //设置option
    },
    pieChart_2() {
      // 初始化echarts实例
      let pieChart_2 = echarts.init(
        document.getElementById("pieChart_2")
      ); // 绘制图表

      var option = {
        tooltip: {
          trigger: "item",
          formatter: "{b}: {c} ({d}%)"
        },
        legend: {
          icon:"circle",
          selectedMode:false,
          orient: "horizontal",
          x: "center",
          y: "center",
          formatter: '待回访\n 8/12',
          textStyle: {
            fontSize: 13
          },
          data: ["待回访"]
        },
        series: [
          {
            name: "待回访",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: false,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            //  label: {
            //             normal: {
            //                 position:'inside',
            //                 align:'center',
            //                 fontSize: 18,
            //                 fontFamily:'Microsoft YaHei',
            //                 color:"#FFEFE0"
            //             }
            //         },
            data: [
              { value: 8, name: "待回访" },
              { value: 4, name: "非待回访" },

            ]
          }
        ]
      };
      //防止越界，重绘canvas
      window.onresize = pieChart_2.resize;
      pieChart_2.setOption(option); //设置option
    },
    pieChart_3() {
      // 初始化echarts实例
      let pieChart_3 = echarts.init(
        document.getElementById("pieChart_3")
      ); // 绘制图表

      var option = {
        tooltip: {
          trigger: "item",
          formatter: "{b}: {c} ({d}%)"
        },
        legend: {
          icon:"circle",
          selectedMode:false,
          orient: "horizontal",
          x: "center",
          y: "center",
          formatter: '预约到店\n 8/12',
          textStyle: {
            fontSize: 13
          },
          data: ["预约到店"]
        },
        series: [
          {
            name: "预约到店",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: false,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            //  label: {
            //             normal: {
            //                 position:'inside',
            //                 align:'center',
            //                 fontSize: 18,
            //                 fontFamily:'Microsoft YaHei',
            //                 color:"#FFEFE0"
            //             }
            //         },
            data: [
              { value: 8, name: "预约到店" },
              { value: 4, name: "未预约到店" },

            ]
          }
        ]
      };
      //防止越界，重绘canvas
      window.onresize = pieChart_3.resize;
      pieChart_3.setOption(option); //设置option
    },
    query: function() {
      this.queryObj.params = this.$refs.applytime.value;
      console.log(crmApis.csBuComplaintDelayQueryFindAll.ServiceCode);
      this.queryObj.params.serverOrder = this.$refs.sermenu.input;
      this.queryObj.params.delayStatus = this.delayreason;
      this.$refs.table.getDatas();
    },
    reset: function() {
      this.$refs.applytime.reset();
      this.$refs.sermenu.reset();
      this.delayreason = "";
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    }
  }
};
</script>
<style>
.filter-params .el-form-item__label {
  margin-right: 0px;
}
.query-params .el-col {
  margin-bottom: 0px;
}

/* 走马灯属性 */
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 250px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

/* 我的公告样式 */
.toDoArea {
  height: 120px;
}
.toDoPart {
  height: 117px;
  padding: 2px;
  margin: 2px 18px;
  background-color: #a6beec;
}
.menuArea {
  height: 108px;
  margin: 7px 2px;
  background: white;
}
.formArea {
  height: 276px;
  margin: 2px;
  background: white;
}
.myNoticeTopArea {
  height: 228px;
  margin: 7px 2px;
  background: white;
}
.myNoticeBtmArea {
  height: 276px;
  margin: 2px;
  background: white;
}
.toDoNum {
  text-align: center;
  top: 28%;
  position: relative;
}
.toDoText {
  text-align: center;
  position: relative;
  top: 35%;
}
.partTitle {
  padding: 13px;
  display: block;
}
.list-group-item {
  border-left: none;
  border-right: none;
  list-style: none;
  padding: 10px 5px;
  border-bottom: 1px solid #ccc;
}
.list-group {
  padding: 0 6px;
  font-size: 12px;
  margin: 0;
}
.newsTime {
  display: inline-block;
  float: right;
  color: #aba5a5;
}
.menuPart {
  font-size: 12px;
  text-align: center;
  height: 65px;
  line-height: 28px;
}
.menuPartIcon {
  border-radius: 18px;
  text-align: center;
  height: 29px;
  width: 29px;
  font-size: 20px;
  line-height: 29px;
  border: 1px solid rgb(133, 130, 130);
}
a:focus {
  color: #6e9cf1;
}
a:hover {
  color: #466db6;
}

/* 我的公告样式 */

/* 文字左对齐 */
.param-left .myNoticeTopArea {
  text-align: left;
}
.filter-params {
  text-align: left;
}
</style>.
