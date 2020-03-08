<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
      <el-button size="small" @click="reset()">重置</el-button>
      <el-button size="small" @click="exportExcel()">导出</el-button>
    </div>
    <div class="filter-container filter-title" ref="conTitleHeight">查询条件</div>
    <div class="filter-container filter-params" ref="conHeight">
      <carSeriesSelect ref="carSeriesSelect" @changeCode="getCarSeriesSelect" :span="6" />
      <partsCarTypeSelect ref="partsCarTypeSelect" @changeCode="getCarTypeSelect" :span="6" />

      <CarTypeModal :isMul="isMul1" ref="CarTypeModal" @changeCode="getCarTypeCode" />

      <el-row :gutter="26">
        <el-col :span="6">
          <lableName curLabelName="车型"></lableName>
          <el-input
            v-model="listQuery.carTypeCode"
            placeholder="请选择"
            size="small"
            @focus="openCarType"
          ></el-input>
        </el-col>
        <!-- <brand
          :span="6"
          :isMul="true"
          :key="brandKey"
          :labelName="brandName"
          :code="listQuery.brandCode"
          @changeCode="getBrandCode"
        ></brand>-->
        <LookupValue
          :span="6"
          :isMul="isMul"
          :isShowLabel="isShowLabel"
          :code="listQuery.partBrandCode"
          :lookuptype="partBrandCodeLookuptype"
          :labelName="partBrandCodeLookupValuelable"
          @changeCode="getPartBrandCode"
        />
        <el-col :span="6">
          <label>经销商</label>
          <el-input
            v-model="listQuery.dlrShortName"
            suffix-icon="el-icon-search"
            placeholder="请选择"
            size="small"
            @focus="dealer"
          />
        </el-col>
        <dealer
          :dealerVisible="dealerVisible"
          @changeCode="getDealerCode"
          @selectDealer="selectDealer"
        ></dealer>
        <el-col :span="6">
          <lableName curLabelName="供应商简称" :isShowLabel="true" :isRequire="false" class="margin-r-0"></lableName>
          <el-date-picker
            v-model="doubleDate"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd HH:mm:ss"
          ></el-date-picker>
        </el-col>
      </el-row>
    </div>
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
      :height="tableHeight"
      ref="multipleTable"
    >
      <el-table-column align="center" label="序号" width="60">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column type="selection" width="55" label="选择+" />
      <el-table-column label="经销商品牌" width="155" prop="carBrandCode">
        <span slot-scope="scope">{{ scope.row.carBrandCode }}</span>
      </el-table-column>
      <el-table-column label="经销商编码" width="120" prop="dlrCode">
        <template slot-scope="scope">{{ scope.row.dlrCode }}</template>
      </el-table-column>
      <el-table-column label="经销商简称" width="180" prop="dlrShortName">
        <template slot-scope="scope">{{ scope.row.dlrShortName }}</template>
      </el-table-column>
      <el-table-column label="账户名称" width="120" prop="dlrAccountName">
        <template slot-scope="scope">{{ scope.row.dlrAccountName }}</template>
      </el-table-column>
      <el-table-column label="账户余额" align="center" width="120" prop="dlrBalance">
        <template slot-scope="scope">{{ scope.row.dlrBalance }}</template>
      </el-table-column>
      <el-table-column label="信用额度" align="center" width="120" prop="creditQuota">
        <template slot-scope="scope">{{ scope.row.creditQuota }}</template>
      </el-table-column>
      <el-table-column label="预扣额度" align="center" width="120" prop="frozenMoney">
        <template slot-scope="scope">{{ scope.row.frozenMoney }}</template>
      </el-table-column>
      <el-table-column label="银行汇款" align="center" width="120" prop="remit">
        <template slot-scope="scope">{{ scope.row.remit }}</template>
      </el-table-column>
      <el-table-column label="转款" align="center" width="155" prop="adding">
        <template slot-scope="scope">{{ scope.row.adding }}</template>
      </el-table-column>
      <el-table-column label="扣款" align="center" width="155" prop="subtract">
        <template slot-scope="scope">{{ scope.row.subtract }}</template>
      </el-table-column>
      <el-table-column label="结算金额" align="center" width="155" prop="balanceMoney">
        <template slot-scope="scope">{{ scope.row.balanceMoney }}</template>
      </el-table-column>
      <el-table-column label="更新时间" align="center" width="155" prop="lastUpdatedDate">
        <template slot-scope="scope">{{ scope.row.lastUpdatedDate }}</template>
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
import { paApis } from "@/api/graphQLApiList/pa";
// import { paBuPurOrderQueryFindAll } from "@/api/pa/paBuPurOrder";
import { paBuOemDlrAccountQueryPriceFindAll } from "@/api/pa/basedata/paBuOemDlrAccount";
// import brand from "@/components/org/carBrand/carBrand";
import dealer from "@/views/pa/storepurchaseorder/creatOrder/dealerSelect";
import lableName from "@/components/lableName";
import LookupValue from "@/components/org/LookupValue";
import { the_Height } from "@/components/se/seMixins/makeHeight";

