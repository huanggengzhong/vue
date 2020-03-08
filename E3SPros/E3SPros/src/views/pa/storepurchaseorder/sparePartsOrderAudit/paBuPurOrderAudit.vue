<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" size="small" @click="fetchData(1)">查询</el-button>
      <el-button size="small" @click="review('2')">审核</el-button>
      <el-button size="small" @click="review('99')">驳回</el-button>
      <el-button size="small" @click="reset()">重置</el-button>
      <el-button size="small" @click="exportExcel('导出主表')">导出</el-button>
    </div>

    <!-- <div class="filter-container filter-title" ref="conTitleHeight">查询条件</div> -->
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
          <LookupValue
            :span="6"
            :isMul="isMul"
            :isShowLabel="isShowLabel"
            :code="listQuery.purOrderType"
            :lookuptype="lookuptype"
            :labelName="lookupValuelable"
            @changeCode="getLookupValue"
          />
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
            <el-checkbox size="small" style="width:15px" v-model="creator"></el-checkbox>
            <label>只限本人</label>
          </el-col>
        </el-col>
        <el-col :span="2">
          <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
        </el-col>
        <el-col :span="22" v-show="toggleParam" class="toggleParam">
          <el-col :span="6">
            <el-button type="text" size="small" v-on:click="orderCalendar()">订货日历</el-button>
          </el-col>
          <el-col :span="6">
            <el-button type="text" size="small" v-on:click="account()">账户余额</el-button>
          </el-col>
        </el-col>
      </el-row>
    </div>
    <showGrid
      :gridVisible="gridVisible"
      :purOrderCode="purOrderCode"
      @changeCode="getGridCode"
      ref="orderDetail"
    ></showGrid>
    <div class="filter-container filter-title" ref="resultTitleHeight">查询结果</div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      stripe
      :header-cell-style="tableHeaderRowClassName"
      highlight-current-row
      @select="select"
      @select-all="select"
      :height="tableHeight"
      ref="multipleTable"
    >
      <el-table-column align="center" label="序号" width="60">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column type="selection" width="55" label="选择+" />
      <el-table-column label="订单号" width="155" align="center" prop="purOrderCode">
        <span
          slot-scope="scope"
          @click="showGrid(scope.row.purOrderCode)"
          class="part"
        >{{ scope.row.purOrderCode }}</span>
      </el-table-column>
      <el-table-column label="订单类型" align="center" width="125" prop="purOrderTypeName">
        <template slot-scope="scope">{{ scope.row.purOrderTypeName }}</template>
      </el-table-column>
      <el-table-column label="订货日期" align="center" width="170" prop="purDate">
        <template slot-scope="scope">{{ scope.row.purDate }}</template>
      </el-table-column>
      <el-table-column label="订货金额" align="center" width="100" prop="purAmount">
        <template slot-scope="scope">{{ scope.row.purAmount }}</template>
      </el-table-column>
      <el-table-column label="订货品种" align="center" width="100" prop="orderVariety">
        <template slot-scope="scope">{{ scope.row.orderVariety }}</template>
      </el-table-column>
      <el-table-column label="状态" align="center" prop="instoreStateName">
        <template slot-scope="scope">{{ scope.row.instoreStateName }}</template>
      </el-table-column>
      <el-table-column label="运输方式" align="center" width="100" prop="transportTypeName">
        <template slot-scope="scope">{{ scope.row.transportTypeName }}</template>
      </el-table-column>
      <el-table-column label="经销商审核人" align="center" width="120" prop>
        <template slot-scope="scope">{{ }}</template>
      </el-table-column>
      <el-table-column label="经销商审核时间" align="center" width="125" prop>
        <template slot-scope="scope">{{ }}</template>
      </el-table-column>
      <el-table-column label="主机厂审核人" align="center" width="120" prop>
        <template slot-scope="scope">{{ }}</template>
      </el-table-column>
      <el-table-column label="主机厂审核时间" align="center" width="165" prop>
        <template slot-scope="scope">{{ }}</template>
      </el-table-column>
      <el-table-column label="制单人" align="center" width="100" prop>
        <template slot-scope="scope">{{ }}</template>
      </el-table-column>
      <el-table-column label="制单日期" align="center" width="165" prop>
        <template slot-scope="scope">{{ }}</template>
      </el-table-column>
      <el-table-column label="驳回原因" align="center" width="250" prop="rejectReason">
        <template slot-scope="scope">
          <el-input v-model="scope.row.rejectReason" placeholder="请输入驳回原因，不能超过100字" size="small"></el-input>
        </template>
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
      :total="list?listRecords:0"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script>
import {
  getList,
  getOrderType,
  selectSubmit,
  paBuPurOrderQueryFindAll,
  orderReview,
  orderReject
} from "@/api/pa/paBuPurOrder";
import singleDatePicker from "@/components/pa/singleDateSelect";
import orderEdit from "@/views/pa/storepurchaseorder/sparePartsOrderMake/orderEdit";
import showGrid from "@/views/pa/storepurchaseorder/creatOrder/orderDetail";
import { paApis } from "@/api/graphQLApiList/pa";
import LookupValue from "@/components/org/LookupValue";
import { the_Height } from "@/components/se/seMixins/makeHeight";

