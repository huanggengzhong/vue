<!--暂时不做:客户查询 CQ-->
<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="query()">查询</el-button>
      <el-button @click="reset()">重置</el-button>
    </div>

    <div class="filter-container filter-title">查询条件</div>
    <div class="filter-container filter-params query-params">
      <el-form label-position="right">
        <!--第一行-->
        <el-row>
          <el-col :span="6">
            <txt_CustomerName class="fromunit" ref="txt_CustomerName"></txt_CustomerName>
          </el-col>
          <el-col :span="6">
            <PhoneNumber class="fromunit" ref="PhoneNumber"></PhoneNumber>
          </el-col>
          <el-col :span="6">
            <CarBrandNumber class="fromunit" ref="CarBrandNumber"></CarBrandNumber>
          </el-col>
          <el-col :span="6">
            <EngineNumber class="fromunit" ref="EngineNumber"></EngineNumber>
          </el-col>
        </el-row>

        <!--第二行-->
        <el-row>
          <el-col :span="6">
            <VINCode class="fromunit" ref="VINCode"></VINCode>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <div class="filter-container filter-title">查询结果</div>
    <Table :tabledatas="tabledatas"></Table>
  </div>
</template>
<script>
import Table from "@/components/crm/table/Table";

import txt_CustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName.vue";
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber.vue";
import CarBrandNumber from "@/components/crm/textbox/Public/carInfo/CarBrandNumber.vue";
import EngineNumber from "@/components/crm/textbox/Public/customerInfos/EngineNumber.vue";
import VINCode from "@/components/crm/textbox/Public/carInfo/VINCode.vue";
import { crmApis } from "@/api/graphQLApiList/crm";
export default {
  name: "CustQuery",
  components: {
     Table,
    txt_CustomerName,
    PhoneNumber,
    CarBrandNumber,
    EngineNumber,
    VINCode
  },
  data() {
    return {
      toggleParam: false,
      delayreason: "",
      tabledatas: {
        // 操作列
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [
        { label: "客户名称", value: "" },
          { label: "电话", value: "" },
          { label: "备用电话", value: "" },
          { label: "性别", value: "" },
          { label: "是否车主", value: "" },
          { label: "车辆品牌", value: "" },
          { label: "车系", value: "" },
          { label: "车型名称", value: "" },
          { label: "车牌号", value: "" },
          { label: "VIN码", value: "" },
          { label: "发动机号", value: "" },
          { label: "省份", value: "" },  
          { label: "城市", value: "" },
          { label: "区县", value: "" }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.csBuComplaintDelayQueryFindAll,
          apiQueryRow: [
           
          ],
          params: {
          
          }
        }
      },
      //初始化input
      SMenuNumber: {
        input: ""
      },
      CustName: {
        input: ""
      },
      PNumber: {
        input: ""
      },
      ChSmalTypeName: {
        input: ""
      },
      SMenuNumber: {
        input: ""
      },
      CustName: {
        input: ""
      },
      CBNumber: {
        input: ""
      },
      VIN: {
        input: ""
      },
      BLPeople: {
        input: ""
      },
      //初始化value
      BMenuDate: {
        value: ""
      },
      CloseDate: {
        value: ""
      },
      RStatus: {
        value: ""
      },
      ChBigClass: {
        value: ""
      },
      RAgent: {
        value: ""
      },
      CarName: {
        value: ""
      },
      ValidInvalid: {
        value: ""
      },
      CLevel: {
        value: ""
      },
      Urg: {
        value: ""
      }
    };
  },
  methods: {
    query: function() {
      this.queryObj.params.dt_BuildMenuDates = this.$refs.dt_BuildMenuDates.value;
      this.queryObj.params.CloseCaseDate = this.$refs.CloseCaseDate.value;
      this.queryObj.params.ReceiptStatus = this.$refs.ReceiptStatus.value;
      this.queryObj.params.ChannelBigClass = this.$refs.ChannelBigClass.value;
      this.queryObj.params.ChannelSmalTypeName = this.$refs.ChannelSmalTypeName.input;
      this.queryObj.params.ServiceMenuNumber = this.$refs.ServiceMenuNumber.input;
      this.queryObj.params.ResponsibleAgent = this.$refs.ResponsibleAgent.value;
      this.queryObj.params.CarName = this.$refs.CarName.value;
      this.queryObj.params.txt_CustomerName = this.$refs.txt_CustomerName.input;
      this.queryObj.params.PhoneNumber = this.$refs.PhoneNumber.input;
      this.queryObj.params.CarBrandNumber = this.$refs.CarBrandNumber.input;
      this.queryObj.params.VINCode = this.$refs.VINCode.input;
      this.queryObj.params.ValidOrInvalid = this.$refs.ValidOrInvalid.value;
      this.queryObj.params.ComplaintLevel = this.$refs.ComplaintLevel.value;
      this.queryObj.params.Urgency = this.$refs.Urgency.value;
      this.queryObj.params.BuildListPeople = this.$refs.BuildListPeople.input;
      this.$refs.Table.getDatas();
    },
    reset: function() {
      this.$refs.dt_BuildMenuDates.reset();
      this.$refs.CloseCaseDate.reset();
      this.$refs.ReceiptStatus.reset();
      this.$refs.ChannelBigClass.reset();
      this.$refs.ChannelSmalTypeName.reset();
      this.$refs.ServiceMenuNumber.reset();
      this.$refs.ResponsibleAgent.reset();
      this.$refs.CarName.reset();
      this.$refs.txt_CustomerName.reset();
      this.$refs.PhoneNumber.reset();
      this.$refs.CarBrandNumber.reset();
      this.$refs.VINCode.reset();
      this.$refs.ValidOrInvalid.reset();
      this.$refs.ComplaintLevel.reset();
      this.$refs.Urgency.reset();
      this.$refs.BuildListPeople.reset();
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    }
  }
};
</script>
<style>
.filter-params .el-form-item__label {
  margin-right: 0px;
}
.query-params .el-col {
  margin-bottom: 0px;
}
</style>
