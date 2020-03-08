<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="textQurey(1)">查询</el-button>
      <el-button size="small" @click="getExcel">导出</el-button>
      <el-button size="small" @click="reset">重置</el-button>
    </div>
    <div class="filter-container filter-title">查询条件</div>
    <div class="filter-container filter-params">
      <el-row :gutter="26">
        <el-col :span="22">
          <el-row>
            <LookupValue
              :span="6"
              :isMul="isMul"
              :isShowLabel="isShowLabel"
              :code="purOrderType"
              :lookuptype="lookuptype.orderType"
              :labelName="lookupValuelable.orderType"
              @changeCode="orderType"
            />
            <el-col :span="6">
              <label>备货单号</label>
              <el-input
                v-model="listQuery.stockUpCode"
                suffix-icon="el-icon-search"
                placeholder="请选择"
                size="small"
              />
            </el-col>
            <el-col :span="6">
              <label>订单号</label>
              <el-input
                v-model="listQuery.purOrderCode"
                suffix-icon="el-icon-search"
                placeholder="请选择"
                size="small"
              />
            </el-col>
            <el-col :span="6">
              <label>备货日期</label>
              <el-date-picker v-model="listQuery.kwdauditDateS" type="date" placeholder="选择日期"></el-date-picker>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="2">
          <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
        </el-col>
        <el-col :span="22" v-show="toggleParam" class="toggleParam" style="z-index:2001">
          <el-row>
            <el-col :span="6">
              <label>至</label>
              <el-date-picker v-model="listQuery.auditDateE" type="date" placeholder="选择日期"></el-date-picker>
            </el-col>
            <LookupValue
              :span="6"
              :isMul="isMul"
              :isShowLabel="isShowLabel"
              :code="listQuery.stockUpFlag"
              :lookuptype="lookuptype.orderStatus"
              :labelName="lookupValuelable.orderStatus"
              @changeCode="orderStatus"
            />

            <el-col :span="6">
              <label>经销商</label>
              <el-input
                v-model="listQuery.dlrShortName"
                suffix-icon="el-icon-search"
                placeholder="请选择"
                size="small"
                @focus="getDlrName"
              />
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <seCommonQueryChooseDlr
        ref="seCommonQueryChooseDlr"
        :isMul="isMul"
        :seComQueChoDlrVisible="seComQueChoDlrVisible"
        @sentCode="getComQueCho"
        @close="closeComQueCho"
      />
      <buStockDetail
        ref="buStockDetail"
        :key="buStockDetailVisible"
        :editData="rowDetail"
        :buStockDetailVisible="buStockDetailVisible"
        @changeCode="getStock"
      />
    </div>

    <div class="filter-container filter-title">备货单信息</div>
    <el-table
      ref="multipleTable"
      class="mainTable"
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      stripe
      :header-cell-style="tableHeaderRowClassName"
    >
      <el-table-column label="序号" width="60" type="index" align="center"></el-table-column>
      <el-table-column prop="purOrderTypeName" label="订单类型" align="center" width="120"></el-table-column>
      <el-table-column prop="dlrCode" label="经销商编码" width="100" align="center"></el-table-column>
      <el-table-column prop="dlrShortName" label="经销商名称" width="130" align="center"></el-table-column>
      <el-table-column prop="stockUpCode" label="备货单号" width="150" align="center">
        <template slot-scope="scope">
          <el-button type="text" @click="getStockDetails(scope)">{{scope.row.purOrderCode}}</el-button>
        </template>
      </el-table-column>

      <el-table-column prop="auditDate" label="备货日期" width="150" align="center"></el-table-column>
      <el-table-column prop="warehouseName" label="备货仓库" width="120" align="center"></el-table-column>
      <el-table-column prop="transportTypeName" label="运输方式" width="120" align="center"></el-table-column>
      <el-table-column prop="purOrderCode" label="订单号" width="150" align="center"></el-table-column>
      <el-table-column prop="enoughCapital" label="状态" width="120" align="center"></el-table-column>
      <el-table-column prop="stockUpVariety" label="备货品种" width="120" align="center"></el-table-column>
      <el-table-column prop="stockUpQty" label="备货数量" width="120" align="center"></el-table-column>
      <el-table-column prop="stockUpAmount" label="备货金额" width="120" align="center"></el-table-column>
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
  </div>
</template>
<script>
import SingleDatePicker from "@/components/pa/singleDateSelect";
import { paApis } from "@/api/graphQLApiList/pa";
import { requestGraphQL } from "@/api/commonRequest";
import LookupValue from "@/components/org/LookupValue";
import seCommonQueryChooseDlr from "@/components/se/seCommonQueryChooseDlr";
import buStockDetail from "./buStockDetail";

