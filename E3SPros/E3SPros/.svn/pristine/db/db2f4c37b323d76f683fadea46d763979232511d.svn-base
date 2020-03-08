<!--失控原因编辑 CQ-->
<template>
  <div class="app-container app-container-table">
   
    <div class="filter-container filter-title">查询条件</div>
    <div class="filter-container filter-params query-params">
      <el-form label-position="right">
        <!--第一行-->
        <el-row>
          <el-col :span="12">
             <ReasonType :ReasonType="Type" ref="ReasonType"></ReasonType>
          </el-col>
          <el-col :span="12">
            <Order  :Order="Name" ref="Order"></Order>
          </el-col>
        </el-row>
         <el-row>
            <el-col :span="12">
            <EnableOrDisable :EnableOrDisable="EnableDisable" ref="EnableDisable"></EnableOrDisable>
          </el-col>
            <el-col :span="12">
            <FailureLostControllerReasonName  :FailureLostControllerReasonName="Name" ref="FailureLostControllerReasonName"></FailureLostControllerReasonName>
          </el-col>
         </el-row>
          <el-row>
            <el-col>
            <ReasonDescripts  :ReasonDescripts="Descripts" ref="ReasonDescripts"></ReasonDescripts>
          </el-col>
         </el-row>
      </el-form>
    </div>
     <div class="filter-container filter-button">
      <el-button type="primary" @click="query()">保存</el-button>
      <el-button type="primary" @click="add()">关闭</el-button>
    </div>
  </div>
</template>
<script>
import Table from "@/components/crm/table/Table";
import ReasonDescripts from "@/components/crm/textbox/Public/ReasonDescripts.vue";
import FailureLostControllerReasonName from "@/components/crm/textbox/Complaint/FailureLostControllerReasonName.vue";
import ReasonType from "@/components/crm/Select/Common/ReasonType.vue";
import EnableOrDisable from "@/components/crm/Select/Whether/EnableOrDisable.vue";
import Order from "@/components/crm/Select/Common/Order.vue";
import { crmApis } from "@/api/graphQLApiList/crm";
export default {
  name: "DefeatedLossReasonEdit",
  components: {
        Table,
    ReasonDescripts,
    FailureLostControllerReasonName,
    ReasonType,
    EnableOrDisable,
    Order
  },
  data() {
    return {
      toggleParam: false,
      tabledatas: {
        // 操作列
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.csBuComplaintDelayQueryFindAll,
          apiQueryRow: [
            "FailureLostControllerReasonNumber",
            "FailureLostControllerReasonName",
            "EnableOrDisable",
          ],
          params: {
            FailureLostControllerReasonNumber: "",
            FailureLostControllerReasonName: "",
            EnableOrDisable: "",
          }
        }
      },
      //初始化input
      Number: {
        input: ""
      },
      Name: {
        input: ""
      },
      Descripts:{
        input:""
      },
      //初始化value
      EnableDisable: {
        value: ""
      },
      type: {
        value: ""
      },
     
    };
  },
  methods: {
    query: function() {
      this.queryObj.params.FailureLostControllerReasonNumber = this.$refs.FailureLostControllerReasonNumber.input;
      this.queryObj.params.FailureLostControllerReasonName = this.$refs.FailureLostControllerReasonName.input;
      this.queryObj.params.EnableOrDisable = this.$refs.EnableOrDisable.value;
      this.queryObj.params.sct_ObjectType = this.$refs.sct_ObjectType.value;
      this.$refs.Table.getDatas();
    },
    reset: function() {
      this.$refs.FailureLostControllerReasonNumber.reset();
      this.$refs.FailureLostControllerReasonName.reset();
      this.$refs.EnableOrDisable.reset();
      this.$refs.sct_ObjectType.reset();
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
