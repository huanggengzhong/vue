<template>
  <div
    id="dashboard-container"
    class="dashboard-container"
  >
    <el-col :span="17">
      <div
        class="toDoArea"
        :span="24"
      >
        <el-col
          class="toDoPart"
          v-for='(toDoItem,index) in toDoItems'
          :key="index"
          :style="toDoItem.toDoStyle"
        >
          <div class="toDoNum">{{toDoItem.number}}</div>
          <div class="toDoText">
            <a>{{toDoItem.text}}</a>
          </div>
        </el-col>
      </div>
      <div
        class="menuArea"
        :span="24"
      >
        <span class="partTitle">
          <a>{{'快捷菜单'}}</a>
        </span>
        <el-col
          class="menuPart"
          :span="3"
          v-for="(menuItem,index) in menuItems"
          :key="index"
        >
          <div
            class="menuIcon"
            :style="menuItem.menuStyle"
            @click="linkTo(menuItem.path)"
          ></div>
          <div class="menuPartText">
            <a>{{menuItem.text}}</a>
          </div>
          <i
            class="el-icon-close closeIcon"
            v-show="isClose"
            @click="delMenuItem(index)"
          ></i>
        </el-col>
        <el-col
          v-if="menuItems.length < 7"
          class="menuPart menuPartAdd"
          :span="3"
        >
          <i
            class="el-icon-plus menuPartAddIcon"
            @click="addMenu()"
          ></i>
          <div class="menuPartText">
            <a>添加</a>
          </div>
        </el-col>
        <el-col
          v-else
          class="menuPart menuPartAdd"
          :span="3"
        >
          <i
            class="el-icon-minus menuPartAddIcon"
            @click="delMenu()"
          ></i>
          <div class="menuPartText">
            <a>删除</a>
          </div>
        </el-col>
      </div>
      <div
        class="formArea"
        :span="24"
      >
        <span class="partTitle">{{'业绩报表'}}</span>
        <div
          id="formChart"
          :style="{width: '880px', height: '240px', margin: '0 auto'}"
        ></div>
      </div>
    </el-col>
    <el-col :span="6">
      <div
        class="myNoticeTopArea"
        :span="24"
      >
        <span class="partTitle">{{'我的公告'}}</span>
        <ul class="list-group">
          <li
            class="list-group-item"
            style="border-top:none"
          >
            <a>东风汽车携8款产品亮相，包括2款量产产品</a>
            <span class="newsTime">15:09</span>
          </li>
          <li class="list-group-item">
            <a>保军运 迎大庆 确保安全环保“零事故、零事件”</a>
            <span class="newsTime">16:00</span>
          </li>
          <li class="list-group-item">
            <a>东风汽车股份发布质量中期事业计划“MUST”行动</a>
            <span class="newsTime">18:10</span>
          </li>
          <li class="list-group-item">
            <a>东风汽车：压实安全生产责任制</a>
            <span class="newsTime">19:00</span>
          </li>
          <li class="list-group-item">
            <a>2019东风汽车·武汉网球公开赛全球开票</a>
            <span class="newsTime">19:30</span>
          </li>
        </ul>
      </div>
      <div
        class="myNoticeBtmArea"
        :span="24"
      >
        <span class="partTitle">{{'我的公告'}}</span>
        <div
          id="myChart"
          :style="{width: '312px', height: '275px'}"
        ></div>
      </div>
    </el-col>
    <AddMenu
      @getAddMenu="dealAddMenu"
      :addMenuVisible="addMenuVisible"
    ></AddMenu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import md5 from "js-md5";
