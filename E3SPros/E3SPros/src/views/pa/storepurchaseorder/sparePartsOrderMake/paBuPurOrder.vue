<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
      <!-- <el-button size="small" @click="openEdit()">修改</el-button> -->
      <el-button size="small" @click="submit()">提交</el-button>
      <el-button size="small" v-on:click="newOrder()">新建订单</el-button>
      <el-button size="small" @click="reset()">重置</el-button>
      <el-button size="small" @click="exportExcel('导出主表')">导出主表</el-button>
      <el-button size="small" @click="exportExcel('导出明细')">导出明细</el-button>
    </div>
    <div class="filter-container filter-params" ref="conHeight">
      <el-row :gutter="26">
        <el-col :span="22">
          <el-col :span="6">
            <label>订单号</label>
            <el-input
              v-model="listQuery.purOrderCode"
              suffix-icon="el-icon-search"
              placeholder="请选择"
              size="small"
            />
          </el-col>
          <!-- <orderNo :carTypeVisible="carTypeVisible" @changeCode="getCarTypeCode"></orderNo> -->
          <!-- <purOrderType v-model="listQuery.purOrderTypee" :span="6" @changeCode="getorderCode" /> -->
          <!-- <el-col :span="6">
              <label>订单类型</label>
              <el-select
                collapse-tags
                filterable
                size="small"
                clearable
                v-model="listQuery.purOrderType"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in listSelect"
                  :key="item.attrValue"
                  :label="item.attrValue"
                  :value="item.attrValue"
                ></el-option>
              </el-select>
          </el-col>-->
          <LookupValue
            :span="6"
            :isMul="isMul"
            :isShowLabel="isShowLabel"
            :code="listQuery.purOrderType"
            :lookuptype="lookuptype"
            :labelName="lookupValuelable"
            @changeCode="getLookupValue"
          />
          <!-- <addorder :addboxVisible="addboxVisible" @changeCode="getOrderNoCode"></addorder> -->
          <!-- <single-date-picker
              :span="6"
              @changeCode="getChangeCode"
              :valueF="cleanData"
              :timeName="timeName"
          />-->
          <!-- <el-col :span="6">
              <label>订货日期</label>
              <el-date-picker
                type="date"
                :picker-options="pickerOptions"
                v-model="listQuery.singleDate"
                placeholder="选择日期"
              ></el-date-picker>
          </el-col>-->
          <el-col :span="6">
            <label class="demonstration">订货日期</label>
            <el-date-picker
              v-model="orderDate"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              value-format="yyyy-MM-dd HH:mm:ss"
              size="small"
            ></el-date-picker>
          </el-col>
          <el-col :span="5">
            <el-checkbox label class="margin-r-0 margin-b-0" size="small" v-model="creator"></el-checkbox>
            <label class="margin-r-0 margin-b-0">只限本人</label>
          </el-col>
        </el-col>
        <el-col :span="2">
          <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
        </el-col>
        <el-col :span="22" v-show="toggleParam" class="toggleParam">
          <el-col :span="6">
            <!-- <a class="part" onclick="orderCalendar()">
                <span class="blue">订货日历</span>
            </a>-->
            <el-button type="text" size="small" v-on:click="orderCalendar()">订货日历</el-button>
          </el-col>
          <el-col :span="6">
            <!-- <a class="part" onclick="account()">
                <span class="blue">账户余额</span>
            </a>-->
            <el-button type="text" size="small" v-on:click="account()">账户余额</el-button>
          </el-col>
        </el-col>
      </el-row>
    </div>
    <orderEdit
      :orderEditVisible="orderEditVisible"
      :selectData="selectDataSon"
      @changeorderEditCode="getorderEditCode"
    ></orderEdit>
    <div class="filter-container filter-title" ref="resultTitleHeight">查询结果</div>
    <showGrid
      :gridVisible="gridVisible"
      :purOrderCode="purOrderCode"
      @changeCode="getGridCode"
      ref="orderDetail"
    ></showGrid>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      stripe
      :header-cell-style="tableHeaderRowClassName"
      highlight-current-row
      @row-click="rowClick"
      @select="select"
      @select-all="select"
      @cell-click="cellClick"
      ref="multipleTable"
      :height="tableHeight"
    >
      <el-table-column align="center" label="序号" width="60">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column type="selection" width="55" label="选择+" />
      <!-- <el-table-column label="操作" width="55">
        <span slot-scope="scope" class="part">修改</span>
      </el-table-column>
      <el-table-column label="操作" width="55">
        <span slot-scope="scope" class="part">提交</span>
      </el-table-column>-->
      <el-table-column align="center" label="操作" width="90">
        <template slot-scope="scope">
          <label class="part" @click="operate(1,scope.row)">修改</label>
          <label class="part" @click="operate(2,scope.row)">提交</label>
        </template>
      </el-table-column>
      <el-table-column label="订单号" prop="purOrderCode" width="155">
        <span
          slot-scope="scope"
          @click="showGrid(scope.row.purOrderCode)"
          class="part"
        >{{ scope.row.purOrderCode }}</span>
      </el-table-column>
      <el-table-column label="订单类型" prop="purOrderCode">
        <template slot-scope="scope">{{ scope.row.purOrderType }}</template>
      </el-table-column>
      <el-table-column label="订货日期" prop="purDate" width="185">
        <template slot-scope="scope">{{ scope.row.purDate }}</template>
      </el-table-column>
      <el-table-column label="订货金额" prop="purAmount">
        <template slot-scope="scope">{{ scope.row.purAmount }}</template>
      </el-table-column>
      <el-table-column label="订货品种" prop="orderVariety" align="center">
        <template slot-scope="scope">{{ scope.row.orderVariety }}</template>
      </el-table-column>
      <el-table-column label="状态" prop="orderStatus" align="center">
        <template slot-scope="scope">{{ scope.row.orderStatus }}</template>
      </el-table-column>
      <el-table-column label="运输方式" prop="transportTypeCode" align="center">
        <template slot-scope="scope">{{ scope.row.transportTypeCode }}</template>
      </el-table-column>
      <el-table-column label="经销商审核人" prop="dlrAuditor" align="center" width="150">
        <template slot-scope="scope">{{ scope.row.dlrAuditor }}</template>
      </el-table-column>
      <el-table-column label="经销商审核时间" prop="oemAuditDate" align="center" width="165">
        <template slot-scope="scope">{{ scope.row.oemAuditDate }}</template>
      </el-table-column>
      <el-table-column label="主机厂审核人" prop="oemAuditor" align="center" width="160">
        <template slot-scope="scope">{{ scope.row.oemAuditor }}</template>
      </el-table-column>
      <el-table-column label="主机厂审核时间" prop="oemAuditDate" align="center" width="165">
        <template slot-scope="scope">{{ scope.row.oemAuditDate }}</template>
      </el-table-column>
      <el-table-column label="制单人" prop align="center">
        <template slot-scope="scope">{{ scope.row.creator }}</template>
      </el-table-column>
      <el-table-column label="制单日期" prop="createdDate" align="center" width="155">
        <template slot-scope="scope">{{ scope.row.createdDate }}</template>
      </el-table-column>
      <el-table-column label="驳回原因" prop="orderSource" align="center">
        <template slot-scope="scope">{{ scope.row.orderSource }}</template>
      </el-table-column>
    </el-table>
    <el-pagination
      ref="paginationHeight"
      background
      layout="prev, pager, next, sizes, ->, total"
      prev-text="上一页"
      next-text="下一页"
      :page-sizes="[10, 20, 30]"
      :page-size="10"
      :total="list?paBuPurOrderRecords:0"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script>
