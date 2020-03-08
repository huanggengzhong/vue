<template>
  <section class="carType">
    <el-dialog
      :append-to-body="true"
      title="资金详情"
      :visible.sync="detailVisible"
      width="1000px"
      @close="sendCode"
      ref="detailCode"
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
        <el-table-column prop="dlrShortName" label="经销商简称" width="120" align="center"></el-table-column>
        <el-table-column prop="amountSource" label="资金来源" width="120" align="center"></el-table-column>
        <el-table-column prop="amount" label="金额" width="110" align="center"></el-table-column>
        <el-table-column prop="orderCode" label="单号" width="150" align="center"></el-table-column>
        <el-table-column prop="operDate" label="上账日期" width="160" align="center"></el-table-column>
        <el-table-column prop="operMan" label="操作人" width="120" align="center"></el-table-column>
        <el-table-column prop="remark" label="备注" align="center"></el-table-column>
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
  components: {},
  props: {
    capitalDetailVisible: {
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
      flag: 0,
      list: [],
      detailVisible: this.capitalDetailVisible,
      pageTotal: 0,
      listLoading: false,
      pageSize: 10,
      pageIndex: 1,
      listQuery: {
        oemCode: undefined,
        groupCode: undefined,
        dlrId: this.editData.dlrId || "",
        businessDateBeg: undefined,
        businessDateEnd: undefined
      },
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      }
    };
  },
  created() {
    //this.textQurey();
  },
  watch: {
    capitalDetailVisible(newValue, oldValue) {
      if (!newValue) {
        this.list = [];
        this.pageSize = 10;
        this.pageIndex = 1;
      }
    }
  },
  methods: {
    // 导出
    getExcel() {
      var tableColumns = null ? null : this.$refs.multipleTable.columns;
      let obj = {
        page: -1,
        dataType: "excel",
        excelName: "经销商资金详情列表导出",
        excelSheetName: "经销商资金详情列表",
        tableColumns: tableColumns
      };
      switch (this.flag) {
        case 1:
          this.frozenMoneyQurey(
            obj.page,
            obj.dataType,
            obj.excelName,
            obj.excelSheetName,
            obj.tableColumns
          );
          break;
        case 2:
          this.balanceMoneyDetailsQurey(
            obj.page,
            obj.dataType,
            obj.excelName,
            obj.excelSheetName,
            obj.tableColumns
          );
          break;
        case 3:
          this.remitDetailsQurey(
            obj.page,
            obj.dataType,
            obj.excelName,
            obj.excelSheetName,
            obj.tableColumns
          );
          break;
        case 4:
          this.addingDetailsQurey(
            obj.page,
            obj.dataType,
            obj.excelName,
            obj.excelSheetName,
            obj.tableColumns
          );
          break;
        case 5:
          this.subtractDetailsQurey(
            obj.page,
            obj.dataType,
            obj.excelName,
            obj.excelSheetName,
            obj.tableColumns
          );
          break;
      }
    },
    //预扣明细查询
    frozenMoneyQurey(
      page,
      dataType = "",
      excelName = "",
      excelSheetName = "",
      tableColumns = null
    ) {
      this.flag = 1;
      const that = this;
      that.listLoading = true;
      let queryObj = {
        // 请求类型&参数 保存mutation  查询query
        type: "query",
        typeParam:
          "($pageIndex: Int, $pageSize: Int, $dataInfo: " +
          paApis.veBuDlrAccountRLogQueryFrozenFindAll.InputType +
          ")",
        // 请求API
        apiUrl: paApis.veBuDlrAccountRLogQueryFrozenFindAll.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
          {
            // API服务编码&参数
            apiServiceCode:
              paApis.veBuDlrAccountRLogQueryFrozenFindAll.ServiceCode,
            apiServiceParam:
              "(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)",
            //表格中台返回网格的字段
            apiQueryRow: [
              "amount",
              "amountSource",
              "column1",
              "dlrCode",
              "dlrShortName",
              "groupCode",
              "groupId",
              "oemCode",
              "oemId",
              "operDate",
              "operMan",
              "orderCode",
              "remark"
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
          this.$utils.downloadFile(response, "经销商资金详情列表导出.xlsx");
          this.listLoading = false;
        } else if (
          response.data[paApis.veBuDlrAccountRLogQueryFrozenFindAll.ServiceCode]
            .result === "1" &&
          response.data[paApis.veBuDlrAccountRLogQueryFrozenFindAll.ServiceCode]
            .rows != ""
        ) {
          if (page) {
            //查询完返回指定的page页数
            that.pageIndex = page;
          }
          that.pageTotal =
            response.data[
              paApis.veBuDlrAccountRLogQueryFrozenFindAll.ServiceCode
            ].records;
          that.list =
            response.data[
              paApis.veBuDlrAccountRLogQueryFrozenFindAll.ServiceCode
            ].rows;
          that.listLoading = false;
        } else {
          that.listLoading = false;
        }
      });
    },
    //转款明细查询
    remitDetailsQurey(
      page,
      dataType = "",
      excelName = "",
      excelSheetName = "",
      tableColumns = null
    ) {
      this.flag = 3;
      const that = this;
      that.listLoading = true;
      let queryObj = {
        // 请求类型&参数 保存mutation  查询query
        type: "query",
        typeParam:
          "($pageIndex: Int, $pageSize: Int, $dataInfo: " +
          paApis.veBuDlrAccountRLogQueryInFindAll.InputType +
          ")",
        // 请求API
        apiUrl: paApis.veBuDlrAccountRLogQueryInFindAll.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
          {
            // API服务编码&参数
            apiServiceCode: paApis.veBuDlrAccountRLogQueryInFindAll.ServiceCode,
            apiServiceParam:
              "(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)",
            //表格中台返回网格的字段
            apiQueryRow: [
              "amount",
              "amountSource",
              "column1",
              "dlrCode",
              "dlrShortName",
              "groupCode",
              "groupId",
              "oemCode",
              "oemId",
              "operDate",
              "operMan",
              "orderCode",
              "remark"
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
          this.$utils.downloadFile(response, "经销商资金账户管理列表导出.xlsx");
          this.listLoading = false;
        } else if (
          response.data[paApis.veBuDlrAccountRLogQueryInFindAll.ServiceCode]
            .result === "1" &&
          response.data[paApis.veBuDlrAccountRLogQueryInFindAll.ServiceCode]
            .rows != ""
        ) {
          if (page) {
            //查询完返回指定的page页数
            that.pageIndex = page;
          }
          that.pageTotal =
            response.data[
              paApis.veBuDlrAccountRLogQueryInFindAll.ServiceCode
            ].records;
          that.list =
            response.data[
              paApis.veBuDlrAccountRLogQueryInFindAll.ServiceCode
            ].rows;
          that.listLoading = false;
        } else {
          that.listLoading = false;
        }
      });
    },
    //扣款明细查询
    addingDetailsQurey(
      page,
      dataType = "",
      excelName = "",
      excelSheetName = "",
      tableColumns = null
    ) {
      this.flag = 4;
      const that = this;
      that.listLoading = true;
      let queryObj = {
        type: "query",
        typeParam:
          "($pageIndex: Int, $pageSize: Int, $dataInfo: " +
          paApis.veBuDlrAccountRLogQueryOutFindAll.InputType +
          ")",
        // 请求API
        apiUrl: paApis.veBuDlrAccountRLogQueryOutFindAll.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
          {
            // API服务编码&参数
            apiServiceCode:
              paApis.veBuDlrAccountRLogQueryOutFindAll.ServiceCode,
            apiServiceParam:
              "(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)",
            //表格中台返回网格的字段
            apiQueryRow: [
              "amount",
              "amountSource",
              "column1",
              "dlrCode",
              "dlrShortName",
              "groupCode",
              "groupId",
              "oemCode",
              "oemId",
              "operDate",
              "operMan",
              "orderCode",
              "remark"
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
          this.$utils.downloadFile(response, "经销商资金账户管理列表导出.xlsx");
          this.listLoading = false;
        } else if (
          response.data[paApis.veBuDlrAccountRLogQueryOutFindAll.ServiceCode]
            .result === "1" &&
          response.data[paApis.veBuDlrAccountRLogQueryOutFindAll.ServiceCode]
            .rows != ""
        ) {
          if (page) {
            //查询完返回指定的page页数
            that.pageIndex = page;
          }
          that.pageTotal =
            response.data[
              paApis.veBuDlrAccountRLogQueryOutFindAll.ServiceCode
            ].records;
          that.list =
            response.data[
              paApis.veBuDlrAccountRLogQueryOutFindAll.ServiceCode
            ].rows;
          that.listLoading = false;
        } else {
          that.listLoading = false;
        }
      });
    },
    //结算金额明细查询
    subtractDetailsQurey(
      page,
      dataType = "",
      excelName = "",
      excelSheetName = "",
      tableColumns = null
    ) {
      this.flag = 5;
      const that = this;
      that.listLoading = true;
      let queryObj = {
        // 请求类型&参数 保存mutation  查询query
        type: "query",
        typeParam:
          "($pageIndex: Int, $pageSize: Int, $dataInfo: " +
          paApis.veBuDlrAccountRLogQuerySettlementFindAll.InputType +
          ")",
        // 请求API
        apiUrl: paApis.veBuDlrAccountRLogQuerySettlementFindAll.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
          {
            // API服务编码&参数
            apiServiceCode:
              paApis.veBuDlrAccountRLogQuerySettlementFindAll.ServiceCode,
            apiServiceParam:
              "(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)",
            //表格中台返回网格的字段
            apiQueryRow: [
              "amount",
              "amountSource",
              "column1",
              "dlrCode",
              "dlrShortName",
              "groupCode",
              "groupId",
              "oemCode",
              "oemId",
              "operDate",
              "operMan",
              "orderCode",
              "remark"
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
          this.$utils.downloadFile(response, "经销商资金账户管理列表导出.xlsx");
          this.listLoading = false;
        } else if (
          response.data[
            paApis.veBuDlrAccountRLogQuerySettlementFindAll.ServiceCode
          ].result === "1" &&
          response.data[
            paApis.veBuDlrAccountRLogQuerySettlementFindAll.ServiceCode
          ].rows != ""
        ) {
          if (page) {
            //查询完返回指定的page页数
            that.pageIndex = page;
          }
          that.pageTotal =
            response.data[
              paApis.veBuDlrAccountRLogQuerySettlementFindAll.ServiceCode
            ].records;
          that.list =
            response.data[
              paApis.veBuDlrAccountRLogQuerySettlementFindAll.ServiceCode
            ].rows;
          that.listLoading = false;
        } else {
          that.listLoading = false;
        }
      });
    },
    //银行汇款明细查询
    balanceMoneyDetailsQurey(
      page,
      dataType = "",
      excelName = "",
      excelSheetName = "",
      tableColumns = null
    ) {
      this.flag = 2;
      const that = this;
      that.listLoading = true;
      let queryObj = {
        // 请求类型&参数 保存mutation  查询query
        type: "query",
        typeParam:
          "($pageIndex: Int, $pageSize: Int, $dataInfo: " +
          paApis.veBuDlrAccountRLogQueryBankFindAll.InputType +
          ")",
        // 请求API
        apiUrl: paApis.veBuDlrAccountRLogQueryBankFindAll.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
          {
            // API服务编码&参数
            apiServiceCode:
              paApis.veBuDlrAccountRLogQueryBankFindAll.ServiceCode,
            apiServiceParam:
              "(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)",
            //表格中台返回网格的字段
            apiQueryRow: [
              "amount",
              "amountSource",
              "column1",
              "dlrCode",
              "dlrShortName",
              "groupCode",
              "groupId",
              "oemCode",
              "oemId",
              "operDate",
              "operMan",
              "orderCode",
              "remark"
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
          this.$utils.downloadFile(response, "经销商资金账户管理列表导出.xlsx");
          this.listLoading = false;
        } else if (
          response.data[paApis.veBuDlrAccountRLogQueryBankFindAll.ServiceCode]
            .result === "1" &&
          response.data[paApis.veBuDlrAccountRLogQueryBankFindAll.ServiceCode]
            .rows != ""
        ) {
          if (page) {
            //查询完返回指定的page页数
            that.pageIndex = page;
          }
          that.pageTotal =
            response.data[
              paApis.veBuDlrAccountRLogQueryBankFindAll.ServiceCode
            ].records;
          that.list =
            response.data[
              paApis.veBuDlrAccountRLogQueryBankFindAll.ServiceCode
            ].rows;
          that.listLoading = false;
        } else {
          that.listLoading = false;
        }
      });
    },
    //改变页显示大小时候进行查询
    handleSizeChange(val) {
      let that = this;
      that.pageSize = val;
      switch (that.flag) {
        case 1:
          that.frozenMoneyQurey();
          break;
        case 2:
          that.balanceMoneyDetailsQurey();
          break;
        case 3:
          that.remitDetailsQurey();
          break;
        case 4:
          that.addingDetailsQurey();
          break;
        case 5:
          that.subtractDetailsQurey();
          break;
      }
    },
    //改变页码时进行查询
    handleCurrentChange(val) {
      let that = this;
      that.pageIndex = val;
      switch (that.flag) {
        case 1:
          that.frozenMoneyQurey();
          break;
        case 2:
          that.balanceMoneyDetailsQurey();
          break;
        case 3:
          that.remitDetailsQurey();
          break;
        case 4:
          that.addingDetailsQurey();
          break;
        case 5:
          that.subtractDetailsQurey();
          break;
      }
      // this.balanceMoneyDetailsQurey();
      //this.frozenMoneyQurey();
    },
    sendCode() {
      this.$emit("changeCode", false);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
