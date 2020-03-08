<template>
  <section class="carType">
    <el-dialog
      title="查询信息"
      :visible.sync="gridVisible"
      width="900px"
      center
      :close-on-click-modal="false"
      :append-to-body="true"
      @close="sendCode"
    >
      <el-tabs type="card" v-model="activeTab" @tab-click="handleClick">
        <el-tab-pane label="销售历史" name="two">
          <el-table
            v-loading="listLoading"
            :data="salesHistoryList"
            element-loading-text="Loading"
            border
            fit
            stripe
            :header-cell-style="tableHeaderRowClassName"
            highlight-current-row
            height="300"
          >
            <el-table-column align="center" label="序号" width="60">
              <template slot-scope="scope">{{ scope.$index + 1 }}</template>
            </el-table-column>
            <el-table-column label="项目" width="100">
              <template slot-scope="scope">{{ scope.row.billType }}</template>
            </el-table-column>
            <el-table-column label="201812">
              <template slot-scope="scope">{{ scope.row.t12 }}</template>
            </el-table-column>
            <el-table-column label="201811" width="185">
              <template slot-scope="scope">{{ scope.row.t11 }}</template>
            </el-table-column>
            <el-table-column label="201810">
              <template slot-scope="scope">{{ scope.row.t10 }}</template>
            </el-table-column>
            <el-table-column label="201809" align="center">
              <template slot-scope="scope">{{ scope.row.t9 }}</template>
            </el-table-column>
            <el-table-column label="201808" align="center">
              <template slot-scope="scope">{{ scope.row.t8 }}</template>
            </el-table-column>
            <el-table-column label="201807" align="center">
              <template slot-scope="scope">{{ scope.row.t7 }}</template>
            </el-table-column>
            <el-table-column label="201806" align="center" width="150">
              <template slot-scope="scope">{{ scope.row.t6 }}</template>
            </el-table-column>
            <el-table-column label="201805" align="center" width="155">
              <template slot-scope="scope">{{ scope.row.t5 }}</template>
            </el-table-column>
            <el-table-column label="201804" align="center" width="150">
              <template slot-scope="scope">{{ scope.row.t4 }}</template>
            </el-table-column>
            <el-table-column label="201803" align="center" width="155">
              <template slot-scope="scope">{{ scope.row.t3 }}</template>
            </el-table-column>
            <el-table-column label="201802" align="center">
              <template slot-scope="scope">{{ scope.row.t2 }}</template>
            </el-table-column>
            <el-table-column label="201801" align="center" width="155">
              <template slot-scope="scope">{{ scope.row.t1 }}</template>
            </el-table-column>
            <el-table-column label="201712" align="center">
              <template slot-scope="scope">{{ }}</template>
            </el-table-column>
          </el-table>
          <el-pagination
            background
            layout="prev, pager, next, sizes, ->, total"
            prev-text="上一页"
            next-text="下一页"
            :page-sizes="[10, 20, 30]"
            :page-size="10"
            :total="salesHistoryList?salesHistoryList.length:0"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </el-tab-pane>
        <el-tab-pane label="关联订单" name="three">
          <el-table
            v-loading="listLoading"
            :data="relateOrderList"
            element-loading-text="Loading"
            border
            fit
            stripe
            :header-cell-style="tableHeaderRowClassName"
            highlight-current-row
            height="300"
          >
            <el-table-column align="center" label="序号" width="60">
              <template slot-scope="scope">{{ scope.$index + 1 }}</template>
            </el-table-column>
            <el-table-column label="订单号" width="100">
              <template slot-scope="scope">{{ scope.row.purOrderCode }}</template>
            </el-table-column>
            <el-table-column label="订单类型">
              <template slot-scope="scope">{{ scope.row.purType }}</template>
            </el-table-column>
            <el-table-column label="订货数量">
              <template slot-scope="scope">{{ scope.row.purQty }}</template>
            </el-table-column>
            <el-table-column label="审核数量">
              <template slot-scope="scope">{{ scope.row.checkQty }}</template>
            </el-table-column>
            <el-table-column label="有效欠拨数" align="center" width="120">
              <template slot-scope="scope">{{ scope.row.validLackQty }}</template>
            </el-table-column>
            <el-table-column label="无效欠拨数" align="center" width="120">
              <template slot-scope="scope">{{ scope.row.invalidLackQty }}</template>
            </el-table-column>
            <el-table-column label="入库数量" align="center">
              <template slot-scope="scope">{{ }}</template>
            </el-table-column>
            <el-table-column label="在途数" align="center">
              <template slot-scope="scope">{{ scope.row.wayQty }}</template>
            </el-table-column>
            <el-table-column label="订单状态" align="center" width="120">
              <template slot-scope="scope">{{ scope.row.orderStatus }}</template>
            </el-table-column>
            <el-table-column label="订货日期" align="center" width="120">
              <template slot-scope="scope">{{ scope.row.purDate }}</template>
            </el-table-column>
          </el-table>
          <el-pagination
            background
            layout="prev, pager, next, sizes, ->, total"
            prev-text="上一页"
            next-text="下一页"
            :page-sizes="[10, 20, 30]"
            :page-size="10"
            :total="relateOrderList?relateOrderList.length:0"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </el-tab-pane>
        <el-tab-pane label="替换件库存" name="four">
          <el-table
            v-loading="listLoading"
            :data="replacementStockList"
            element-loading-text="Loading"
            border
            fit
            stripe
            :header-cell-style="tableHeaderRowClassName"
            highlight-current-row
            height="300"
          >
            <el-table-column align="center" label="序号" width="60">
              <template slot-scope="scope">{{ scope.$index + 1 }}</template>
            </el-table-column>
            <el-table-column label="替换件号" width="100">
              <template slot-scope="scope">{{ scope.row.brandName }}</template>
            </el-table-column>
            <el-table-column label="替换件名" width="100">
              <template slot-scope="scope">{{ scope.row.carSeries }}</template>
            </el-table-column>
            <el-table-column label="单位">
              <template slot-scope="scope">{{ scope.row.catType }}</template>
            </el-table-column>
            <el-table-column label="实际库存">
              <template slot-scope="scope">{{ scope.row.carTypeConfig }}</template>
            </el-table-column>
            <el-table-column label="可用库存" align="center">
              <template slot-scope="scope">{{ scope.row.purOrderType }}</template>
            </el-table-column>
            <el-table-column label="订货开关" align="center">
              <template slot-scope="scope">{{ scope.row.replaceCarTypeConfig1 }}</template>
            </el-table-column>
            <el-table-column label="备件属地" align="center">
              <template slot-scope="scope">{{ scope.row.param2 }}</template>
            </el-table-column>
            <el-table-column label="备件状态" align="center" width="100">
              <template slot-scope="scope">{{ scope.row.param3 }}</template>
            </el-table-column>
            <el-table-column label="库存状态" align="center" width="100">
              <template slot-scope="scope">{{ scope.row.param4 }}</template>
            </el-table-column>
          </el-table>
          <el-pagination
            background
            layout="prev, pager, next, sizes, ->, total"
            prev-text="上一页"
            next-text="下一页"
            :page-sizes="[10, 20, 30]"
            :page-size="10"
            :total="replacementStockList?replacementStockList.length:0"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </el-tab-pane>
        <el-tab-pane label="主机厂库存" name="five">
          <el-table
            v-loading="listLoading"
            :data="oemStorageList"
            element-loading-text="Loading"
            border
            fit
            stripe
            :header-cell-style="tableHeaderRowClassName"
            highlight-current-row
            height="300"
          >
            <el-table-column align="center" label="序号" width="60">
              <template slot-scope="scope">{{ scope.$index + 1 }}</template>
            </el-table-column>
            <el-table-column label="备件号" width="120">
              <template slot-scope="scope">{{ scope.row.brandName }}</template>
            </el-table-column>
            <el-table-column label="备件" width="120">
              <template slot-scope="scope">{{ scope.row.carSeries }}</template>
            </el-table-column>
            <el-table-column label="备件属地" width="100">
              <template slot-scope="scope">{{ scope.row.catType }}</template>
            </el-table-column>
            <el-table-column label="备件状态" width="100">
              <template slot-scope="scope">{{ scope.row.carTypeConfig }}</template>
            </el-table-column>
            <el-table-column label="主机厂仓库名" align="center" width="130">
              <template slot-scope="scope">{{ scope.row.replaceCarType1 }}</template>
            </el-table-column>
            <el-table-column label="主机厂库存状态" align="center" width="130">
              <template slot-scope="scope">{{ scope.row.replaceCarTypeConfig1 }}</template>
            </el-table-column>
          </el-table>
          <el-pagination
            background
            layout="prev, pager, next, sizes, ->, total"
            prev-text="上一页"
            next-text="下一页"
            :page-sizes="[10, 20, 30]"
            :page-size="10"
            :total="oemStorageList?oemStorageList.length:0"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </el-tab-pane>
        <!-- <el-tab-pane label="数据验证结果" name="six">
          <el-table
            v-loading="listLoading"
            :data="dataVerificationList"
            element-loading-text="Loading"
            border
            fit
            stripe
            :header-cell-style="tableHeaderRowClassName"
            highlight-current-row
            height="300"
          >
            <el-table-column align="center" label="序号" width="60">
              <template slot-scope="scope">{{ scope.$index + 1 }}</template>
            </el-table-column>
            <el-table-column label="订单号" width="155">
              <template slot-scope="scope">{{ scope.row.brandName }}</template>
            </el-table-column>
            <el-table-column label="备件号" width="155">
              <template slot-scope="scope">{{ scope.row.carSeries }}</template>
            </el-table-column>
            <el-table-column label="验证结果" width="185">
              <template slot-scope="scope">{{ scope.row.catType }}</template>
            </el-table-column>
          </el-table>
          <el-pagination
            background
            layout="prev, pager, next, sizes, ->, total"
            prev-text="上一页"
            next-text="下一页"
            :page-sizes="[10, 20, 30]"
            :page-size="10"
            :total="dataVerificationList?dataVerificationList.length:0"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </el-tab-pane>-->
      </el-tabs>
    </el-dialog>
  </section>
