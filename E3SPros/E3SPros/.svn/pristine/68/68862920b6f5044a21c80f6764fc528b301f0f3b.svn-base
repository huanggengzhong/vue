<template>
  <section class="carType">
    <el-dialog
      title="订单明细"
      :visible.sync="gridVisible"
      width="900px"
      @close="sendCode"
      center
      :close-on-click-modal="false"
      :append-to-body="true"
      @open="show()"
    >
      <el-table
        v-loading="listLoading"
        ref="multipleTable"
        :data="list"
        element-loading-text="Loading"
        border
        fit
        stripe
        :header-cell-style="tableHeaderRowClassName"
        highlight-current-row
      >
        <el-table-column align="center" label="序号" width="60">
          <template slot-scope="scope">{{ scope.$index + 1 }}</template>
        </el-table-column>
        <el-table-column label="可欠拨" width="155" prop="isCanLack">
          <template slot-scope="scope">{{ scope.row.isCanLack }}</template>
        </el-table-column>
        <el-table-column label="备件号" width="185" prop="partNo">
          <span slot-scope="scope">{{ scope.row.partNo }}</span>
        </el-table-column>
        <el-table-column label="备件名称" prop="partName">
          <template slot-scope="scope">{{ scope.row.partName }}</template>
        </el-table-column>
        <el-table-column label="订货数" align="center" prop="purQty">
          <template slot-scope="scope">{{ scope.row.purQty }}</template>
        </el-table-column>
        <el-table-column label="SNP" align="center" prop="purPackQty">
          <template slot-scope="scope">{{ scope.row.purPackQty }}</template>
        </el-table-column>
        <el-table-column label="单价" align="center" prop="purPrice">
          <template slot-scope="scope">{{ scope.row.purPrice }}</template>
        </el-table-column>
        <el-table-column label="单位" align="center" width="155" prop="unit">
          <template slot-scope="scope">{{ scope.row.unit }}</template>
        </el-table-column>
        <el-table-column label="金额" align="center" width="150" prop="purAmount">
          <template slot-scope="scope">{{ scope.row.purAmount }}</template>
        </el-table-column>
        <el-table-column label="在途数" align="center" prop>
          <template slot-scope="scope">{{ }}</template>
        </el-table-column>
        <el-table-column label="欠拨数" align="center" width="155" prop="oweQty">
          <template slot-scope="scope">{{ scope.row.oweQty }}</template>
        </el-table-column>
      </el-table>
      <br />
      <div class="filter-container filter-button" ref="searcheHeight">
        <el-button size="small" type="primary" @click="exportExcel('导出明细')">导出</el-button>
      </div>
    </el-dialog>
  </section>
</template>
<script>
import { paBuPurOrderDQueryFindAll } from "@/api/pa/paBuPurOrder";
export default {
  components: {},
  props: {
    gridVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    purOrderCode: {
      type: String,
      default: function() {
        return "";
      }
    }
  },
  data() {
    return {
      list: [],
      activeTab: "two",
      listQuery: {
        purOrderCode: ""
      },
      pageSize: "10",
      pageIndex: "1",
      listLoading: true,
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      }
    };
  },
  watch: {
    gridVisible(newValue, oldValue) {
      if (newValue) {
        //清空查询条件
        this.listQuery.purOrderCode = this.purOrderCode;
        // this.show();
      }
    }
  },
  created() {
    this.listLoading = false;
  },
  methods: {
    exportExcel(exportType) {
      this.fetchData(1, "excel", "备件订单审核DLR");
    },
    fetchData(page, dataType, pageType) {
      this.listLoading = true;
      //转换了中台请求格式数据
      var pageSize = dataType == "excel" ? 99999 : this.pageSize;
      var tableColumns =
        this.$refs.multipleTable == null
          ? null
          : this.$refs.multipleTable.columns;
      if (pageType == "备件订单制作") {
        paBuPurOrderDQueryFindAll(
          this.pageSize,
          this.pageIndex,
          this.listQuery,
          dataType,
          "备件订单制作明细表导出",
          "备件订单制作明细表",
          tableColumns
        ).then(response => {
          if (dataType == "excel") {
            //导出excel查询
            this.$utils.downloadFile(response, "备件订单制作明细表导出.xlsx");
            this.listQuery.purOrderCode = ""; //导出完成后清空数据
            this.listLoading = false;
          } else {
            this.list = response.data.paBuPurOrderDQueryFindAll.rows;
            this.listLoading = false;
          }
        });
      }
      if (pageType == "备件订单审核DLR") {
        paBuPurOrderDQueryFindAll(
          this.pageSize,
          this.pageIndex,
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
            this.listQuery.purOrderCode = ""; //导出完成后清空数据
            this.listLoading = false;
          } else {
            this.list = response.data.paBuPurOrderDQueryFindAll.rows;
            this.listLoading = false;
          }
        });
      }
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.fetchData(1, "query", "备件订单制作");
    },
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
      this.fetchData(1, "query", "备件订单制作");
    },
    sendCode() {
      this.$emit("changeCode", this.codeInside);
    },
    getorderCode(val) {
      this.listQuery.orderCode = val;
    },
    quit() {
      this.gridVisible = false;
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    show() {
      //弹框打开后回调
      this.$nextTick(() => {
        this.fetchData(1, "query", "备件订单制作");
        // this.fetchData(1, "query", "备件订单审核DLR");   //相同效果
      });
    }
  }
};
</script>
<style lang="scss" scoped>
/deep/ .el-dialog__wrapper .el-dialog {
  height: 430px;
}
</style>
