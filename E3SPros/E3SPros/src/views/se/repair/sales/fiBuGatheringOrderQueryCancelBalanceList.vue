<template>
  <div>
    <div class="app-container app-container-table">
      <div class="filter-container filter-button" ref="searcheHeight">
        <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
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
            <label>客户名称</label>
            <el-input v-model="queryParams.dataInfo.custName" placeholder="请输入" size="small"></el-input>
          </el-col>
          <el-col :span="6">
            <label>车牌号</label>
            <el-input v-model="queryParams.dataInfo.carLicense" placeholder="请输入" size="small"></el-input>
          </el-col>
          <el-col :span="6">
            <label>反结算日期</label>
            <el-date-picker
              v-model="fjsDate"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              unlink-panels
              value-format="yyyy-MM-dd"
              format="yyyy-MM-dd"
              @change="getDate"
            ></el-date-picker>
          </el-col>
          <el-col :span="6">
            <label>客户电话</label>
            <el-input v-model="queryParams.dataInfo.linkManTel" placeholder="请输入" size="small"></el-input>
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
      />
    </div>
  </div>
</template>
<script>
import carBrand from "@/components/org/carBrand/carBrand";
import mixTable from "@/components/basicComponent/mixTable";
import { seApis } from "@/api/graphQLApiList/se";
import config from "@/utils/config";
import { format } from "path";

export default {
  components: {
    mixTable,
    carBrand
  },
  data() {
    return {
      detailList: [],
      carBrandKey: "",
      fjsDate: [],
      cols: [
        { label: "车辆品牌", codeField: "carBrandCn" },
        { label: "销售单号", codeField: "acceOrderCode" },
        { label: "收款单号", codeField: "gatheringOrdeCode" },
        { label: "反结算时间", codeField: "cancelBalanceDate" },
        { label: "客户姓名", codeField: "custName" },
        { label: "车牌号", codeField: "carLicense" },
        { label: "VIN码", codeField: "vin" },
        { label: "客户电话", codeField: "linkManTel" },
        { label: "反结算人", codeField: "cancelEmpName" },
        { label: "付款方式", codeField: "payType" },
        { label: "应收金额", codeField: "gatheringAmount" },
        { label: "实收金额", codeField: "factReceivedAmount" },
        { label: "厂家积分", codeField: "pvPoint" },
        { label: "卡金额", codeField: "cardAmount" },
        { label: "折扣金额", codeField: "discountAmount" },
        { label: "折扣原因", codeField: "discountReason" },
        { label: "反结算原因", codeField: "paymentCancelReason" }
      ],
      queryParams: {
        APIUrl: seApis.fiBuGatheringOrderQueryCancelBalanceList.APIUrl,
        InputType: seApis.fiBuGatheringOrderQueryCancelBalanceList.InputType,
        ServiceCode:
          seApis.fiBuGatheringOrderQueryCancelBalanceList.ServiceCode,
        dataInfo: {
          dlrId: "", //经销商id
          cancelBalanceBegDate: "", //反结算开始日期
          cancelBalanceEndDate: "", //反结算结束日期
          acceOrderCode: "", //销售单号
          carLicense: "", //车牌号
          linkManTel: "", //客户电话
          custName: "", //客户名称
          carBrandCode: "", //车辆品牌
          vin: "" //VIN码
        },
        apiQueryRow: [
          "carBrandCn", //车辆品牌
          "carBrandCode", //品牌编码
          "gatheringOrdeCode", //收款单号
          "acceOrderCode", //销售单号
          "cancelBalanceDate", //反结算时间
          "custName", //客户姓名
          "carLicense", //车牌号
          "vin", //VIN码
          "linkManTel", //客户电话
          "payType", //付款方式
          "cancelEmpName", //反结算人
          "gatheringAmount", //应收金额
          "factReceivedAmount", //实收金额
          "pvPoint", //厂家积分
          "dlrPoint", //经销商积分
          "cardAmount", //卡余额
          "discountReason", //折扣原因
          "paymentCancelReason", //反结算原因
          "oemCode", //厂商标识
          "groupCode", //集团标识
          "oemId", //厂商标识ID
          "groupId" //集团标识ID
        ]
      }
    };
  },
  created() {
    var now = new Date();
    let cancelBalanceBegDate = this.$utils.parseTime(now, "{y}-{m}-{d}");
    now.setMonth(now.getMonth() - 1);
    let cancelBalanceEndDate = this.$utils.parseTime(now, "{y}-{m}-{d}");
    this.fjsDate = [];
    this.fjsDate.push(cancelBalanceEndDate);
    this.fjsDate.push(cancelBalanceBegDate);
  },
  methods: {
    //查询
    fetchData() {
      if (this.fjsDate.length == 0) {
        this.queryParams.dataInfo.cancelBalanceBegDate = "";
        this.queryParams.dataInfo.cancelBalanceEndDate = "";
      } else {
        this.queryParams.dataInfo.cancelBalanceBegDate = this.fjsDate[0];
        this.queryParams.dataInfo.cancelBalanceEndDate = this.fjsDate[1];
      }
      this.$refs.tableList.queryList();
    },
    //重置
    reset() {
      this.fjsDate = [];
      this.queryParams.dataInfo.cancelBalanceBegDate = "";
      this.queryParams.dataInfo.cancelBalanceEndDate = "";
      this.queryParams.dataInfo.acceOrderCode = "";
      this.queryParams.dataInfo.carLicense = "";
      this.queryParams.dataInfo.linkManTel = "";
      this.queryParams.dataInfo.custName = "";
      this.queryParams.dataInfo.carBrandCode = "";
    },   
    //查询区获取时间
    getDate(val) {
      this.queryParams.dataInfo.cancelBalanceBegDate = val[0];
      this.queryParams.dataInfo.cancelBalanceEndDate = val[1];
    },
    //获取车辆品牌code
    getCarBrand(val) {
      this.queryParams.dataInfo.carBrandCode = val;
    } 
  }
};
</script>