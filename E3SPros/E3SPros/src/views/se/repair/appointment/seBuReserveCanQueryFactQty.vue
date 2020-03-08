<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="queryFindAll()">查询</el-button>
      <template>
        <el-button size="small" @click="eduitData()">预约容量设置</el-button>
      </template>
      <el-button size="small" @click="insertData()">导出</el-button>
    </div>
    <div class="filter-container filter-params">
      <el-row :gutter="26">
        <section>
          <el-col :span="6">
            <label>查询日期</label>
            <!-- <lableName curLabelName="查询日期" :isShowLabel="true" :isRequire="false"></lableName> -->
            <el-date-picker
              v-model="queryParams.dataInfo.beginDate"
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd HH:mm:ss"
            ></el-date-picker>
          </el-col>
        </section>
      </el-row>
    </div>
    <div class="filter-container filter-title" ref="resultTitleHeight">查询结果</div>
    <mix-table
      ref="tableList"
      :queryParams="queryParams"
      :dynamicTableCols="cols"
      :isShowSelect="true"
      :isPaging="false"
      :isDialog="true"
    />
    <div class="filter-container filter-params">
      <el-row :gutter="26">
        <el-col :span="6">
          <lableName curLabelName="最大可预约天数"></lableName>
          <el-input v-model="canReserveDays" readonly="true"></el-input>
        </el-col>
        <el-col :span="6">
          <el-checkbox label="是否允许超预约容量" v-model="isReserveCan"></el-checkbox>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import mixTable from "@/components/basicComponent/mixTable";
