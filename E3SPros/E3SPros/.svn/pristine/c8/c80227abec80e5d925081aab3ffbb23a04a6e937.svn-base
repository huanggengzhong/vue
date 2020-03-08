/*
 * @Author: xgz 
 * @Date: 2019-08-03 11:04:20 
 * @Last Modified by: //此处填修改人名字
 * @Last Modified time: 2019-09-18 14:27:05
 */

<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="query()">查询</el-button>

      <el-button @click="reset()">重置</el-button>
    </div>

    <div class="filter-container filter-title">查询条件</div>
    <div class="filter-container filter-params">
      <el-form label-position="right">
        <el-row>
          <el-col :span="6">
            <IntentionLevel ref="IntentionLevel" :IntentionLevel="cw" />
          </el-col>
          <el-col :span="6">
            <IntentionalCar ref="IntentionalCar" :IntentionalCar="cst" />
          </el-col>
          <el-col :span="6">
            <IntoPollDates ref="IntoPollDates" :IntoPollDates="cbc" />
          </el-col>
        </el-row>
      </el-form>
    </div>

    <!-- 自定义网格开始 -->
    <div class="filter-container filter-title">查询结果</div>
    <el-table :data="tabledatas.tableData" highlight-current-row style="width: 100%;height:330px" v-loading.body="false" element-loading-text="Loading" border fit>
      <el-table-column type="index" label="序号" width="55"></el-table-column>
      <el-table-column label="抢单" width="100" align="center">
        <template slot-scope="scope">
          <el-button type="text" @click="grabMenu(scope.$index,scope.row)">抢单</el-button>
        </template>
      </el-table-column>
      <el-table-column v-for="item in tabledatas.colnames" :key="item.value" :label="item.label" :prop="item.value" align="center"></el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="tabledatas.total" :page-size="tabledatas.pagesize" :current-page="tabledatas.pageindex" @prev-click="prev" @next-click="next" @current-change="changepage">
    </el-pagination>
    <!-- 自定义网格结束 -->
  </div>
</template>
<script>
import IntentionLevel from "@/components/crm/Select/Common/Customer/IntentionLevel";
import IntoPollDates from "@/components/crm/Time/IntoPollDates";
import IntentionalCar from "@/components/crm/EjectWindows/IntentionalCar";

import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
export default {
  name: "CityCluePool",
  components: {
    IntentionLevel,
    IntoPollDates,
    IntentionalCar
  },
  data() {
    return {
      rootClueCode: "",
      dialogVisible: false,
      cw: {
        value: ""
      },
      cbc: {
        value: ""
      },
      cst: {
        input: ""
      },
      tabledatas: {
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [
          { label: "线索单号", value: "placeClueCode" },
          { label: "客户名称", value: "custName" },
          { label: "性别", value: "gender" },
          { label: "电话", value: "contactTel" },
          { label: "意向级别", value: "clueLevelCode" },
          { label: "意向车系", value: "carSeriesCn" },
          { label: "入池时间", value: "inputDate" },
          { label: "来源网点", value: "dlrShortName" }
        ],
        tableData: [],
        queryObj: {
          apiConfig: crmApis.placeClueQueryCityPool,
          apiQueryRow: [
            "placeClueCode",
            "custName",
            "gender",
            "contactTel",
            "clueLevelCode",
            "carSeriesCn",
            "inputDate",
            "dlrShortName",
            "rootClueCode"
          ],
          params: {
            clueLevelCode: "",
            inteSeriesCode: "",
            inputDateStart: "",
            inputDateEnd: ""
          }
        },
        pagesize: 8,
        pageindex: 1,
        total: 0
      }
    };
  },
  methods: {
    query: function() {
      let that = this;
      // 查询参数
      that.tabledatas.queryObj.params.clueLevelCode = this.$refs.IntentionLevel.value;
      that.tabledatas.queryObj.params.inteSeriesCode = this.$refs.IntentionalCar.rowData.carSeriesCode;
      if (this.$refs.IntoPollDates.value[0] == undefined) {
        that.tabledatas.queryObj.params.inputDateStart = this.$refs.IntoPollDates.value[0];
        that.tabledatas.queryObj.params.inputDateEnd = this.$refs.IntoPollDates.value[1];
      } else if (this.$refs.IntoPollDates.value[0] != undefined) {
        that.tabledatas.queryObj.params.inputDateStart =
          this.$refs.IntoPollDates.value[0] + " " + "00:00:00";
        that.tabledatas.queryObj.params.inputDateEnd =
          this.$refs.IntoPollDates.value[1] + " " + "23:59:59";
      }

      let queryObj = {
        type: "query",
        // api配置
        apiConfig: that.tabledatas.queryObj.apiConfig,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: that.tabledatas.queryObj.apiQueryRow
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.tabledatas.pagesize,
          pageIndex: that.tabledatas.pageindex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.tabledatas.queryObj.params
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1"
          //&&response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          that.tabledatas.tableData =
            response.data[queryObj.apiConfig.ServiceCode].rows;
          that.tabledatas.pageindex =
            response.data[queryObj.apiConfig.ServiceCode].pageindex;
          that.tabledatas.total =
            response.data[queryObj.apiConfig.ServiceCode].records;
        } else {
          this.$message({
            message: response.data[queryObj.apiConfig.ServiceCode].msg,
            type: "error",
            duration: 1000
          });
        }
      });
    },
    // 抢单
    grabMenu: function(index, row) {
      let that = this;
      let queryObj = {
        // api配置
        type: "mutation",
        apiConfig: crmApis.placeClueMutationGetBill,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: []
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            rootClueCode: row.rootClueCode
          }
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1" &&
          response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          this.dialogVisible = false;
          this.$message({
            message: response.data[queryObj.apiConfig.ServiceCode].msg,
            type: "success",
            duration: 1000
          });
          that.query();
        } else {
          this.$message({
            message: response.data[queryObj.apiConfig.ServiceCode].msg,
            type: "error",
            duration: 1000
          });
          that.dialogVisible = false;
        }
      });
    },

    // 分页的三个方法
    prev() {
      let that = this;
      if (this.tabledatas.pageindex > 1) {
        that.tabledatas.pageindex = this.tabledatas.pageindex - 1;
        this.query();
      }
    },
    next() {
      let that = this;
      if (true) {
        that.tabledatas.pageindex = this.tabledatas.pageindex + 1;
        this.query();
      }
    },
    changepage(index) {
      let that = this;
      that.tabledatas.pageindex = index;
      this.query();
    },
    // 分页的三个方法结束
    reset: function() {
      this.$refs.IntentionLevel.reset();
      this.$refs.IntoPollDates.reset();
      this.$refs.IntentionalCar.resetgz();
    }
  }
};
</script>

