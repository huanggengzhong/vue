<!--
* description: 经销商资金账户管理
* author: chchhui
* createdDate: 2019-08-05
* logs：
*  20190805 新增页面功能
-->
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
            <div class></div>
            <carBrand
              :span="6"
              :isMul="true"
              :code="formField.carBrandCode"
              @changeCode="getBrandCode"
            ></carBrand>
            <el-col :span="6">
              <label>经销商</label>
              <el-input
                v-model="formField.dlrShortName"
                suffix-icon="el-icon-search"
                placeholder="请选择"
                size="small"
                @focus="openDlr"
              />
            </el-col>
            <seCommonQueryChooseDlr
              ref="seCommonQueryChooseDlr"
              :isMul="isMul"
              :seComQueChoDlrVisible="seComQueChoDlrVisible"
              @sentCode="getComQueCho"
              @close="closeComQueCho"
            />
            <capitalDetail
              @changeCode="getDetails"
              :key="capitalDetailVisible"
              :editData="rowList"
              :capitalDetailVisible="capitalDetailVisible"
              ref="detailCode"
            ></capitalDetail>
            <el-col :span="6">
              <label>上账日期</label>
              <el-date-picker v-model="formField.beginBusinessDate" type="date" placeholder="选择日期"></el-date-picker>
            </el-col>
            <el-col :span="6">
              <label>至</label>
              <el-date-picker v-model="formField.endBusinessDate" type="date" placeholder="选择日期"></el-date-picker>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>

    <div class="filter-container filter-title">查询结果</div>
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

      <el-table-column prop="carBrandCode" label="经销商品牌" width="100" align="center"></el-table-column>
      <el-table-column prop="dlrCode" label="经销商编码" width="100" align="center"></el-table-column>
      <el-table-column prop="dlrShortName" label="经销商简称" width="120" align="center"></el-table-column>
      <el-table-column prop="dlrAccountName" label="账户名称" align="center" width="120"></el-table-column>
      <el-table-column prop="useAmount" label="可用金额" width="120" align="center"></el-table-column>
      <el-table-column prop="dlrBalance" label="账户金额" width="120" align="center"></el-table-column>
      <el-table-column prop="creditQuota" label="信用额度" width="120" align="center"></el-table-column>
      <el-table-column prop="frozenMoney" label="预扣金额" width="120" align="center">
        <template slot-scope="scope">
          <el-button type="text" @click="frozenMoneyDetails(scope)">{{scope.row.frozenMoney}}</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="remit" label="银行汇款" width="120" align="center">
        <template slot-scope="scope">
          <el-button type="text" @click="remitDetails(scope)">{{scope.row.remit}}</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="adding" label="转款" width="120" align="center">
        <template slot-scope="scope">
          <el-button type="text" @click="addingDetails(scope)">{{scope.row.adding}}</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="subtract" label="扣款" width="120" align="center">
        <template slot-scope="scope">
          <el-button type="text" @click="subtractDetails(scope)">{{scope.row.subtract}}</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="balanceMoney" label="结算金额" width="120" align="center">
        <template slot-scope="scope">
          <el-button type="text" @click="balanceMoneyDetails(scope)">{{scope.row.balanceMoney}}</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="lastUpdatedDate" label="维护时间" width="160" align="center"></el-table-column>
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
import { paApis } from "@/api/graphQLApiList/pa";
import { requestGraphQL } from "@/api/commonRequest";
import carBrand from "@/components/org/carBrand/carBrand";
import seCommonQueryChooseDlr from "@/components/se/seCommonQueryChooseDlr";
import capitalDetail from "./capitalDetail.vue";
export default {
  name: "pacwsh",
  components: {
    carBrand,
    seCommonQueryChooseDlr,
    capitalDetail
  },
  data() {
    return {
      value1: "",
      pageTotal: 0,
      list: [],
      rowList: {},
      dialogData: {},
      seComQueChoDlrVisible: false,
      capitalDetailVisible: false,
      isMul: false,
      formField: {
        dlrId: this.$store.getters.orgInfo.DLR_ID,
        carBrandCode: "",
        beginBusinessDate: "",
        endBusinessDate: "",
        dlrShortName: ""
      },
      //之前的数据
      isMul: false,
      listLoading: false,
      pageIndex: 1,
      pageSize: 10,

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
  methods: {
    // 导出
    getExcel() {
      var tableColumns = null ? null : this.$refs.multipleTable.columns;
      this.textQurey(
        -1,
        "excel",
        "经销商资金账户管理列表导出",
        "经销商资金账户管理列表",
        tableColumns
      );
    },
    //预扣金额详情弹窗
    frozenMoneyDetails(data) {
      //console.log(data);
      this.rowList = data.row;
      this.capitalDetailVisible = true;
      setTimeout(() => {
        this.$refs.detailCode.frozenMoneyQurey();
      }, 100);
    },
    //银行汇款详情
    remitDetails(data) {
      this.rowList = data.row;
      this.capitalDetailVisible = true;
      setTimeout(() => {
        this.$refs.detailCode.balanceMoneyDetailsQurey();
      }, 100);
    },
    //转款详情
    addingDetails(data) {
      this.rowList = data.row;
      this.capitalDetailVisible = true;
      setTimeout(() => {
        this.$refs.detailCode.remitDetailsQurey();
      }, 100);
    },
    //扣款详情
    subtractDetails(data) {
      this.rowList = data.row;
      this.capitalDetailVisible = true;
      setTimeout(() => {
        this.$refs.detailCode.addingDetailsQurey();
      }, 100);
    },
    //结算金额详情
    balanceMoneyDetails(data) {
      this.rowList = data.row;
      this.capitalDetailVisible = true;
      setTimeout(() => {
        this.$refs.detailCode.subtractDetailsQurey();
      }, 100);
    },
    getDetails(val) {
      this.capitalDetailVisible = false;
    },
    //打开经销商弹窗
    openDlr() {
      this.seComQueChoDlrVisible = true;
    },

    //重置
    reset() {
      this.formField = {
        carBrandCode: "",
        beginBusinessDate: "",
        endBusinessDate: "",
        dlrShortName: ""
      };
    },
    //获取经销商名称
    getComQueCho(val) {
      this.formField.dlrShortName = val.dlrShortName;
      this.seComQueChoDlrVisible = false;
    },
    //获取品牌名称
    getBrandCode(val) {
      this.formField.carBrandCode = val;
    },
    closeComQueCho(val) {
      //点击弹框右上角关闭弹窗，不传递数据
      this.seComQueChoDlrVisible = val;
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
          paApis.paBuOemDlrAccountQueryPriceFindAll.InputType +
          ")",
        // 请求API
        apiUrl: paApis.paBuOemDlrAccountQueryPriceFindAll.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
          {
            // API服务编码&参数
            apiServiceCode:
              paApis.paBuOemDlrAccountQueryPriceFindAll.ServiceCode,
            apiServiceParam:
              "(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)",
            //表格中台返回网格的字段
            apiQueryRow: [
              "adding",
              "amountSource",
              "balanceMoney",
              "carBrandCode",
              "createdDate",
              "creator",
              "creditQuota",
              "dlrAccount",
              "dlrAccountCode",
              //"dlrAccountName",
              "dlrAccountId",
              "dlrBalance",
              "dlrBalanceInit",
              "dlrCode",
              "dlrId",
              "dlrShortName",
              "frozenMoney",
              "groupCode",
              "groupId",
              "isEnable",
              "isGreat",
              "isSystem",
              "lastUpdatedDate",
              "modifier",
              "mycatOpTime",
              "oemCode",
              "oemId",
              "operType",
              "partBrandCode",
              "remark",
              "remit",
              "sdpOrgId",
              "sdpUserId",
              "subtract",
              "updateControlId",
              "useAmount"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.pageSize,
          pageIndex: that.pageIndex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.formField
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
          response.data[paApis.paBuOemDlrAccountQueryPriceFindAll.ServiceCode]
            .result === "1" &&
          response.data[paApis.paBuOemDlrAccountQueryPriceFindAll.ServiceCode]
            .rows != ""
        ) {
          if (page) {
            //查询完返回指定的page页数
            that.pageIndex = page;
          }
          that.pageTotal =
            response.data[
              paApis.paBuOemDlrAccountQueryPriceFindAll.ServiceCode
            ].records;
          that.list =
            response.data[
              paApis.paBuOemDlrAccountQueryPriceFindAll.ServiceCode
            ].rows;
          that.listLoading = false;
        }
      });
    },

    handleSizeChange(val) {
      this.pageSize = val;
      this.textQurey();
    },
    handleCurrentChange(val) {
      this.pageIndex = val;
      this.textQurey();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>