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
            <el-col :span="6">
              <label>经销商编码</label>
              <el-input
                v-model="formField.dlrCode"
                suffix-icon="el-icon-search"
                placeholder="请选择"
                size="small"
                @focus="openDlr"
              />
            </el-col>
            <el-col :span="6">
              <label>经销商</label>
              <el-input
                v-model="formField.dlrShortName"
                suffix-icon="el-icon-search"
                placeholder="请选择"
                size="small"
                :disabled="true"
              />
            </el-col>
            <LookupValue
              :span="6"
              :isMul="isMul"
              :isShowLabel="isShowLabel"
              :code="formField.amountSource"
              :lookuptype="lookuptype"
              :labelName="lookupValuelable"
              @changeCode="getLookupValue"
            />
            <seCommonQueryChooseDlr
              ref="seCommonQueryChooseDlr"
              :isMul="isMul"
              :seComQueChoDlrVisible="seComQueChoDlrVisible"
              @sentCode="getComQueCho"
              @close="closeComQueCho"
            />
            <capitalDetail @changeCode="getDetails" :capitalDetailVisible="capitalDetailVisible"></capitalDetail>
            <el-col :span="6">
              <label>上账日期</label>
              <el-date-picker
                v-model="formField.dete"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              ></el-date-picker>
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
      @row-click="getRowCode"
    >
      <el-table-column label="序号" width="60" type="index" align="center"></el-table-column>
      <el-table-column prop="dlrShortName" label="经销商简称" width="150" align="center"></el-table-column>
      <el-table-column prop="amountSource" label="资金来源" width="120" align="center"></el-table-column>
      <el-table-column prop="tranAmount" label="金额" width="120" align="center"></el-table-column>
      <el-table-column prop="balance" label="余额" width="120" align="center"></el-table-column>
      <el-table-column prop="orderCode" label="单号" width="170" align="center"></el-table-column>
      <el-table-column prop="operDate" label="上账日期" width="170" align="center"></el-table-column>
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
  </div>
</template>
<script>
import { paApis } from "@/api/graphQLApiList/pa";
import { requestGraphQL } from "@/api/commonRequest";
import carBrand from "@/components/org/carBrand/carBrand";
import seCommonQueryChooseDlr from "@/components/se/seCommonQueryChooseDlr";
import capitalDetail from "./capitalDetail.vue";
import LookupValue from "@/components/org/LookupValue";
export default {
  name: "pacwsh",
  components: {
    carBrand,
    seCommonQueryChooseDlr,
    capitalDetail,
    LookupValue
  },
  data() {
    return {
      pageTotal: 0,
      isMul: false,
      isShowLabel: true,
      lookupValuelable: "资金来源",
      lookuptype: "PA0036",
      list: [],
      rowList: "",
      seComQueChoDlrVisible: false,
      capitalDetailVisible: false,
      isMul: false,
      formField: {
        dlrId: "202",
        beginBusinessDate: "",
        endBusinessDate: ""
      },

      //之前的数据

      isMul: false,
      code: "1",
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
    this.textQurey();
  },
  methods: {
    // 导出
    getExcel() {
      var tableColumns = null ? null : this.$refs.multipleTable.columns;
      this.textQurey(
        1,
        "excel",
        "经销商资金账户管理查询列表导出",
        "经销商资金账户管理查询列表",
        tableColumns
      );
    },
    //获取下拉框值
    getLookupValue(val) {
      this.formField.amountSource = val;
    },
    //资金详情弹窗
    showBlanceDetails(scope) {
      this.capitalDetailVisible = true;
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
        amountSource: "",
        brandCode: "",
        dete: "",
        dlrShortName: ""
      };
    },
    //获取经销商名称
    getComQueCho(val) {
      this.formField.dlrShortName = val.dlrShortName;
      this.formField.dlrCode = val.dlrCode;
      this.seComQueChoDlrVisible = false;
    },
    //获取品牌名称
    getBrandCode(val) {
      this.formField.brandCode = val;
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
          paApis.veBuDlrAccountRLogQueryFindAll.InputType +
          ")",
        // 请求API
        apiUrl: paApis.veBuDlrAccountRLogQueryFindAll.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
          {
            // API服务编码&参数
            apiServiceCode: paApis.veBuDlrAccountRLogQueryFindAll.ServiceCode,
            apiServiceParam:
              "(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)",
            //表格中台返回网格的字段
            apiQueryRow: [
              "dlrCode",
              "dlrShortName",
              "amountSource",
              "amount",
              "orderCode",
              "column1",
              "operDate",
              "operMan",
              "remark",
              "oemId",
              "groupId",
              "oemCode",
              "groupCode"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.pageSize,
          pageIndex: page || that.pageIndex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.formField
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      if (dataType === "excel") {
        queryObj.variables.pageSize = 99999;
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
          this.$utils.downloadFile(
            response,
            "经销商资金账户管理查询列表导出.xlsx"
          );
          this.listLoading = false;
        } else if (
          response.data[paApis.veBuDlrAccountRLogQueryFindAll.ServiceCode]
            .result === "1" &&
          response.data[paApis.veBuDlrAccountRLogQueryFindAll.ServiceCode]
            .rows != ""
        ) {
          if (page) {
            //查询完返回指定的page页数
            that.pageIndex = page;
          }
          that.pageTotal =
            response.data[
              paApis.veBuDlrAccountRLogQueryFindAll.ServiceCode
            ].records;
          that.list =
            response.data[
              paApis.veBuDlrAccountRLogQueryFindAll.ServiceCode
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
.text {
  line-height: 28px;
  padding: 0 35px;
  display: flex;
  justify-content: space-between;
}
</style>