import carSeriesSelect from "@/components/se/chooseCarSeriesSelect";
import partsCarTypeSelect from "@/components/se/partsCarTypeSelect";
import CarTypeModal from "@/components/se/CarTypeModal/CarTypeModal";

export default {
  mixins: [the_Height],
  components: {
    // brand,
    dealer,
    lableName,
    LookupValue,

    carSeriesSelect,
    partsCarTypeSelect,
    CarTypeModal
  },
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      pageSize: "10",
      pageIndex: "1",
      isMul: false,
      list: null,
      listLoading: true,
      // brandKey: "",
      dealerVisible: false,
      // brandName: "",
      doubleDate: undefined, //单据起止时间
      listQuery: {
        // brandCode: undefined, //品牌
        partBrandCode: undefined, //品牌
        dlrShortName: undefined, //经销商
        beginBusinessDate: undefined, //单据开始时间
        endBusinessDate: undefined, //单据结束时间
        carSeriesCode: undefined,

        carTypeCode: undefined //车型
      },
      formField: {
        carSeriesCode: ""
      },
      isShowLabel: true,
      partBrandCodeLookuptype: "PA0008",
      partBrandCodeLookupValuelable: "备件品牌",
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      },
      isMul1: false,
      listRecords: null
    };
  },
  created() {
    // this.fetchData();
    this.listLoading = false;
    this.dropDownBox();
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
    fetchData(page, dataType) {
      this.listLoading = true;
      if (this.doubleDate != undefined && this.doubleDate != null) {
        this.listQuery.beginBusinessDate = this.doubleDate[0];
        this.listQuery.endBusinessDate = this.doubleDate[1];
      }

      //转换了中台请求格式数据
      var pageSize = dataType == "excel" ? 99999 : this.pageSize;
      var tableColumns =
        this.$refs.multipleTable == null
          ? null
          : this.$refs.multipleTable.columns;
      paBuOemDlrAccountQueryPriceFindAll(
        pageSize,
        page || this.pageIndex,
        this.listQuery,
        dataType,
        "账户余额列表导出",
        "账户余额列表",
        tableColumns
      ).then(response => {
        if (dataType == "excel") {
          //导出excel查询
          this.$utils.downloadFile(response, "账户余额列表导出.xlsx");
          this.listLoading = false;
        } else {
          this.list = response.data.paBuOemDlrAccountQueryPriceFindAll.rows;
          this.listRecords = Number(
            response.data.paBuOemDlrAccountQueryPriceFindAll.records
          );
          this.listLoading = false;
        }
      });
    },
    reset() {
      this.listQuery.brandCode = undefined;
      this.listQuery.dlrShortName = undefined;
      this.listQuery.partBrandCode = undefined;
      this.doubleDate = [];
      this.listQuery.beginBusinessDate = undefined;
      this.listQuery.endBusinessDate = undefined;
      this.listQuery.carTypeCode = null;
    },
    dropDownBox() {},
    /* getBrandCode(val) {
      this.listQuery.brandCode = val;
    }, */
    getDealerCode(val) {
      this.dealerVisible = false;
    },
    selectDealer(val) {
      this.listQuery.dlrShortName = val[0].dlrShortName;
      this.dealerVisible = false;
    },
    dealer() {
      this.dealerVisible = true;
    },
    getPartBrandCode(val) {
      this.listQuery.partBrandCode = val;
    },
    getCarSeriesSelect(val) {
      // this.listQuery.carSeriesCode = val;
      this.formField.carSeriesCode = val;
      this.$refs.partsCarTypeSelect.parentFileds = "carSeriesCode";
      this.$refs.partsCarTypeSelect.optionDatas = [];
      this.$refs.partsCarTypeSelect.setQueryFields(this.formField);
      // this.$refs.partsCarTypeSelect.setQueryFields(this.listQuery);
      console.log(val);
    },
    getCarTypeSelect(val) {
      console.log(val);
    },
    getCarTypeModal(val) {
      console.log(val);
    },
    openCarType() {
      let obj = {
        carBrandCode: "",
        carSeriesCode: "",
        carSeriesCn: ""
      };
      this.$refs.CarTypeModal.open(obj);
    },
    getCarTypeCode(
      code,
      text,
      codeField,
      carBrandCn,
      carTypeCode,
      comType,
      popupsKey,
      rows
    ) {
      this.listQuery.carTypeCode = code;
    },
    exportExcel() {
      this.fetchData(1, "excel");
    }
  }
};
</script>
<style lang="scss" scoped>
/deep/ .margin-r-0 {
  margin-right: 0;
}
/deep/ .margin-b-0 {
  margin-bottom: 0;
}
/deep/ .margin-t-8 {
  margin-top: 8px;
}
</style>