<!--维护升级设置子规则 CQ-->
<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-params query-params">
      <el-form label-position="right">
        <!------------第一行------------>
        <el-row>
          <el-col :span="8">
            <!--升级阶段-->
            <UpgradePhase :UpgradePhase="UPhase" ref="UpgradePhase"></UpgradePhase>
          </el-col>
          <el-col :span="8">
            <!--对象类型-->
            <sct_ObjectType :sct_ObjectType="sctType" ref="sct_ObjectType"></sct_ObjectType>
          </el-col>
          <el-col :span="8">
            <!--提醒方式-->
            <RemindWay :RemindWay="RWay" ref="RemindWay"></RemindWay>
          </el-col>
        </el-row>

        <!------------第二行------------>
        <el-row>
          <el-col :span="8">
            <!--执行次数-->
            <ExecuteTimes :ExecuteTimes="ETimes" ref="ExecuteTimes"></ExecuteTimes>
          </el-col>
          <el-col :span="8">
            <!--执行模式-->
            <sct_ExecutionMode :sct_ExecutionMode="sctMode" ref="sct_ExecutionMode"></sct_ExecutionMode>
          </el-col>
          <el-col :span="8">
            <!--执行周期-->
            <ExecuteCycle :ExecuteCycle="ECycle" ref="ExecuteCycle"></ExecuteCycle>
          </el-col>
        </el-row>

        <!------------第三行------------>
        <el-row>
          <el-col :span="8">
            <!--升级开始时段-->
            <UpgradeStartTime :UpgradeStartTime="UStartTime" ref="UpgradeStartTime"></UpgradeStartTime>
          </el-col>
          <el-col :span="8">
            <!--升级结束时段-->
            <UpgradeStopTime :UpgradeStopTime="UStopTime" ref="UpgradeStopTime"></UpgradeStopTime>
          </el-col>
          <el-col :span="8">
            <!--短信模板-->
            <MessageModel :MessageModel="MModel" ref="MessageModel"></MessageModel>
          </el-col>
        </el-row>

        <!------------第四行------------>
        <el-row>
          <el-col :span="8">
            <!--对象形式-->
            <sct_ObjectForm :sct_ObjectForm="sctForm" ref="sct_ObjectForm"></sct_ObjectForm>
          </el-col>
        </el-row>

        <!------------第五行------------>
        <el-row>
          <el-col>
            <!--工作日-->
            <WorkDay :WorkDay="WDay" ref="WorkDay"></WorkDay>
          </el-col>
        </el-row>
      </el-form>
        <div class="filter-container filter-button">
      <el-button type="primary" @click="save()">保存</el-button>
    </div>
    </div>
  </div>
</template>
<script>
import UpgradePhase from "@/components/crm/Select/RemindUpgradeSet/UpgradePhase.vue";
import sct_ObjectType from "@/components/crm/Select/RemindUpgradeSet/sct_ObjectType.vue";
import RemindWay from "@/components/crm/Select/Common/RemindWay.vue";
import sct_ObjectForm from "@/components/crm/Select/Common/sct_ObjectForm.vue";
import sct_ExecutionMode from "@/components/crm/Select/Common/sct_ExecutionMode.vue";
import ExecuteCycle from "@/components/crm/textbox/ExecuteCycle.vue";
import UpgradeStartTime from "@/components/crm/Time/UpgradeStartTime.vue";
import UpgradeStopTime from "@/components/crm/Time/UpgradeStopTime.vue";
import WorkDay from "@/components/crm/option/WorkDay.vue";
import ExecuteTimes from "@/components/crm/Select/Common/ExecuteTimes.vue";
import MessageModel from "@/components/crm/EjectWindows/MessageModel.vue";

import { crmApis } from "@/api/graphQLApiList/crm";
export default {
  name: "UpdateChildSet",
  components: {
    UpgradePhase,
    sct_ObjectType,
    RemindWay,
    sct_ObjectForm,
    sct_ExecutionMode,
    ExecuteCycle,
    UpgradeStartTime,
    UpgradeStopTime,
    WorkDay,
    ExecuteTimes,
    MessageModel
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
          { label: "升级阶段", value: "" },
          { label: "对象类型", value: "" },
          { label: "提醒方式", value: "" },
          { label: "对象形式", value: "" },
          { label: "信息模板", value: "" },
          { label: "执行次数", value: "" },
          { label: "执行模式", value: "" },
          { label: "周期", value: "" }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.csBuComplaintDelayQueryFindAll,
          apiQueryRow: [
            "UpgradePhase",
            "sct_ObjectType",
            "RemindWay",
            "sct_ObjectForm",
            "sct_ExecutionMode",
            "ExecuteCycle",
            "UpgradeStartTime",
            "UpgradeStopTime",
            "WorkDay",
            "ExecuteTimes",
            "MessageModel"
          ],
          params: {
            UpgradePhase: "",
            sct_ObjectType: "",
            RemindWay: "",
            sct_ObjectForm: "",
            sct_ExecutionMode: "",
            ExecuteCycle: "",
            UpgradeStartTime: "",
            UpgradeStopTime: "",
            WorkDay: "",
            ExecuteTimes: "",
            MessageModel: ""
          }
        }
      },
      //初始化input
      ECycle: {
        input: ""
      },
      //初始化value
      UPhase: {
        value: ""
      },
      sctType: {
        value: ""
      },
      RWay: {
        value: ""
      },
      ETimes: {
        value: ""
      },
      sctMode: {
        value: ""
      },
      UStartTime: {
        value: ""
      },
      UStopTime: {
        value: ""
      },
      MModel: {
        value: ""
      },
      sctForm: {
        value: ""
      },
      WDay: {
        value: ""
      }
    };
  },
  methods: {
    query: function() {
      this.queryObj.params.UpgradePhase = this.$refs.UpgradePhase.value;
      this.queryObj.params.sct_ObjectType = this.$refs.sct_ObjectType.value;
      this.queryObj.params.RemindWay = this.$refs.RemindWay.value;
      this.queryObj.params.sct_ObjectForm = this.$refs.sct_ObjectForm.value;
      this.queryObj.params.sct_ExecutionMode = this.$refs.sct_ExecutionMode.value;
      this.queryObj.params.ExecuteCycle = this.$refs.ExecuteCycle.value;
      this.queryObj.params.UpgradeStartTime = this.$refs.UpgradeStartTime.value;
      this.queryObj.params.UpgradeStopTime = this.$refs.UpgradeStopTime.value;
      this.queryObj.params.WorkDay = this.$refs.WorkDay.value;
      this.queryObj.params.ExecuteTimes = this.$refs.ExecuteTimes.value;
      this.queryObj.params.MessageModel = this.$refs.MessageModel.value;
      this.$refs.Table.getDatas();
    },
    reset: function() {},
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
