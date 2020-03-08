<template>
  <div>
    <div class="app-container app-container-table">
      <div class="filter-container filter-button" ref="searcheHeight">
        <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
        <el-button size="small" :disabled="isDisabled" @click="showDialog">明细</el-button>
        <el-button size="small" :disabled="displayDisabled">打印</el-button>
        <el-button size="small" @click="reset">重置</el-button>
      </div>
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <carBrand
            :isMul="true"
            :span="6"
            :code="queryParams.dataInfo.carBrandCode"
            labelName="车辆品牌"
            :key="carBrandKey"
            ref="select_carBrandCode"
            @changeCode="getCarBrand"
          ></carBrand>
          <el-col :span="6">
            <label>销售单号</label>
            <el-input v-model="queryParams.dataInfo.acceOrderCode" placeholder="请输入" size="small"></el-input>
          </el-col>
          <el-col :span="6">
            <label>车牌号</label>
            <el-input v-model="queryParams.dataInfo.carLicense" placeholder="请输入" size="small"></el-input>
          </el-col>
          <el-col :span="6">
            <label>VIN码</label>
            <el-input v-model="queryParams.dataInfo.vin" placeholder="请输入" size="small"></el-input>
          </el-col>
          <LookupValue
            :span="6"
            :isMul="false"
            :isshow="true"
            :code="queryParams.dataInfo.saleEmp"
            labelName="销售人员"
            lookuptype="SE0095"
            @changeCode="getApplyNameNo"
          />
          <LookupValue
            :span="6"
            :isMul="false"
            :isshow="true"
            :code="queryParams.dataInfo.acceOrderStateName"
            labelName="销售单状态"
            lookuptype="SE0016"
            @changeCode="getacceOrderStateName"
          />
          <el-col :span="6">
            <label>销售日期</label>
            <el-date-picker
              v-model="salesDate"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              unlink-panels
              value-format="yyyy-MM-dd"
              format="yyyy-MM-dd"
              @change="getTime"
            ></el-date-picker>
          </el-col>
        </el-row>
      </div>
      <mix-table
        ref="tableList1"
        :queryParams="queryParams"
        :dynamicTableCols="cols"
        :isShowSelect="false"
        :isPaging="true"
        :isDialog="false"
        @rowClick="getChangeCode"
      />
      <!-- @rowClick="getChangeCode" -->
      <!-- 明细弹框 -->
      <jpxsjsDialog
        ref="dialogVisible"
        :supplierDialogVisible="supplierDialogVisible"
        :rowData="rowData"
        :listData="detailList"
        @close="closeDialog"
      />
    </div>
  </div>