import { seApis } from "@/api/graphQLApiList/se";
import { requestGraphQL } from "@/api/commonRequest";
import lableName from "@/components/lableName/index";
export default {
  components: {
    mixTable,
    lableName
  },
  data() {
    return {
      //记录表格长度
      tableLength: 0,
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
      queryParams: {
        APIUrl: seApis.seBuReserveCanQueryFactQty.APIUrl,
        InputType: seApis.seBuReserveCanQueryFactQty.InputType,
        ServiceCode: seApis.seBuReserveCanQueryFactQty.ServiceCode,
        dataInfo: {
          // oemCode: "",
          // groupCode: "",
          dlrId: "202",
          beginDate: ""
        },
        apiQueryRow: [
          "currentDate",
          "dlrCode",
          "dlrId",
          "dlrShotName",
          "fri",
          "groupCode",
          "groupId",
          "mon",
          "oemCode",
          "oemId",
          "reserveCanId",
          "sat",
          "sun",
          "thu",
          "timeQuantum",
          "tue",
          "wed"
        ]
      },
      cols: [
        { label: "时间段", codeField: "timeQuantum" },
        { label: "预约容量", codeField: "Reservationapacity" }
      ]
    };
  },
  created() {},
  mounted() {
    var nowTime = new Date();
    var year = nowTime.getFullYear();
    var month = nowTime.getMonth() + 1;
    var day = nowTime.getDate();
    this.queryParams.dataInfo.beginDate =
      year + "-" + month + "-" + day + " 00:00:00";
    this.queryFindAll();
  },
  methods: {
    //导出数据
    insertData() {
      if (this.queryParams.dataInfo.beginDate == null) {
        this.$message({
          message: "查询日期不能为空",
          type: "warn",
          uration: 2000
        });
      } else {
        var tableColumns = null
          ? null
          : this.$refs.tableList.$refs.multipleTable.columns;

        this.queryList(
          1,
          "excel",
          "预约容量导出",
          "预约容量列表",
          tableColumns
        );
      }
    },
    //预约容量设置
    eduitData() {
      this.$router.push({
        path: "/semodule/seModu-repairProcess/yuyue-guanli/seModu-baocun"
      });
    },
    //排序
    sortRule(property) {
      return function(a, b) {
        return a[property] - b[property];
      };
    },
    //查询方法
    queryFindAll(
      page,
      dataType = "",
      excelName = "",
      excelSheetName = "",
      tableColumns = null
    ) {
      var beginDate = new Date(this.queryParams.dataInfo.beginDate);
      var year = beginDate.getFullYear();
      var month = beginDate.getMonth() + 1;
      var day = beginDate.getDate();
      var day1 = day + 1;
      var day2 = day + 2;
      var day3 = day + 3;
      var day4 = day + 4;
      var day5 = day + 5;
      var day6 = day + 6;
      var firstDay = year + "-" + month + "-" + day;
      var secondDay = year + "-" + month + "-" + day1;
      var thirdDay = year + "-" + month + "-" + day2;
      var fouDay = year + "-" + month + "-" + day3;
      var fiveDay = year + "-" + month + "-" + day4;
      var sixDay = year + "-" + month + "-" + day5;
      var sevenDay = year + "-" + month + "-" + day6;
      this.firstDay = firstDay;
      this.secondDay = secondDay;
      this.thirdDay = thirdDay;
      this.fouDay = fouDay;
      this.fiveDay = fiveDay;
      this.sixDay = sixDay;
      this.sevenDay = sevenDay;

      this.$refs.tableList.updateCols(1, {
        label: firstDay,
        codeField: "firstDay",
        prop: ""
      });

      this.$refs.tableList.updateCols(2, {
        label: secondDay,
        codeField: "secondDay",
        prop: ""
      });
      this.$refs.tableList.updateCols(3, {
        label: thirdDay,
        codeField: "thirdDay",
        prop: ""
      });
      this.$refs.tableList.updateCols(4, {
        label: fouDay,
        codeField: "fouDay",
        prop: ""
      });
      this.$refs.tableList.updateCols(5, {
        label: fiveDay,
        codeField: "fiveDay",
        prop: ""
      });
      this.$refs.tableList.updateCols(6, {
        label: sixDay,
        codeField: "sixDay",
        prop: ""
      });
      this.$refs.tableList.updateCols(7, {
        label: sevenDay,
        codeField: "sevenDay",
        prop: ""
      });

      // this.queryParams.dataInfo.beginDate =
      //   this.queryParams.dataInfo.beginDate + " 00:00:00";
      this.queryList(
        (dataType = ""),
        (excelName = ""),
        (excelSheetName = ""),
        (tableColumns = null)
      );

      //  this.$refs.tableList.tableData
    },

    //获取数据查询
    queryList(
      page,
      dataType = "",
      excelName = "",
      excelSheetName = "",
      tableColumns = null
    ) {
      const that = this;
      that.listLoading = true;
      const queryObj = {
        // 请求类型&参数 保存mutation  查询query
        type: "query",
        typeParam:
          "($pageIndex: Int, $pageSize: Int, $dataInfo: " +
          that.queryParams.InputType +
          ")",
        // 请求API
        apiUrl: that.queryParams.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
          {
            // API服务编码&参数
            apiServiceCode: that.queryParams.ServiceCode,
            apiServiceParam:
              "(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)",
            // 表格中台返回网格的字段
            apiQueryRow: that.queryParams.apiQueryRow
          }
        ],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.pageSize,
          pageIndex: that.pageIndex,
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.queryParams.dataInfo
        }
      };
      var paramD = that.$getParams(queryObj);
      if (dataType === "excel") {
        queryObj.variables.pageSize = 99999;
        if (tableColumns == null) tableColumns = [];
        var tmpCols = tableColumns; // .filter(o => o.hidden !== true)
        // 网格列对象转为excel列对象
        var excelCols = {};
        for (var i = 0; i < tmpCols.length; i++) {
          if (tmpCols[i].property != null)
            excelCols[tmpCols[i].property] = tmpCols[i].label;
        }
        // 数据类型
        paramD.dataType = "excel";
        // excel文件名称
        paramD.excelName = excelName;
        // 根据请求API描述excel数据对象
        paramD.excels = [
          {
            // excel sheet名称
            title: excelSheetName,
            // 对应API服务编码
            actionName: queryObj.apiServices[0].apiServiceCode,
            // excel列
            columns: excelCols
          }
        ];
      }
      requestGraphQL(paramD).then(response => {
        if (dataType == "excel") {
          //导出excel查询
          var nowDate = new Date();
          this.$utils.downloadFile(
            response,
            `备件价格维护列表导出${nowDate.getFullYear()}-${nowDate.getMonth() +
              1}-${nowDate.getDate()}  ${nowDate.getHours()}：${nowDate.getMinutes()}：${nowDate.getSeconds()}.xlsx`
          );
          this.listLoading = false;
        } else if (response.result === "1") {
          that.tableData = response.data[that.queryParams.ServiceCode].rows;
          that.tableLength =
            response.data[that.queryParams.ServiceCode].rows.length;
          var length = that.tableLength;
          var tabledata = this.tableData;

          //计算日期输入框的日期是星期几-->
          let firstDayTem = this.firstDay.substring(0, 10);
          let arr = new Array();
          arr = firstDayTem.split("-");
          let date = new Date(arr[0], parseInt(arr[1] - 1), arr[2]);
          let week = String(date.getDay())
            .replace("0", "日")
            .replace("1", "一")
            .replace("2", "二")
            .replace("3", "三")
            .replace("4", "四")
            .replace("5", "五")
            .replace("6", "六");
          this.weekName = "星期" + week;
          //计算日期输入框的日期是星期几<--
          //存放星期的数组
          var weekArray = [];
          if (this.weekName == "星期一") {
            weekArray = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
          }
          if (this.weekName == "星期二") {
            weekArray = ["tue", "wed", "thu", "fri", "sat", "sun", "mon"];
          }
          if (this.weekName == "星期三") {
            weekArray = ["wed", "thu", "fri", "sat", "sun", "mon", "tue"];
          }
          if (this.weekName == "星期四") {
            weekArray = ["thu", "fri", "sat", "sun", "mon", "tue", "wed"];
          }
          if (this.weekName == "星期五") {
            weekArray = ["fri", "sat", "sun", "mon", "tue", "wed", "thu"];
          }
          if (this.weekName == "星期六") {
            weekArray = ["sat", "sun", "mon", "tue", "wed", "thu", "fri"];
          }
          if (this.weekName == "星期日") {
            weekArray = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
          }
          this.list = [];
          for (var i = 0; i < length; i++) {
            this.list.push({
              orderNumber: "123",
              timeQuantum: "",
              firstDay: "",
              secondDay: "",
              thirdDay: "",
              fouDay: "",
              fiveDay: "",
              sixDay: "",
              sevenDay: ""
            });
            // let newWeekName = this.list[i].orderNumber = 1;
            this.list[i].timeQuantum = tabledata[i].timeQuantum;
            this.list[i].firstDay = tabledata[i][weekArray[0]];
            this.list[i].secondDay = tabledata[i][weekArray[1]];
            this.list[i].thirdDay = tabledata[i][weekArray[2]];
            this.list[i].fouDay = tabledata[i][weekArray[3]];
            this.list[i].fiveDay = tabledata[i][weekArray[4]];
            this.list[i].sixDay = tabledata[i][weekArray[5]];
            this.list[i].sevenDay = tabledata[i][weekArray[6]];
          }
          // this.isReserveCan = tabledata[0].isReserveCan;
          // this.canReserveDays = tabledata[0].canReserveDays;
          // if (this.isReserveCan == 1) {
          //   this.isReserveCan = true;
          // }
          this.list.sort(this.sortRule("timeQuantum"));
          this.$refs.tableList.tableData = [];
          //按时间段排序
          this.$refs.tableList.tableData = this.list;
        } else {
          that.$message({
            message: "查询失败：" + response.msg,
            type: "warn",
            uration: 2000
          });
        }
        that.listLoading = false;
      });
    }
  }
};
</script>

