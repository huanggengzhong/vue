<template>
  <div>
    <div class="app-container app-container-table">
      <div class="filter-container filter-button" ref="searcheHeight">
        <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
        <el-button size="small" @click="showDialog">明细</el-button>
        <el-button size="small" @click="reset">重置</el-button>
      </div>
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <el-col :span="6">
            <label>申请日期</label>
            <el-date-picker
              v-model="applyDate"
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
          <el-col :span="6">
            <label>精品销售单号</label>
            <el-input v-model="queryParams.dataInfo.salesNo" placeholder="请输入" size="small"></el-input>
          </el-col>
          <el-col :span="6">
            <label>客户姓名</label>
            <el-input v-model="queryParams.dataInfo.retreatNo" placeholder="请输入" size="small"></el-input>
          </el-col>
          <carBrand
            :isMul="true"
            :span="6"
            :code="queryParams.dataInfo.carBrandCode"
            labelName="车辆品牌"
            :key="carBrandKey"
            ref="select_carBrandCode"
            @changeCode="getCarBrand"
          ></carBrand>
        </el-row>
        <el-row :gutter="26">
          <el-col :span="6">
            <label>车牌号</label>
            <el-input v-model="queryParams.dataInfo.carNo" placeholder="请输入" size="small"></el-input>
          </el-col>
          <el-col :span="6">
            <label>VIN码</label>
            <el-input v-model="queryParams.dataInfo.VIN" placeholder="请输入" size="small"></el-input>
          </el-col>
        </el-row>
      </div>
      <mix-table
        ref="tableList"
        :queryParams="queryParams"
        :dynamicTableCols="cols"
        :isShowSelect="false"
        :isPaging="true"
        :isDialog="false"
        @rowClick="getChangeCode"
      />
      <!-- 明细弹框 -->
      <boutiqueSalesDialog
        ref="dialogVisible"
        :supplierDialogVisible="supplierDialogVisible"
        :rowData="rowData"
        @close="closeDialog"
      />
    </div>
  </div>
</template>
<script>
import carBrand from "@/components/org/carBrand/carBrand";
import mixTable from "@/components/basicComponent/mixTable";
import LookupValue from "@/components/org/LookupValue";
import {
  doQueryList,
  doDelete,
  doPrintQuery
} from "@/api/se/repair/sales/boutiqueSalesRe";
import { seApis } from "@/api/graphQLApiList/se";
import { format } from "path";
import boutiqueSalesDialog from "./boutiqueSalesDialog";
export default {
  components: {
    mixTable,
    LookupValue,
    carBrand,
    boutiqueSalesDialog
  },
  filters: {},
  data() {
    return {
      applyDate: [],
      carBrandKey: "",
      dialogVisible: false,
      supplierDialogVisible: false,
      listSave: {},
      rules: {},
      cols: [
        { label: "车辆品牌", codeField: "carBrandCn" },
        { label: "精品销售单号", codeField: "salesNo" },
        { label: "车牌号", codeField: "carNo" },
        { label: "VIN码", codeField: "VIN" },
        { label: "客户姓名", codeField: "applyName" },
        { label: "申请时间", codeField: "applyStartTime" }
      ],
      queryParams: {
        APIUrl: seApis.boutiqueSalesReQueryFindAll.APIUrl,
        InputType: seApis.boutiqueSalesReQueryFindAll.InputType,
        ServiceCode: seApis.boutiqueSalesReQueryFindAll.ServiceCode,
        dataInfo: {
          applyStartTime: "",
          applyEndTime: "",
          salesNo: "",
          retreatNo: "",
          carBrandCode: "",
          carNo: "",
          VIN: "",
          applyNameNo: ""
        },
        apiQueryRow: [
          "carBrandCn",
          "carBrandCode",
          "salesNo",
          "retreatNo",
          "carNo",
          "applyStartTime",
          "applyName",
          "applyNameNo",
          "VIN",
          "boutiqueNo",
          "boutiqueName",
          "applyNumber",
          "retreatNumber",
          "retreatStatus"
        ]
      }
    };
  },
  created() {
    var now = new Date();
    let applyStartTime = this.$utils.parseTime(now, "{y}-{m}-{d}");
    now.setMonth(now.getMonth() - 1);
    let applyEndTime = this.$utils.parseTime(now, "{y}-{m}-{d}");
    this.applyDate = [];
    this.applyDate.push(applyEndTime);
    this.applyDate.push(applyStartTime);
  },
  methods: {
    fetchData() {
      this.queryParams.dataInfo.applyStartTime = this.applyDate[0];
      this.queryParams.dataInfo.applyEndTime = this.applyDate[1];
      this.$refs.tableList.queryList();
    },
    //查询区获取时间
    getTime(val) {
      this.queryParams.dataInfo.applyStartTime = val[0];
      this.queryParams.dataInfo.applyEndTime = val[1];
    },
    //点击明细弹出弹框
    showDialog() {
      if (this.$refs.tableList.currentRow.length == 0) {
        this.$alert("请选中一行", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        return;
      } else {
        this.supplierDialogVisible = true;
      }
      // this.$refs.tableList2.queryList();
    },
    //重置
    reset() {
      this.applyDate = [];
      this.queryParams.dataInfo.applyStartTime = "";
      this.queryParams.dataInfo.applyEndTime = "";
      this.queryParams.dataInfo.salesNo = "";
      this.queryParams.dataInfo.retreatNo = "";
      this.queryParams.dataInfo.carBrandCode = "";
      this.queryParams.dataInfo.carNo = "";
      this.queryParams.dataInfo.VIN = "";
      this.queryParams.dataInfo.applyNameNo = "";
    },
    //弹框关闭
    closeDialog(val) {
      this.supplierDialogVisible = val;
    },
    //获取申情人code
    getApplyNameNo(val) {
      this.listSave.applyNameNo = val;
    },
    //获取车辆品牌code
    getCarBrand(val) {
      this.queryParams.dataInfo.carBrandCode = val;
    },
    //获取点击行数据
    getChangeCode(row) {
      this.rowData = row;
    }
  }
};
</script>