</template>
<script>
import carBrand from "@/components/org/carBrand/carBrand";
import mixTable from "@/components/basicComponent/mixTable";
import LookupValue from "@/components/org/LookupValue";
import { seApis } from "@/api/graphQLApiList/se";
import config from "@/utils/config";
import {
  doQueryList,
  doSave,
  doQueryListDetail
} from "@/api/se/repair/sales/jpxsjs";
import { format } from "path";
import jpxsjsDialog from "./jpxsjsDialog";
export default {
  components: {
    mixTable,
    LookupValue,
    carBrand,
    jpxsjsDialog
  },
  data() {
    return {
      detailList: [],
      isDisabled: true,
      displayDisabled: true,
      rowData: [],
      carBrandKey: "",
      rules: {},
      salesDate: [],
      supplierDialogVisible: false,
      cols: [
        { label: "车辆品牌", codeField: "carBrandCn" },
        { label: "销售单号", codeField: "acceOrderCode" },
        { label: "车牌号", codeField: "carLicense" },
        { label: "客户名称", codeField: "custName" },
        { label: "销售时间", codeField: "buyDate" },
        { label: "VIN码", codeField: "vin" },
        // { label: "结算单号", codeField: "jsdh" },
        { label: "销售人员", codeField: "saleEmp" },
        { label: "销售单状态", codeField: "acceOrderStateName" }
      ],
      queryParams: {
        APIUrl: seApis.seBuAcceOrderQueryFindAll.APIUrl,
        InputType: seApis.seBuAcceOrderQueryFindAll.InputType,
        ServiceCode: seApis.seBuAcceOrderQueryFindAll.ServiceCode,
        dataInfo: {
          dlrId: "", //经销商id
          saleBegDate: "", //销售开始日期
          saleEndDate: "", //销售结束日期
          acceOrderCode: "", //销售单号
          carLicense: "", //车牌号
          vin: "", //VIN码
          saleEmp: "", //销售人员
          acceOrderStateName: "", //销售单状态
          carBrandCode: "" //车辆品牌
        },
        apiQueryRow: [
          "carBrandCode", //车辆品牌
          "carBrandCn", //车辆品牌中文
          "acceOrderCode", //销售单号
          "carLicense", //车牌号
          "custName", //客户名称
          "buyDate", //销售时间
          "vin", //VIN码
          "jsdh", //结算单号
          "saleEmp", //销售人员
          "acceOrderStateName", //销售单状态
          "acceOrderId", //精品销售单id
          "dlrCustNo", //经销商客户编码
          "updateControlId", //并发id
          "gatheringAmount", //应收金额
          "factReceivedAmount", //实收金额
          "billAmount", //开票金额
          "payType", //付款方式
          "billNo", //发票号
          "factReceivedAmount" //本次收款总额
        ]
      }
    };
  },
  mounted() {
    this.detailData();
  },
  created() {
    var now = new Date();
    let saleBegDate = this.$utils.parseTime(now, "{y}-{m}-{d}");
    now.setMonth(now.getMonth() - 1);
    let saleEndDate = this.$utils.parseTime(now, "{y}-{m}-{d}");
    this.salesDate = [];
    this.salesDate.push(saleEndDate);
    this.salesDate.push(saleBegDate);
  },
  methods: {
    //查询
    fetchData() {
      this.queryParams.dataInfo.saleBegDate = this.salesDate[0];
      this.queryParams.dataInfo.saleEndDate = this.salesDate[1];
      this.$refs.tableList1.queryList();
      this.isDisabled = true;
      this.displayDisabled = true;
    },
    //弹框精品明细查询
    detailData() {
      // this.listLoading = true;
      //this.listQuery.deptCode = undefined;
      doQueryListDetail(this.pageSize, this.pageIndex, this.rowData).then(
        response => {
          if (response.data[seApis.seBuAccePartQueryFindAll.ServiceCode].result === "1") {
            this.detailList = response.data[seApis.seBuAccePartQueryFindAll.ServiceCode].rows;
            this.pageTotal = response.data[seApis.seBuAccePartQueryFindAll.ServiceCode].records;
            //this.curRow={};
            // this.listLoading = false;
          }
        }
      );
    },
    //重置
    reset() {
      this.salesDate = [];
      this.queryParams.dataInfo.saleBegDate = "";
      this.queryParams.dataInfo.saleEndDate = "";
      this.queryParams.dataInfo.acceOrderCode = "";
      this.queryParams.dataInfo.carLicense = "";
      this.queryParams.dataInfo.saleEmp = "";
      this.queryParams.dataInfo.acceOrderStateName = "";
      this.queryParams.dataInfo.vin = "";
      this.queryParams.dataInfo.carBrandCode = "";
    },
    //弹框关闭
    closeDialog(val) {
      this.supplierDialogVisible = val;
    },
    //点击明细弹出弹框
    showDialog() {
      if (this.$refs.tableList1.currentRow.length == 0) {
        this.$alert("请选中一行", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        return;
      } else {
        this.supplierDialogVisible = true;
      }
      this.detailData();
      // this.$refs.tableList12.queryList();
    },
    //查询区获取时间
    getTime(val) {
      this.queryParams.dataInfo.saleBegDate = val[0];
      this.queryParams.dataInfo.saleEndDate = val[1];
    },
    //获取车辆品牌code
    getCarBrand(val) {
      this.queryParams.dataInfo.carBrandCode = val;
    },
    //获取申情人
    getApplyNameNo(val) {
      this.queryParams.dataInfo.saleEmp = val;
    },
    //获取销售单状态
    getacceOrderStateName(val) {
      this.queryParams.dataInfo.acceOrderStateName = val;
    },
    //获取点击行数据
    getChangeCode(row) {
      this.isDisabled = false;
      this.displayDisabled = false;
      this.rowData = row;
    }
  }
};
</script>