</template>
<script>
import {
  paBuPurOrderDQueryFindAll,
  paBuOemStorageQuery,
  paBuDlrOutStoreQuerySaleHis,
  paBuPurOrderQueryRelate,
  paDbReplaceListQueryStorage,
  paBudataVerification
} from "@/api/pa/paBuPurOrder";
export default {
  components: {},
  props: {
    gridVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    partNo: {
      type: String,
      default: function() {
        return "";
      }
    }
  },
  data() {
    return {
      pageIndex: "1",
      pageSize: "10",
      oemStorageList: [],
      relateOrderList: [],
      salesHistoryList: [],
      replacementStockList: [],
      dataVerificationList: [],
      activeTab: "two",
      listLoading: "true",
      listQuery: {
        partNo: "",
        dlrId: "1"
      },
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      }
    };
  },
  created() {
    // this.fetchDlrOutStoreQuerySaleHisData();
    // this.fetchOrderQueryRelateData();
    // this.fetchpaBuReplacementStockData();
    // this.fetchOemStorageData();
    // this.fetchdataVerificationData();
  },
  watch: {
    gridVisible(newValue, oldValue) {
      if (newValue) {
        //清空查询条件
        this.listQuery.partNo = this.partNo;
        this.fetchDlrOutStoreQuerySaleHisData();
        this.fetchOrderQueryRelateData();
        this.fetchpaBuReplacementStockData();
        // this.fetchOemStorageData();
        // this.fetchdataVerificationData();
      }
      // this.fetchData();
    }
  },
  methods: {
    fetchDlrOutStoreQuerySaleHisData() {
      this.listLoading = true;
      paBuDlrOutStoreQuerySaleHis(
        this.pageSize,
        this.pageIndex,
        this.listQuery
      ).then(response => {
        this.salesHistoryList = response.data.paBuDlrOutStoreQuerySaleHis.rows;
        this.listLoading = false;
      });
    },
    fetchOrderQueryRelateData() {
      this.listLoading = true;
      paBuPurOrderQueryRelate(
        this.pageSize,
        this.pageIndex,
        this.listQuery
      ).then(response => {
        this.relateOrderList = response.data.paBuPurOrderQueryRelate.rows;
        this.listLoading = false;
      });
    },
    fetchpaBuReplacementStockData() {
      this.listLoading = true;
      paDbReplaceListQueryStorage(
        this.pageSize,
        this.pageIndex,
        this.listQuery
      ).then(response => {
        this.replacementStockList =
          response.data.items.paDbReplaceListQueryStorage;
        this.listLoading = false;
      });
    },
    fetchOemStorageData() {
      this.listLoading = true;
      paBuOemStorageQuery(this.listQuery).then(response => {
        this.oemStorageList = response.data.items.paBuOemStorageQueryFindAll;
        this.listLoading = false;
      });
    },
    fetchdataVerificationData() {
      this.listLoading = true;
      paBudataVerification(this.listQuery).then(response => {
        this.dataVerificationList = response.data.items.paBudataVerification;
        this.listLoading = false;
      });
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      // this.fetchData();
    },
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
      // this.fetchData();
    },
    sendCode() {
      this.$emit("changeCode", this.codeInside);
    },
    getorderCode(val) {
      this.listQuery.orderCode = val;
    },
    quit() {
      this.gridVisible = false;
      // this.$emit("changeCode");
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style lang="scss" scoped>
/deep/ .el-dialog__wrapper .el-dialog {
  height: 450px;
}
</style>
