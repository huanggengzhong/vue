<!--驳回节点配置_修改和新增 CQ-->
<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="save()">保存</el-button>
    </div>

    <div class="filter-container filter-params query-params">
      <el-form label-position="right">
        <!--第一行-->
        <el-row>
          <el-col :span="8">
            <!--业务流程-->
            <BusinessProcess :BusinessProcess="BProcess" ref="BusinessProcess"></BusinessProcess>
          </el-col>
          <el-col :span="8">
            <!--服务类别-->
            <ServiceType :ServiceType="SType" ref="ServiceType"></ServiceType>
          </el-col>
          <el-col :span="8">
            <!--流程节点-->
            <ProcessNode :ProcessNode="PNode" ref="ProcessNode"></ProcessNode>
          </el-col>
        </el-row>
        <!--第二行-->
        <el-row>
          <el-col :span="8">
            <!--是否审核-->
            <WhetherCheck :WhetherCheck="WhCheck" ref="WhetherCheck"></WhetherCheck>
          </el-col>
          <el-col :span="8">
            <!--是否驳回-->
            <WhetherReject :WhetherReject="WhReject" ref="WhetherReject"></WhetherReject>
          </el-col>
          <el-col :span="8">
            <!--是否启用-->
            <EnableOrDisable :EnableOrDisable="EnableDisable" ref="EnableOrDisable"></EnableOrDisable>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <!--责任人-->
            <DutyPeople :DutyPeople="DPeople" ref="DutyPeople"></DutyPeople>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>
<script>
import ServiceType from "@/components/crm/Select/Complaint/ServiceType.vue";
import BusinessProcess from "@/components/crm/Select/Common/BusinessProcess.vue";
import ProcessNode from "@/components/crm/Select/Common/ProcessNode.vue";
import DutyPeople from "@/components/crm/textbox/Complaint/DutyPeople.vue";
import EnableOrDisable from "@/components/crm/Select/Whether/EnableOrDisable.vue";
import WhetherCheck from "@/components/crm/Select/Whether/WhetherCheck.vue";
import WhetherReject from "@/components/crm/Select/Whether/WhetherReject.vue";
import { crmApis } from "@/api/graphQLApiList/crm";
export default {
  name: "ReviewNodeConfig",
  components: {
    BusinessProcess,
    ServiceType,
    ProcessNode,
    DutyPeople,
    EnableOrDisable,
    WhetherCheck,
    WhetherReject
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
        colnames: [],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.csBuComplaintDelayQueryFindAll,
          apiQueryRow: [
            "BusinessProcess",
            "ServiceType",
            "ProcessNode",
            "DutyPeople",
            "EnableOrDisable",
            "WhetherCheck",
            "WhetherReject"
          ],
          params: {
            BusinessProcess: "",
            ServiceType: "",
            ProcessNode: "",
            DutyPeople: "",
            EnableOrDisable: "",
            WhetherCheck: "",
            WhetherReject: ""
          }
        }
      },
        //初始化value
      BProcess: {
        value: ""
      },
      SType: {
        value: ""
      },
      PNode: {
        value: ""
      },
      WhCheck: {
        value: ""
      },
      WhReject: {
        value: ""
      },
      EnableDisable: {
        value: ""
      },
      DPeople: {
        value: ""
      }
    };
  },
  methods: {
    query: function() {
      this.queryObj.params.BusinessProcess = this.$refs.BusinessProcess.input;
      this.queryObj.params.ServiceType = this.$refs.ServiceType.input;
      this.queryObj.params.ProcessNode = this.$refs.ProcessNode.value;
      this.queryObj.params.DutyPeople = this.$refs.DutyPeople.value;
      this.queryObj.params.EnableOrDisable = this.$refs.EnableOrDisable.value;
      this.queryObj.params.WhetherCheck = this.$refs.WhetherCheck.value;
      this.queryObj.params.WhetherReject = this.$refs.WhetherReject.value;
      this.$refs.Table.getDatas();
    },
    reset: function() {
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