import {
  // getOrderType,
  selectSubmit,
  paBuPurOrderQueryFindAll
} from "@/api/pa/paBuPurOrder";
import SingleDatePicker from "@/components/pa/singleDateSelect";
import orderEdit from "@/views/pa/storepurchaseorder/sparePartsOrderMake/orderEdit";
import showGrid from "@/views/pa/storepurchaseorder/creatOrder/orderDetail";
import { paApis } from "@/api/graphQLApiList/pa";
import LookupValue from "@/components/org/LookupValue";
import { the_Height } from "@/components/se/seMixins/makeHeight";

export default {
  mixins: [the_Height],
  components: {
    SingleDatePicker,
    orderEdit,
    showGrid,
    LookupValue
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger"
      };
      return statusMap[status];
    }
  },
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      isMul: false,
      isshow: true,
      isShowLabel: true,
      lookupValuelable: "订单类型",
      lookuptype: "PA0025",
      list: null,
      selectDataSon: {}, //订单编辑
      enable: 0, //是否有数据
      listLoading: true,
      orderEditVisible: false,
      listSelect: null,
      gridVisible: false,
      purOrderCode: "",
      submitSelectData: null,
      cleanData: false,
      // timeName: "订货日期",
      toggleParam: false,
      creator: undefined,
      listQuery: {
        purOrderCode: undefined, //订单号
        singleDate: undefined,
        creator: undefined, //本人
        purOrderType: undefined, //订单类型
        beginPurDate: undefined, //订货开始日期
        endPurDate: undefined //订货截止日期
      },
      orderDate: [],
      pageIndex: 1,
      pageSize: 10,
      paBuPurOrderRecords: null,
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      }
    };
  },
  created() {
    this.listLoading = false;
    this.gridVisible = true; //弹出框内容加载入DOM，导出明细
  },
  beforeMount() {},
  mounted() {
    this.gridVisible = false;
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.pageIndex = val;
      this.fetchData();
    },
    /* getChangeCode(val) {
      this.listQuery.singleDate = val;
    }, */
    fetchData(page, dataType, exportType) {
      this.listLoading = true;
      this.listQuery.beginPurDate = this.orderDate[0];
      this.listQuery.endPurDate = this.orderDate[1];
      if (this.creator) {
        //只限本人数据转换
        this.listQuery.creator = "1";
      } else {
        this.listQuery.creator = "0";
      }
      //转换了中台请求格式数据
      var pageSize = dataType == "excel" ? 99999 : this.pageSize;
      if (exportType == "导出主表") {
        if (this.list == null || this.list.length == 0) {
          this.$message({
            message: "导出数据不能为空",
            type: "warning",
            duration: 2000
          });
          this.listLoading = false;
          return;
        }
        var tableColumns =
          this.$refs.multipleTable == null
            ? null
            : this.$refs.multipleTable.columns;
        paBuPurOrderQueryFindAll(
          pageSize,
          page || this.pageIndex,
          this.listQuery,
          dataType,
          "备件订单制作主表导出",
          "备件订单制作主表",
          tableColumns
        ).then(response => {
          if (dataType == "excel") {
            //导出excel查询
            this.$utils.downloadFile(response, "备件订单制作主表导出.xlsx");
            this.listLoading = false;
          } else {
            this.list = response.data.paBuPurOrderQueryFindAll.rows;
            this.listLoading = false;
          }
        });
      } else if (exportType == "导出明细") {
        var tableColumns =
          this.$refs.multipleTable == null
            ? null
            : this.$refs.multipleTable.columns; //$refs.multipleTable待改动
        paBuPurOrderQueryFindAll(
          pageSize,
          page || this.pageIndex,
          this.listQuery,
          dataType,
          "备件订单制作明细表导出",
          "备件订单制作明细表",
          tableColumns
        ).then(response => {
          if (dataType == "excel") {
            //导出excel查询
            this.$utils.downloadFile(response, "备件订单制作明细表导出.xlsx");
            this.listLoading = false;
          } else {
            this.list = response.data.paBuPurOrderQueryFindAll.rows;
            this.listLoading = false;
          }
        });
      } else {
        paBuPurOrderQueryFindAll(
          pageSize,
          page || this.pageIndex,
          this.listQuery,
          dataType,
          "备件订单制作明细表导出",
          "备件订单制作明细表",
          tableColumns
        ).then(response => {
          this.list = response.data.paBuPurOrderQueryFindAll.rows;
          this.paBuPurOrderRecords = Number(
            response.data.paBuPurOrderQueryFindAll.records
          );
          this.listLoading = false;
        });
      }
      this.submitSelectData = null;
    },
    rowClick(row, event) {
      this.enable = 1;
      this.selectDataSon = row;
    },
    openEdit() {
      if (this.enable == 0) {
        this.$alert("请最少选择一条数据", "提示", {
          confirmButtonText: "确定"
        });
      } else {
        this.orderEditVisible = true;
      }
    },
    getorderEditCode(val) {
      this.orderEditVisible = false;
    },
    reset() {
      this.listQuery.purOrderCode = undefined;
      this.listQuery.purOrderType = undefined;
      this.orderDate = [];
      // this.listQuery.singleDate = undefined;
      this.listQuery.creator = "";
      this.creator = "";
      this.cleanData = !this.cleanData;
    },
    /* dropDownBox() {
      //订单类型
      getOrderType().then(response => {
        this.listSelect = response.data.rows;
        this.listLoading = false;
      });
    }, */
    //订单明细
    showGrid(val) {
      this.purOrderCode = val;
      this.gridVisible = true;
    },
    getGridCode(val) {
      this.gridVisible = false;
    },
    select(selection) {
      this.submitSelectData = selection;
    },
    submit() {
      if (this.submitSelectData == null || this.submitSelectData.length == 0) {
        /* this.$alert("请先选中数据进行审核", "提示", {
          confirmButtonText: "确定"
        }); */
        this.$message({
          message: "请先选中数据进行提交",
          type: "warning",
          duration: 2000
        });
      } else {
        selectSubmit(this.submitSelectData).then(response => {
          // this.listLoading = false;
          if (
            response.data[paApis.sparepartsordermakeSubmit.ServiceCode]
              .result === "1" &&
            response.data[paApis.sparepartsordermakeSubmit.ServiceCode].rows !=
              ""
          ) {
            this.isSaveSuccess = true;
          } else {
            this.isSaveSuccess = false;
          }
          this.submitAlert();
        });
      }
    },
    submitAlert() {
      if (this.isSaveSuccess == true) {
        /* this.$alert("提交成功", "提示", {
          confirmButtonText: "确定",
          callback: action => {}
        }); */
        this.$message({
          message: "提交成功",
          type: "success",
          duration: 2000
        });
        this.orderEditVisible = false;
        this.fetchData();
      }
    },
    cellClick(row, column, cell, event) {
      /* if (column.label == "操作") {
        if (cell.innerText.indexOf("修改") != -1) {
          this.newOrder(); //跳转新建订单
        } else if (cell.innerText.indexOf("提交") != -1) {
          selectSubmit(row).then(response => {
            this.listLoading = false;
            if (
              response.data[paApis.sparepartsordermakeSubmit.ServiceCode]
                .result === "1" &&
              response.data[paApis.sparepartsordermakeSubmit.ServiceCode]
                .rows != ""
            ) {
              this.isSaveSuccess = true;
            } else {
              this.isSaveSuccess = false;
            }
            this.submitAlert();
          });
        }
      } */
      //再次查询刷新网格
    },
    operate(typeValue, row) {
      if (typeValue == "1") {
        this.newOrder(row);
      } else if (typeValue == "2") {
        selectSubmit(row).then(response => {
          this.listLoading = false;
          if (
            response.data[paApis.sparepartsordermakeSubmit.ServiceCode]
              .result === "1" &&
            response.data[paApis.sparepartsordermakeSubmit.ServiceCode].rows !=
              ""
          ) {
            this.isSaveSuccess = true;
          } else {
            this.isSaveSuccess = false;
          }
          this.submitAlert();
        });
      } else {
      }
    },
    newOrder(row) {
      this.$router.push({
        path: "/pa/creatOrder",
        name: "creatOrder",
        params: row
      });
    },
    orderCalendar() {
      this.$router.push({
        path: "/paModule/paOrderManage/paDbPurCalendar"
      });
    },
    account() {
      this.$router.push({
        path: "/paModule/paDealerPurchase/accountBalanceGeneral"
      });
    },
    //更多
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    getLookupValue(val) {
      this.listQuery.purOrderType = val;
    },
    exportExcel(exportType) {
      if (exportType == "导出主表") {
        this.fetchData(1, "excel", "导出主表");
      }
      if (exportType == "导出明细") {
        if (
          this.submitSelectData == null ||
          this.submitSelectData.length == 0
        ) {
          this.$message({
            message: "请先选中数据进行导出明细",
            type: "warning",
            duration: 2000
          });
        } else {
          // 获取嵌套组件的值
          const that = this.$refs.orderDetail;
          let purOrderCodeArray = this.$utils.getArrayFromJsonArray(
            this.submitSelectData,
            "purOrderCode"
          );
          let purOrderCodeString = "";
          for (let index in purOrderCodeArray) {
            if (index == purOrderCodeArray.length - 1) {
              purOrderCodeString += purOrderCodeArray[index];
            } else {
              purOrderCodeString += purOrderCodeArray[index] + ",";
            }
          }
          that.listQuery.purOrderCode = purOrderCodeString;
          that.fetchData(1, "excel", "备件订单制作");
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
/deep/ .part {
  color: blue;
  cursor: pointer;
}
/deep/ .margin-r-0 {
  margin-right: 0;
}
/deep/ .margin-b-0 {
  margin-bottom: 0;
}
/deep/ .margin-t-8 {
  margin-top: 8px;
}
/* /deep/ .filter-button {
  width: 1000px;
  float: right;
} */
</style>