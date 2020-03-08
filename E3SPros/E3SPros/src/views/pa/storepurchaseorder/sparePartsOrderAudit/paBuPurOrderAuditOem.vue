<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" size="small" @click="fetchData(1)">查询</el-button>
      <el-button size="small" @click="review('3')">总部审核</el-button>
      <el-button size="small" @click="review('999')">总部驳回</el-button>
      <el-button size="small" @click="reset()">重置</el-button>
      <el-button size="small">打印</el-button>
      <el-button size="small" @click="exportExcel('导出主表')">导出</el-button>
    </div>
    <div class="filter-container filter-params" ref="conHeight">
      <el-row :gutter="26">
        <el-col :span="22">
          <el-col :span="6">
            <label>备件号</label>
            <el-input
              v-model="listQuery.partNo"
              suffix-icon="el-icon-search"
              placeholder="请选择"
              size="small"
            />
          </el-col>
          <el-col :span="6">
            <label>备件名称</label>
            <el-input v-model="listQuery.partName" placeholder="请输入" size="small"></el-input>
          </el-col>
          <el-col :span="6">
            <label>订单编号</label>
            <el-input v-model="listQuery.purOrderCode" placeholder="请输入" size="small"></el-input>
          </el-col>
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
        </el-col>
        <el-col :span="2">
          <el-button :icon="toggleParamIcon" @click="changeToggleParam" class="moreParam">更多</el-button>
        </el-col>
        <el-col :span="22" v-show="toggleParam" class="toggleParam">
          <el-row>
            <LookupValue
              :span="6"
              :isMul="isMul"
              :isShowLabel="isShowLabel"
              :code="listQuery.orderStatus"
              :lookuptype="lookuptype.orderStatus"
              :labelName="lookupValuelable.orderStatus"
              @changeCode="getOrderStatus"
            />
            <LookupValue
              :span="6"
              :isMul="isMul"
              :isShowLabel="isShowLabel"
              :code="listQuery.transportTypeCode"
              :lookuptype="lookuptype.transportTypeName"
              :labelName="lookupValuelable.transportTypeName"
              @changeCode="getTransportTypeName"
            />
            <carBrand
              :span="6"
              :isMul="isMul"
              :code="listQuery.carBrandCode"
              @changeCode="getBrandCode"
            ></carBrand>
            <el-col :span="6">
              <label>经销商</label>
              <el-input
                v-model="listQuery.dlrShortName"
                placeholder="请输入"
                size="small"
                @focus="chooseDlr"
              ></el-input>
            </el-col>
            <el-col :span="6">
              <label>单据品牌</label>
              <el-select size="small" placeholder="请选择" v-model="listQuery.billBrandCode">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.warehouseName"
                  :value="item.warehouseName"
                ></el-option>
              </el-select>
            </el-col>
            <LookupValue
              :span="6"
              :isMul="isMul"
              :isShowLabel="isShowLabel"
              :code="listQuery.purOrderType"
              :lookuptype="lookuptype.purOrderType"
              :labelName="lookupValuelable.purOrderType"
              @changeCode="getPurOrderType"
            />

            <el-col :span="6">
              <el-button type="text" size="small" v-on:click="orderCalendar()">订货日历</el-button>
              <el-button type="text" size="small" v-on:click="account()">账户余额</el-button>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <dlrChoose
      :span="6"
      :seComQueChoDlrVisible="isShowChoose"
      @sentCode="getSentCode"
      @close="closeVisible"
      :isMul="true"
    />
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
import carBrand from "@/components/org/carBrand/carBrand";
import dlrChoose from "@/components/se/seCommonQueryChooseDlr";
import { doQueryMdsLookupValueByPage } from "@/api/se/process/workorder/repairWorkOrderEdit";
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
    LookupValue,
    dlrChoose,
    carBrand
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
      toggleParamIcon: "el-icon-minus",
      listLoading: false,
      gridVisible: false,
      isShowChoose: false,
      selectedData: [],
      toggleParam: false,
      pageIndex: 1,
      pageSize: 10,
      isMul: false,
      isShowLabel: true,
      lookupValuelable: {
        transportTypeName: "运输方式",
        purOrderType: "订单类型",
        orderStatus: "订单状态"
      },
      lookuptype: {
        transportTypeName: "PA0026",
        purOrderType: "PA0025",
        orderStatus: "PA0016"
      },
      purOrderCode: "",
      listQuery: {
        partNo: "", //备件号
        partName: "", //备件名称
        //carBrandCode: "", //经销商品牌
        dlrShortName: "", //经销商名称
        transportTypeCode: "", //运输方式名称
        orderStatus: "", //订单状态
        billBrandCode: "", //单据品牌
        purOrderCode: undefined, //订单编号
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
    getSentCode(data) {
      this.listQuery.dlrShortName = data.dlrShortName;
    },
    closeVisible(val) {
      this.isseComQueChoMu = val;
      this.isShowChoose = val;
    },
    getBrandCode(val) {
      this.listQuery.carBrandCode = val;
    },
    chooseDlr() {
      this.isShowChoose = true;
    },
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
          "备件订单审核OEM主表导出",
          "备件订单审核OEM主表",
          tableColumns
        ).then(response => {
          if (dataType == "excel") {
            //导出excel查询
            this.$utils.downloadFile(response, "备件订单审核OEM主表导出.xlsx");
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
          "备件订单审核OEM明细表导出",
          "备件订单审核OEM明细表",
          tableColumns
        ).then(response => {
          if (dataType == "excel") {
            //导出excel查询
            this.$utils.downloadFile(
              response,
              "备件订单审核OEM明细表导出.xlsx"
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
          "备件订单审核OEM明细表导出",
          "备件订单审核OEM明细表",
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
      this.listQuery.partNo = "";
      //this.listQuery.carBrandCode = "";
      this.listQuery.dlrShortName = "";
      this.listQuery.transportTypeCode = "";
      this.listQuery.orderStatus = "";
      this.listQuery.partName = "";
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
      if (!this.toggleParam) {
        this.toggleParamIcon = "el-icon-minus";
      } else {
        this.toggleParamIcon = "el-icon-plus";
      }
    },
    getOrderStatus(val) {
      this.listQuery.orderStatus = val;
    },
    getTransportTypeName(val) {
      this.listQuery.transportTypeCode = val;
    },
    getPurOrderType(val) {
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
/deep/ .margin-r-0 {
  margin-right: 0;
}
/deep/ .margin-b-0 {
  margin-bottom: 0;
}
/deep/ .margin-t-8 {
  margin-top: 8px;
}
/* /deep/ .filter-button{
  width:800px;
  float: right;
} */
</style>