import echarts from "echarts";
import AddMenu from "./addMenu";
export default {
  name: "Dashboard",
  components: {
    AddMenu
  },
  computed: {
    ...mapGetters(["name"])
  },
  data() {
    return {
      addMenuVisible: false,
      isClose: false,
      backgroundArr: [
        "url(" + require("@/assets/icon1.png") + ")",
        "url(" + require("@/assets/icon2.png") + ")",
        "url(" + require("@/assets/icon3.png") + ")",
        "url(" + require("@/assets/icon4.png") + ")",
        "url(" + require("@/assets/icon5.png") + ")",
        "url(" + require("@/assets/icon1.png") + ")",
        "url(" + require("@/assets/icon2.png") + ")",
        "url(" + require("@/assets/icon3.png") + ")",
        "url(" + require("@/assets/icon4.png") + ")",
        "url(" + require("@/assets/icon5.png") + ")"
      ],
      toDoItems: [
        {
          number: 143,
          text: "滚动需求申请审核",
          toDoStyle: {
            backgroundImage: "url(" + require("@/assets/card1.png") + ")",
            backgroundSize: "cover"
          }
        },
        {
          number: 13,
          text: "滚动需求申请",
          toDoStyle: {
            backgroundImage: "url(" + require("@/assets/card2.png") + ")",
            backgroundSize: "cover"
          }
        },
        {
          number: 12,
          text: "采购单审核",
          toDoStyle: {
            backgroundImage: "url(" + require("@/assets/card3.png") + ")",
            backgroundSize: "cover"
          }
        },
        {
          number: 143,
          text: "滚动需求申请审核",
          toDoStyle: {
            backgroundImage: "url(" + require("@/assets/card4.png") + ")",
            backgroundSize: "cover"
          }
        },
        {
          number: 13,
          text: "滚动需求申请",
          toDoStyle: {
            backgroundImage: "url(" + require("@/assets/card5.png") + ")",
            backgroundSize: "cover"
          }
        }
      ],
      menuItems: [
        {
          text: "厂家信息管理",
          path: "",
          menuStyle: {
            backgroundImage: "url(" + require("@/assets/icon1.png") + ")",
            backgroundSize: "cover"
          }
        }
      ]
    };
  },
  mounted() {
    this.menuItems = JSON.parse(window.localStorage.getItem("menuItems")) || [];
    this.draw();
    this.formChart();
  },
  methods: {
    addMenu() {
      this.isClose = false;
      this.addMenuVisible = true;
    },
    delMenu() {
      this.isClose = !this.isClose;
    },
    delMenuItem(index) {
      this.menuItems.splice(index, 1);
      window.localStorage.setItem("menuItems", JSON.stringify(this.menuItems));
    },
    dealAddMenu(val) {
      if (val == "close") {
        this.addMenuVisible = false;
        return false;
      }
      var obj = {};
      var text = val.title[val.title.length - 1];
      if (text.length > 7) {
        obj.text = text.substring(0, 7) + "...";
      } else {
        obj.text = text;
      }
      obj.path = val.path;
      obj.menuStyle = {};
      (obj.menuStyle.backgroundImage = this.backgroundArr[
        this.menuItems.length
      ]),
        (obj.menuStyle.backgroundSize = "cover");
      this.menuItems.push(obj);
      window.localStorage.setItem("menuItems", JSON.stringify(this.menuItems));
      this.addMenuVisible = false;
    },
    linkTo(val) {
      this.$router.push(val);
    },
    draw() {
      // 初始化echarts实例
      let myChart = echarts.init(document.getElementById("myChart")); // 绘制图表

      var option = {
        color: ["#CCCCCC", "#6B72F7", "#38D6E5", "#FF7C7C"],
        tooltip: {
          trigger: "item",
          formatter: function(params) {
            return formatter(params);
          }
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "55%"],
            avoidLabelOverlap: true,
            hoverAnimation: true,
            silent: false,
            label: {
              normal: {
                show: true,
                position: "center",
                formatter: function() {
                  return "总访问量(人)\r\n3455";
                },
                textStyle: {
                  color: "#999999"
                }
              },
              emphasis: {
                show: true,
                position: "center",
                textStyle: {
                  fontSize: "14",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" }
            ]
          }
        ]
      };
      //防止越界，重绘canvas
      window.onresize = myChart.resize();
      myChart.setOption(option); //设置option
    },
    formChart() {
      // 初始化echarts实例
      let formChart = echarts.init(document.getElementById("formChart")); // 绘制图表

      var option = {
        color: ["#BDD4FB", "#B6F1F6"],
        borderColor: "#eee",
        title: {
          text: "本周出入库",
          textStyle: {
            fontSize: "12"
          }
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["出库", "入库"]
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: false, readOnly: false },
            magicType: { show: false, type: ["line", "bar", "stack", "tiled"] },
            restore: { show: false },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "出库",
            type: "line",
            itemStyle: {
              normal: {}
            },
            smooth: true,
            itemStyle: {
              normal: {
                areaStyle: { type: "default" },
                lineStyle: {
                  width: 1,
                  color: "#4FD8F9"
                }
              }
            },
            data: [30, 182, 434, 791, 390, 30, 1000]
          },
          {
            name: "入库",
            type: "line",
            smooth: true,
            itemStyle: {
              normal: {
                areaStyle: { type: "default" },
                lineStyle: {
                  width: 1,
                  color: "#5595FC"
                }
              }
            },
            data: [1320, 1132, 601, 234, 120, 90, 20]
          }
        ]
      };

      //防止越界，重绘canvas
      window.onresize = formChart.resize;
      formChart.setOption(option); //设置option
    }
  }
};
</script>
