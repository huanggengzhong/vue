<!--投诉信息模板  CQ-->
<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-params">
      <el-form label-position="right">
        <!--第一行-->
        <el-row>
          <el-col :span="6">
            <ServiceMenuNumber :ServiceMenuNumber="SMenuNumber" ref="ServiceMenuNumber"></ServiceMenuNumber>
          </el-col>
          <el-col :span="6">
            <ComplaintDate :ComplaintDate="CDate" ref="ComplaintDate"></ComplaintDate>
          </el-col>
          <el-col :span="6">
            <sct_ComplaintRoute :sct_ComplaintRoute="ComplaintRoute" ref="sct_ComplaintRoute"></sct_ComplaintRoute>
          </el-col>
          <el-col :span="6">
            <ComplaintTimes :ComplaintTimes="CTimes" ref="ComplaintTimes"></ComplaintTimes>
          </el-col>
        </el-row>

        <!--第二行-->
        <el-row>
          <el-col :span="6">
            <SourceNumber :SourceNumber="SNumber" ref="SourceNumber"></SourceNumber>
          </el-col>
          <el-col :span="6">
            <ErrorDate :ErrorDate="EDate" ref="ErrorDate"></ErrorDate>
          </el-col>
          <el-col :span="6">
            <ErrorDistance :ErrorDistance="EDistance" ref="ErrorDistance"></ErrorDistance>
          </el-col>
          <el-col :span="6">
            <RunDistance :RunDistance="RDistance" ref="RunDistance"></RunDistance>
          </el-col>
        </el-row>

        <!--第三行-->
        <el-row>
          <el-col :span="6">
            <swd_Responsible :swd_Responsible="Responsible" ref="swd_Responsible"></swd_Responsible>
          </el-col>
          <el-col :span="6">
            <DutyPeoplePhone :DutyPeoplePhone="DPeoplePhone" ref="DutyPeoplePhone"></DutyPeoplePhone>
          </el-col>
          <el-col :span="6">
            <ComplaintLevel :ComplaintLevel="CLevel" ref="ComplaintLevel"></ComplaintLevel>
          </el-col>
          <el-col :span="6">
            <WhetherUrgent :WhetherUrgent="WUrgent" ref="WhetherUrgent"></WhetherUrgent>
          </el-col>
        </el-row>

        <!--第四行-->
        <el-row>
          <el-col :span="12">
            <swd_complaintCategory
              :swd_complaintCategory="complaintCategory"
              ref="swd_complaintCategory"
            ></swd_complaintCategory>
          </el-col>
          <el-col :span="12">
            <RelatedBenchmarkCar :RelatedBenchmarkCar="RBenchmarkCar" ref="RelatedBenchmarkCar"></RelatedBenchmarkCar>
          </el-col>
        </el-row>
        <!--第五行-->
        <el-row>
          <el-col :span="12">
            <ResponsibleAgent :ResponsibleAgent="RAgent" ref="ResponsibleAgent"></ResponsibleAgent>
          </el-col>
          <el-col :span="12">
            <ResponsibleDepartment :ResponsibleDepartment="RDepartment" ref="ResponsibleDepartment"></ResponsibleDepartment>
          </el-col>
        </el-row>
        <!--第六行-->
        <el-row>
          <el-col :span="12">
            <JobDescription :JobDescription="JobDes" ref="JobDescription"></JobDescription>
          </el-col>
          <el-col :span="12">
            <Remarks :Remarks="Remark" ref="Remarks"></Remarks>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <Table :tabledatas="tabledatas"></Table>
  </div>
</template>
<script>
import Table from "@/components/crm/table/Table";
import ServiceMenuNumber from "@/components/crm/textbox/Public/ServiceMenuNumber.vue";
import ComplaintDate from "@/components/crm/Time/ComplaintDate";
import sct_ComplaintRoute from "@/components/crm/Select/Complaint/sct_ComplaintRoute.vue";
import ComplaintTimes from "@/components/crm/textbox/Complaint/ComplaintTimes.vue";
import SourceNumber from "@/components/crm/EjectWindows/SourceNumber.vue";
import ErrorDate from "@/components/crm/Time/ErrorDate.vue";
import ErrorDistance from "@/components/crm/textbox/Complaint/ErrorDistance.vue";
import RunDistance from "@/components/crm/textbox/Complaint/RunDistance.vue";
import RelatedBenchmarkCar from "@/components/crm/EjectWindows/RelatedBenchmarkCar.vue";
import OffsiteNetwork_pop from "@/components/crm/EjectWindows/OffsiteNetwork_pop.vue";
import ResponsibleDepartment from "@/components/crm/EjectWindows/ResponsibleDepartment.vue";
import DutyPeoplePhone from "@/components/crm/textbox/Complaint/DutyPeoplePhone.vue";
import ComplaintLevel from "@/components/crm/Select/Complaint/ComplaintLevel.vue";
import WhetherUrgent from "@/components/crm/Select/Whether/WhetherUrgent.vue";
import JobDescription from "@/components/crm/textbox/Complaint/JobDescription.vue";
import Remarks from "@/components/crm/textbox/Complaint/Remarks.vue";
import swd_complaintCategory from "@/components/crm/EjectWindows/swd_complaintCategory.vue";
import ResponsibleAgent from "@/components/crm/EjectWindows/ResponsibleAgent.vue";
import swd_Responsible from "@/components/crm/EjectWindows/swd_Responsible.vue";

export default {
  name: "tp_ComplaintInfo",
  components: {
    Table,
    ServiceMenuNumber,
    ComplaintDate,
    sct_ComplaintRoute,
    ComplaintTimes,
    SourceNumber,
    ErrorDate,
    ErrorDistance,
    RunDistance,
    RelatedBenchmarkCar,
    OffsiteNetwork_pop,
    ResponsibleDepartment,
    DutyPeoplePhone,
    ComplaintLevel,
    WhetherUrgent,
    JobDescription,
    swd_complaintCategory,
    ResponsibleAgent,
    Remarks,
    swd_Responsible
  },
  data() {
    return {
      delayreason: "",
      tabledatas: {
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [
          { label: "日期", value: "custName" },
          { label: "摘要", value: "contactTel" },
          { label: "客户要求", value: "intentLevelCode" },
          { label: "投诉内容", value: "" },
          { label: "坐席反馈", value: "inteSeriesName" },
          { label: "附件", value: "" }
        ],
        params: {},
        queryObj: {
          apiConfig: {},
          apiQueryRow: []
        }
      },
      agentData: {
        input: ""
      },
      SMenuNumber: {
        input: ""
      },
      CTimes: {
        input: ""
      },
      SNumber: {
        input: ""
      },
      EDistance: {
        input: ""
      },
      RDistance: {
        input: ""
      },
      Responsible: {
        input: ""
      },
      DPeoplePhone: {
        input: ""
      },
      JobDes: {
        input: ""
      },
      Remark: {
        input: ""
      },
      CDate: {
        value: ""
      },
      ComplaintRoute: {
        value: ""
      },
      EDate: {
        value: ""
      },
      CLevel: {
        value: ""
      },
      WUrgent: {
        value: ""
      },
      complaintCategory: {
        value: ""
      },
      RBenchmarkCar: {
        value: ""
      },
      RAgent: {
        value: ""
      },
      RDepartment: {
        value: ""
      }
    };
  },
  methods: {
    query: function() {},
    reset: function() {}
  }
};
</script>
<style scoped>
.filter-params .el-form-item__label {
  margin-right: 0px;
}
</style>
