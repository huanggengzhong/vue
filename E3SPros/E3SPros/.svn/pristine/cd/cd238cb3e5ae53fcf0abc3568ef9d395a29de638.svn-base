<template>
  <section class="carType">
    <el-dialog
      title="备货单详情"
      :visible.sync="buStockDetailVisible"
      width="70%"
      :append-to-body="true"
      @close="sendCode"
      ref="buStockDetail"
    >
      <el-table
        ref="multipleTable"
        v-loading="listLoading"
        :data="list"
        element-loading-text="Loading"
        border
        fit
        stripe
        :header-cell-style="tableHeaderRowClassName"
        highlight-current-row
      >
        <el-table-column label="序号" width="60" type="index" align="center"></el-table-column>
        <el-table-column prop="partNo" label="备件编码" width="140" align="center"></el-table-column>
        <el-table-column prop="partName" label="备件名称" width="120" align="center"></el-table-column>
        <el-table-column prop="oldPartNo" label="原件号" width="120" align="center"></el-table-column>
        <el-table-column prop="stockUpQty" label="备货数量" width="90" align="center"></el-table-column>
        <el-table-column prop="unit" label="单位" width="90" align="center"></el-table-column>
        <el-table-column prop="price" label="单价" width="90" align="center"></el-table-column>
        <el-table-column prop="saleAmount" label="备货金额" width="100" align="center"></el-table-column>
        <el-table-column prop="partBrandName" label="备件品牌" width="100" align="center"></el-table-column>
        <el-table-column prop="outStoreCode" label="出库单号" width="150" align="center"></el-table-column>
        <el-table-column prop="outStoreQty" label="出库数量" width="100" align="center"></el-table-column>
        <el-table-column prop="outStoreAmount" label="出库金额" width="100" align="center"></el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next, sizes, ->, total"
        prev-text="上一页"
        next-text="下一页"
        :page-sizes="[10, 20, 30]"
        :page-size="10"
        :total="list?pageTotal:0"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
      <div class="filter-container filter-button">
        <el-button size="small" type="primary" @click="getExcel">导出</el-button>
      </div>
    </el-dialog>
  </section>
</template>

<script>
import { paApis } from "@/api/graphQLApiList/pa";
import { requestGraphQL } from "@/api/commonRequest";
export default {
  props: {
    buStockDetailVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    },

    editData: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      listLoading: false,
      list: [],
      pageIndex: 1,
      pageSize: 10,
      listQuery: {
        purOrderCode: this.editData.purOrderCode || undefined
      },
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      }
    };
  },
  created() {
    if (this.buStockDetailVisible) {
      this.textQurey();
    }
  },
  methods: {
    handleSizeChange(val) {
      this.pageSize = val;
      this.textQurey();
    },
    handleCurrentChange(val) {
      this.pageIndex = val;
      this.textQurey();
    },
    sendCode() {
      this.$emit("changeCode", false);
    },
    //导出
    getExcel() {
      var tableColumns = null ? null : this.$refs.multipleTable.columns;
      this.textQurey(
        -1,
        "excel",
        "备货单详情列表导出",
        "备货单详情列表",
        tableColumns
      );
    },
    textQurey(
      page,
      dataType = "",
      excelName = "",
      excelSheetName = "",
      tableColumns = null
    ) {
      const that = this;
      that.listLoading = true;
      let queryObj = {
        // 请求类型&参数 保存mutation  查询query
        type: "query",
        typeParam:
          "($pageIndex: Int, $pageSize: Int, $dataInfo: " +
          paApis.paBuStockUpDQueryFindAll.InputType +
          ")",
        // 请求API
        apiUrl: paApis.paBuStockUpDQueryFindAll.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
          {
            // API服务编码&参数
            apiServiceCode: paApis.paBuStockUpDQueryFindAll.ServiceCode,
            apiServiceParam:
              "(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)",
            //表格中台返回网格的字段
            apiQueryRow: [
              "partNo",
              "partName",
              "oldPartNo",
              "stockUpQty",
              "price",
              "saleAmount",
              "partBrandName",
              "outStoreCode",
              "outStoreQty",
              "outStoreAmount"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.pageSize,
          pageIndex: page || that.pageIndex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.listQuery
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      if (dataType === "excel") {
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
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (dataType == "excel") {
          //导出excel查询
          this.$utils.downloadFile(response, "备货单详情列表导出.xlsx");
          this.listLoading = false;
        } else if (
          response.data[paApis.paBuStockUpDQueryFindAll.ServiceCode].result ===
            "1" &&
          response.data[paApis.paBuStockUpDQueryFindAll.ServiceCode].rows != ""
        ) {
          if (page) {
            //查询完返回指定的page页数
            that.pageIndex = page;
          }
          that.pageTotal =
            response.data[paApis.paBuStockUpDQueryFindAll.ServiceCode].records;
          that.list =
            response.data[paApis.paBuStockUpDQueryFindAll.ServiceCode].rows;
        }
        this.listLoading = false;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
/deep/ .el-dialog__wrapper .el-dialog {
  height: 500px;
}
</style>
