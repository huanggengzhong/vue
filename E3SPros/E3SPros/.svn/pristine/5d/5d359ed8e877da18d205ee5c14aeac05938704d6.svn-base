<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="mutaion()">保存</el-button>
      <el-button size="small" @click="getDates()">生成</el-button>
      <template>
        <el-button size="small" @click="cancel()">取消</el-button>
      </template>
    </div>
    <div class="filter-container filter-params">
      <el-row :gutter="26">
        <el-col :span="6">
          <lableName curLabelName="可预约工时数"></lableName>
          <el-input v-model="canReserveWork" @change="changeWork()"></el-input>
        </el-col>
        <el-col :span="6">
          <lableName curLabelName="可预约班组数"></lableName>
          <el-input v-model="canReserveTeam" @change="changeTeam()"></el-input>
        </el-col>
        <el-col :span="6">
          <lableName curLabelName="预约开始时段"></lableName>
          <el-input v-model="reserveStartTime" @change="changeTime()"></el-input>
        </el-col>
        <el-col :span="6">
          <lableName curLabelName="预约结束时段"></lableName>
          <el-input v-model="reserveEndTime" @change="changeTime()"></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="26">
        <el-col :span="6">
          <lableName curLabelName="最大可预约天数"></lableName>
          <el-input v-model="canReserveDays"></el-input>
        </el-col>
        <el-col :span="6">
          <el-checkbox label="是否允许超预约容量" v-model="isReserveCan"></el-checkbox>
        </el-col>
      </el-row>
    </div>

    <mix-table
      ref="tableList"
      :queryParams="queryParams"
      :dynamicTableCols="cols"
      :isShowSelect="true"
      :isPaging="false"
      :isDialog="true"
    />
  </div>