export default {
  components: {
    SingleDatePicker,
    LookupValue,
    seCommonQueryChooseDlr,
    buStockDetail
  },

  data() {
    return {
      isMul: false,
      pageTotal: 0,
      isShowLabel: true,
      lookupValuelable: {
        orderStatus: "状态",
        orderType: "订单类型",
        receiptsBrand: "单据品牌"
      },
      lookuptype: {
        orderStatus: "PA0036",
        receiptsBrand: "PA0016",
        orderType: "PA0025"
      },
      seComQueChoDlrVisible: false,
      buStockDetailVisible: false,
      rowDetail: {},
      list: null,
      listLoading: false,
      cleanData: false,
      toggleParam: false,
      pageIndex: 1,
      pageSize: 10,
      purOrderType: "",
      stockUpFlag: "",
      listQuery: {
        purOrderType: undefined, //订单类型
        stockUpCode: "", //备货单号
        purOrderCode: undefined, //订单号
        auditDateS: undefined, //起始时间
        auditDateE: undefined, //结束时间
        stockUpFlag: undefined, //状态
        dlrCode: undefined,
        dlrShortName: undefined
      },
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      }
    };
  },
  created() {},
  methods: {
    getDlrName() {
      this.seComQueChoDlrVisible = true;
    },
    getStockDetails(scope) {
      this.rowDetail = scope.row;
      this.buStockDetailVisible = true;
      //this.$refs.buStockDetail.textQurey();
    },
    getStock(val) {
      this.buStockDetailVisible = false;
    },
    //获取经销商名称
    getComQueCho(val) {
      this.listQuery.dlrShortName = val.dlrShortName;
      this.seComQueChoDlrVisible = false;
    },
    //点击弹框右上角关闭弹窗，不传递数据
    closeComQueCho(val) {
      this.seComQueChoDlrVisible = val;
    },
    orderType(val) {
      this.listQuery.purOrderType = val;
      this.purOrderType = this.listQuery.purOrderType;
    },
    receiptsBrand(val) {
      this.listQuery.receiptsBrand = val;
    },
    orderStatus(val) {
      this.listQuery.stockUpFlag = val;
      this.stockUpFlag = this.listQuery.stockUpFlag;
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.textQurey();
    },
    handleCurrentChange(val) {
      this.pageIndex = val;
      this.textQurey();
    },
    //导出
    getExcel() {
      var tableColumns = null ? null : this.$refs.multipleTable.columns;
      this.textQurey(
        -1,
        "excel",
        "备货单信息列表导出",
        "备货单信息列表",
        tableColumns
      );
    },
    //数据查询
    textQurey(
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
          paApis.paBuStockUpQueryFindAll.InputType +
          ")",
        // 请求API
        apiUrl: paApis.paBuStockUpQueryFindAll.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
          {
            // API服务编码&参数
            apiServiceCode: paApis.paBuStockUpQueryFindAll.ServiceCode,
            apiServiceParam:
              "(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)",
            // 表格中台返回网格的字段
            apiQueryRow: [
              "dlrCode",
              "purOrderTypeName",
              "dlrShortName",
              "warehouseName",
              "stockUpCode",
              "stockUpVariety",
              "auditDate",
              "purOrderCode",
              "enoughCapital",
              "stockUpQty",
              "stockUpAmount",
              "oemId",
              "groupId",
              "oemCode",
              "groupCode"
            ]
          }
        ],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.pageSize,
          pageIndex: page || that.pageIndex,
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
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
          this.$utils.downloadFile(response, "备货单信息列表导出.xlsx");
          this.listLoading = false;
        } else if (
          response.data[paApis.paBuStockUpQueryFindAll.ServiceCode].result ===
          "1"
        ) {
          if (page) {
            //查询完返回指定的page页数
            that.pageIndex = page;
          }
          that.pageTotal =
            response.data[paApis.paBuStockUpQueryFindAll.ServiceCode].records;
          that.list =
            response.data[paApis.paBuStockUpQueryFindAll.ServiceCode].rows;
          that.listLoading = false;
        } else {
          this.$message({
            message:
              "查询失败：" +
              response.data[paApis.paBuStockUpQueryFindAll.ServiceCode].msg,
            type: "warn",
            uration: 2000
          });
        }
      });
    },
    reset() {
      this.purOrderType = undefined; //订单类型
      this.listQuery.stockUpCode = undefined; //备货单号
      this.listQuery.purOrderCode = undefined; //订单号
      this.listQuery.auditDateS = undefined; //起始时间
      this.listQuery.auditDateE = undefined; //结束时间
      this.stockUpFlag = undefined;
      this.listQuery.dlrCode = undefined;
      this.listQuery.dlrShortName = undefined;
    },
    //更多
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    getLookupValue(val) {
      this.listQuery.orderType = val;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>