export default {
  mixins: [the_Height],
  components: {
    singleDatePicker,
    orderEdit,
    showGrid,
    LookupValue
  },
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          debugger;
          return time.getTime() > Date.now();
        }
      },
      isSaveSuccess: false,
      list: null,
      selectDataSon: {}, //订单编辑
      enable: 0, //是否有数据
      listLoading: false,
      listSelect: null,
      gridVisible: false,
      selectedData: [],
      cleanData: false,
      timeName: "订货日期",
      toggleParam: false,
      pageIndex: 1,
      pageSize: 10,
      isMul: false,
      isShowLabel: true,
      lookupValuelable: "订单类型",
      lookuptype: "PA0025",
      creator: undefined,
      purOrderCode: "",
      listQuery: {
        purOrderCode: undefined, //订单号
        singleDate: undefined,
        creator: undefined, //本人
        purOrderType: undefined, //订单类型
        beginPurDate: undefined, //订货开始日期
        endPurDate: undefined //订货截止日期
      },
      orderDate: [],
      listRecords: null,
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      }
    };
  },
  created() {},
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.pageIndex = val;
      this.fetchData();
    },
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
          "备件订单审核DLR主表导出",
          "备件订单审核DLR主表",
          tableColumns
        ).then(response => {
          if (dataType == "excel") {
            //导出excel查询
            this.$utils.downloadFile(response, "备件订单审核DLR主表导出.xlsx");
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
          "备件订单审核DLR明细表导出",
          "备件订单审核DLR明细表",
          tableColumns
        ).then(response => {
          if (dataType == "excel") {
            //导出excel查询
            this.$utils.downloadFile(
              response,
              "备件订单审核DLR明细表导出.xlsx"
            );
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
          "备件订单审核DLR明细表导出",
          "备件订单审核DLR明细表",
          tableColumns
        ).then(response => {
          this.list = response.data.paBuPurOrderQueryFindAll.rows;
          this.listRecords = Number(
            response.data.paBuPurOrderQueryFindAll.records
          );
          this.listLoading = false;
        });
      }

      this.selectedData = []; //清空选中数据
    },
    reset() {
      this.listQuery.purOrderCode = undefined;
      this.listQuery.purOrderType = undefined;
      this.orderDate = [];
      this.listQuery.creator = "";
      this.creator = "";
      this.cleanData = !this.cleanData;
    },
    //订单明细
    showGrid(val) {
      this.purOrderCode = val;
      this.gridVisible = true;
    },
    getGridCode(val) {
      this.gridVisible = false;
    },
    select(selection) {
      let obj = {};
      for (var i = 0; i < selection.length; i++) {
        obj.rejectReason = selection[i].rejectReason;
        obj.purOrderCode = selection[i].purOrderCode;
        obj.purchaseOrderId = selection[i].purchaseOrderId;
        obj.updateControlId = selection[i].updateControlId;
        obj.dlrId = "212";
      }
      this.selectedData.push(obj);
    },
    review(str) {
      //console.log(this.selectedData);
      if (this.selectedData.length == 0) {
        this.$message({
          message: "请先选中数据进行审核",
          type: "warning",
          duration: 2000
        });
      } else {
        orderReview(this.selectedData, str).then(response => {
          if (
            response.data[paApis.paBuPurOrderMutationDlrAudit.ServiceCode]
              .result === "1"
          ) {
            let msg =
              response.data[paApis.paBuPurOrderMutationDlrAudit.ServiceCode]
                .msg;
            this.isSaveSuccess = true;
            if (str == "2") {
              this.reviewAlert();
            }
            if (str == "99") {
              this.rejectAlert(msg);
            }
          } else {
            this.isSaveSuccess = false;
            this.$message({
              message:
                response.data[paApis.paBuPurOrderMutationDlrAudit.ServiceCode]
                  .msg,
              type: "success",
              duration: 2000
            });
            this.$refs.multipleTable.clearSelection();
            this.selectedData = [];
          }
        });
      }
    },
    reviewAlert() {
      if (this.isSaveSuccess) {
        this.$message({
          message: "审核成功",
          type: "success",
          duration: 2000
        });
        this.fetchData();
      }
    },
    rejectAlert(msg) {
      if (this.isSaveSuccess) {
        this.$message({
          message: "已驳回",
          type: "success",
          duration: 2000
        });
        this.fetchData();
      }
    },

    newOrder() {
      this.$router.push({
        path: "/pamodule/dealerPurchases/pajxszjzhglfew1"
      });
    },
    orderCalendar() {
      this.$router.push({
        path: "/pamodule/orderManage/paDbPurCalendar"
      });
    },
    account() {
      this.$router.push({
        path: "/pamodule/dealerPurchases/accountBalance"
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
    }
  }
};
</script>
<style lang="scss" scoped>
/deep/ .app-container-table {
  position: relative;
  top: -52px;
}
/deep/ .part {
  color: blue;
  cursor: pointer;
}
/deep/ .margin-t-8 {
  margin-top: 8px;
}
/* /deep/ .filter-button{
  width:800px;
  float: right;
} */
</style>