</template>
<script>
import mixTable from "@/components/basicComponent/mixTable";
import { seApis } from "@/api/graphQLApiList/se";
import { requestGraphQL } from "@/api/commonRequest";
import lableName from "@/components/lableName/index";
import { seBuReserveCanMutationSave } from "@/api/se/repair/appointment/seBuReserveCanQueryFactQty";
import { seBuReserveCanQueryFactQty } from "@/api/se/repair/appointment/seReserveOrderQueryTrack";
export default {
  components: {
    mixTable,
    lableName
  },
  data() {
    return {
      maxReserve: 0,
      tableData: [],
      list: [],
      tableLength: 0,
      dataInfo: {
        oemCode: "",
        groupCode: "",
        dlrId: "202",
        beginDate: ""
      },
      //提醒message
      message: "",
      //保存数据集合
      mutation: [],
      //记录填入表格的最小预约容量
      littleReserve: "",
      //记录一天的所有时段
      allTimeQuantum: "",
      canReserveWork: "",
      canReserveTeam: "",
      reserveStartTime: "",
      reserveEndTime: "",
      canReserveDays: "",
      isReserveCan: "",
      firstDay: "",
      secondDay: "",
      thirdDay: "",
      fouDay: "",
      fiveDay: "",
      sixDay: "",
      sevenDay: "",
      tableData: [],
      list: [],
      queryParams: {},
      cols: [
        { label: "时间段", codeField: "timeQuantum" },
        {
          label: "星期一",
          codeField: "monday",
          comps: {
            type: "inputNum",
            change: this.change
          }
        },
        {
          label: "星期二",
          codeField: "tuesday",
          comps: {
            type: "inputNum",
            change: this.change
          }
        },
        {
          label: "星期三",
          codeField: "wednesday",
          comps: {
            type: "inputNum",
            change: this.change
          }
        },
        {
          label: "星期四",
          codeField: "fouday",
          comps: {
            type: "inputNum",
            change: this.change
          }
        },
        {
          label: "星期五",
          codeField: "friday",
          comps: {
            type: "inputNum",
            change: this.change
          }
        },
        {
          label: "星期六",
          codeField: "saturday",
          comps: {
            type: "inputNum",
            change: this.change
          }
        },
        {
          label: "星期天",
          codeField: "sunday",
          comps: {
            type: "inputNum",
            change: this.change
          }
        }
      ]
    };
  },
  created() {
    //先查询出数据再设置
    this.findDate();
  },

  methods: {
    //查询数据
    findDate() {
      var nowTime = new Date();
      var year = nowTime.getFullYear();
      var month = nowTime.getMonth() + 1;
      var day = nowTime.getDate();
      this.dataInfo.beginDate = year + "-" + month + "-" + day + " 00:00:00";
      seBuReserveCanQueryFactQty(this.dataInfo).then(response => {
        if (
          response.data[seApis.seBuReserveCanQueryFactQty.ServiceCode]
            .result === "1"
        ) {
          this.tableData =
            response.data[seApis.seBuReserveCanQueryFactQty.ServiceCode].rows;
          this.tableLength = this.tableData.length;
          var length = this.tableLength;
          var tabledata = this.tableData;
          this.list = [];
          var weekArray = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
          for (var i = 0; i < length; i++) {
            this.list.push({
              timeQuantum: "",
              monday: "",
              tuesday: "",
              wednesday: "",
              fouday: "",
              friday: "",
              saturday: "",
              sunday: ""
            });
            //渲染数据！！
            this.list[i].timeQuantum = tabledata[i].timeQuantum;
            this.list[i].monday = tabledata[i][weekArray[0]];
            this.list[i].tuesday = tabledata[i][weekArray[1]];
            this.list[i].wednesday = tabledata[i][weekArray[2]];
            this.list[i].fouday = tabledata[i][weekArray[3]];
            this.list[i].friday = tabledata[i][weekArray[4]];
            this.list[i].saturday = tabledata[i][weekArray[5]];
            this.list[i].sunday = tabledata[i][weekArray[6]];
            // this.list[i].orderNumber = 1;
            /* this.list[i].timeQuantum = i + 8;
            this.list[i].monday = parseInt(tabledata[i].canReserveQty);
            this.list[i].tuesday = parseInt(
              tabledata[i + length * 1].canReserveQty
            );
            this.list[i].wednesday = parseInt(
              tabledata[i + length * 2].canReserveQty
            );
            this.list[i].fouday = parseInt(
              tabledata[i + length * 3].canReserveQty
            );
            this.list[i].friday = parseInt(
              tabledata[i + length * 4].canReserveQty
            );
            this.list[i].saturday = parseInt(
              tabledata[i + length * 5].canReserveQty
            );
            this.list[i].sunday = parseInt(
              tabledata[i + length * 6].canReserveQty
            ); */
          }
          this.list.sort(this.sortRule("timeQuantum"));
          /* this.isReserveCan = tabledata[0].isReserveCan;
          this.canReserveDays = tabledata[0].canReserveDays;
          if (this.isReserveCan == 1) {
            this.isReserveCan = true;
          } */
          this.$refs.tableList.tableData = [];
          this.$refs.tableList.tableData = this.list;
        }
      });
    },
    //保存预约容量信息
    mutaion() {
      this.chengDate();
      if (this.message == "") {
        var list = [];
        var tableData = this.$refs.tableList.tableData;
        for (var i = 0; i < tableData.length; i++) {
          list.push({
            oemCode: "",
            groupCode: "",
            oemId: "",
            groupId: "",
            dlrId: "202",
            dlrCode: "h2902",
            timeQuantum: "",
            mon: "",
            tue: "",
            wed: "",
            thu: "",
            fri: "",
            sat: "",
            sun: "",
            canType: "",
            canReserveDays: "",
            isReserveCan: "",
            reserveCanId: "",
            updateControlId: "",
            isEnable: ""
          });
          list[i].timeQuantum = tableData[i].timeQuantum;
          list[i].mon = parseInt(tableData[i].monday);
          list[i].tue = parseInt(tableData[i].tuesday);
          list[i].wed = parseInt(tableData[i].wednesday);
          list[i].thu = parseInt(tableData[i].tuesday);
          list[i].fri = parseInt(tableData[i].friday);
          list[i].sat = parseInt(tableData[i].saturday);
          list[i].sun = parseInt(tableData[i].sunday);
          if (this.canReserveDays == "") {
            list[i].canReserveDays = 0;
          } else {
            list[i].canReserveDays = parseInt(this.canReserveDays);
          }
          list[i].canReserveDays = undefined; //先去掉最大可预约天数
          if (this.isReserveCan) {
            list[i].isReserveCan = "1";
          } else {
            list[i].isReserveCan = "0";
          }
        }
        this.mutation = list;
        seBuReserveCanMutationSave(this.mutation).then(response => {
          if (
            response.data[seApis.seBuReserveCanMutationSave.ServiceCode]
              .result === "1"
          ) {
            this.$message({
              message: "保存成功",
              type: "success"
            });

            // this.findDate();
          } else {
            this.$message({
              message:
                "保存失败：" +
                response.data[seApis.seBuReserveCanMutationSave.ServiceCode]
                  .msg,
              type: "warn",
              uration: 2000
            });
          }
        });
      }
    },
    //取消并退回查询容量界面
    cancel() {
      this.$router.push({
        path: "/semodule/seModu-repairProcess/yuyue-guanli/seModu-shezhi"
      });
      // this.$destroy();
      this.$refs.tableList.tableData = [];
      this.reserveStartTime = "";
      this.reserveEndTime = "";
      this.canReserveWork = "";
      this.canReserveTeam = "";
      this.canReserveDays = "";
      this.isReserveCan = false;
    },
    //工时改变
    changeWork() {
      if (parseInt(this.canReserveWork) <= parseInt(this.canReserveTeam)) {
        this.littleReserve = parseInt(this.canReserveWork);
      }
      this.allTimeQuantum =
        parseInt(this.reserveEndTime) - parseInt(this.reserveStartTime) + 1;
    },
    //班组数改变
    changeTeam() {
      if (parseInt(this.canReserveWork) > parseInt(this.canReserveTeam)) {
        this.littleReserve = parseInt(this.canReserveTeam);
      }
      this.allTimeQuantum =
        parseInt(this.reserveEndTime) - parseInt(this.reserveStartTime) + 1;
    },
    //时段改变
    changeTime() {
      if (parseInt(this.canReserveWork) <= parseInt(this.canReserveTeam)) {
        this.littleReserve = parseInt(this.canReserveWork);
      }
      this.allTimeQuantum =
        parseInt(this.reserveEndTime) - parseInt(this.reserveStartTime) + 1;
    },
    //进行数据校验
    chengDate() {
      var message = "";
      if (this.canReserveWork == "") {
        message = message + "可预约工时数不能为空,";
      }
      if (this.canReserveTeam == "") {
        message = message + "可预约班组数不能为空,";
      }
      if (this.reserveStartTime == "") {
        message = message + "预约开始时段不能为空,";
      }
      if (this.reserveEndTime == "") {
        message = message + "预约结束时段不能为空,";
      }
      if (this.canReserveDays == "") {
        message = message + "最大可预约天数不能为空,";
      }
      if (
        parseInt(this.reserveStartTime) > 24 ||
        parseInt(this.reserveStartTime < 0)
      ) {
        message = message + "预约开始时段为0到24时,";
      }
      if (
        parseInt(this.reserveEndTime) > 24 ||
        parseInt(this.reserveEndTime < 0)
      ) {
        message = message + "预约结束时段为0到24时,";
      }
      if (parseInt(this.reserveEndTime) <= parseInt(this.reserveStartTime)) {
        message = message + "预约开始时段小于预约结束时段";
      }
      if (message != "") {
        this.$message({
          message: message,
          type: "warn",
          uration: 2000
        });
      }
      this.message = message;
    },
    //表格自动赋值
    getDates() {
      this.chengDate();

      if (this.message == "") {
        var list = [];
        for (var i = 0; i < this.allTimeQuantum; i++) {
          list.push({
            orderNumber: "123",
            timeQuantum: "",
            monday: "",
            tuesday: "",
            wednesday: "",
            fouday: "",
            friday: "",
            saturday: "",
            sunday: ""
          });
        }
        let r = this.reserveStartTime.concat("");
        let l = this.littleReserve.toString().concat("");
        for (let j = 0; j < list.length; j++) {
          list[j].timeQuantum = parseInt(r) + j;
          list[j].monday = parseInt(l);
          list[j].tuesday = parseInt(l);
          list[j].wednesday = parseInt(l);
          list[j].fouday = parseInt(l);
          list[j].friday = parseInt(l);
          list[j].saturday = parseInt(l);
          list[j].sunday = parseInt(l);
        }
        this.$refs.tableList.tableData = list;
      }
    },
    change(a, val) {
      let k = val.row[val.codeField];
      if (k > this.littleReserve || k < 0) {
        this.$message({
          message: "预约容量应小于可预约数且预约数不能为负数！",
          type: "warn",
          uration: 2000
        });
      }
    },
    //排序
    sortRule(property) {
      return function(a, b) {
        return a[property] - b[property];
      };
    }
  }
};
</script>

