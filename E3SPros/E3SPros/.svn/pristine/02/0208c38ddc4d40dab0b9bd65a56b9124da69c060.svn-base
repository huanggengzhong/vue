<template>
  <section>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>回访信息</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 调用组件 -->
    <el-form label-position="right" label-width="80px">
      <el-row>
        <el-col :span="6">
          <ReturnVisitTime :ReturnVisitTime="agentData" ref="ReturnVisitTime"></ReturnVisitTime>
        </el-col>
        <el-col :span="6">
          <ContactStatus   ref="ContactStatus"></ContactStatus>
        </el-col>
        <el-col :span="6">
          <RevisitTimes :RevisitTimes="agentData"  ref="RevisitTimes"></RevisitTimes>
        </el-col>
        <el-col :span="6">
          <NextReturnVisitTime :NextReturnVisitTime="agentData" ref="NextReturnVisitTime"></NextReturnVisitTime>
        </el-col>
      </el-row>
         <el-row>
        <el-col :span="12">
          <TxtArea_reVisit :TxtArea_reVisit="agentData" ref="TxtArea_reVisit"></TxtArea_reVisit>
        </el-col>
        <el-col :span="12">
          <TxtArea_CallContent :TxtArea_CallContent="agentData" ref="TxtArea_CallContent"></TxtArea_CallContent>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <TxtArea_OpinionFeedback :TxtArea_OpinionFeedback="agentData" ref="TxtArea_OpinionFeedback"></TxtArea_OpinionFeedback>
        </el-col>
      </el-row>
     
    </el-form>

    <!-- <ReturnVisitTime class="fromunit" ref="ReturnVisitTime"></ReturnVisitTime>
      <NextReturnVisitTime class="fromunit" ref="NextReturnVisitTime"></NextReturnVisitTime>
      <RevisitTimes class="fromunit" ref="RevisitTimes"></RevisitTimes>
      <ContactStatus class="fromunit" ref="ContactStatus"></ContactStatus>
      <TxtArea_reVisit class="fromunit" ref="TxtArea_reVisit"></TxtArea_reVisit>
      <TxtArea_CallContent class="fromunit" ref="TxtArea_CallContent"></TxtArea_CallContent>
      <TxtArea_OpinionFeedback class="fromunit" ref="TxtArea_OpinionFeedback"></TxtArea_OpinionFeedback>
    </el-form>-->
  </section>
</template>

<style scoped>
</style>

<script>
import ReturnVisitTime from "@/components/crm/Time/ReturnVisitTime.vue";
import NextReturnVisitTime from "@/components/crm/Time/NextReturnVisitTime.vue";
import RevisitTimes from "@/components/crm/textbox/Clue/RevisitTimes.vue";
import ContactStatus from "@/components/crm/Select/Clue/ContactStatus.vue";
import TxtArea_reVisit from "@/components/crm/textbox/Clue/Revisit/TxtArea_reVisit.vue";
import TxtArea_CallContent from "@/components/crm/textbox/Clue/Revisit/TxtArea_CallContent.vue";
import TxtArea_OpinionFeedback from "@/components/crm/textbox/Clue/Revisit/TxtArea_OpinionFeedback.vue";

export default {
  name: "tp_ReturnVisit",
  components: {
    ReturnVisitTime,
    NextReturnVisitTime,
    RevisitTimes,
    ContactStatus,
    TxtArea_reVisit,
    TxtArea_CallContent,
    TxtArea_OpinionFeedback
  },
  mounted: function() {
    this.agentData.value = this.$refs.ReturnVisitTime.value;
    console.log(this.agentData.value);
  },
  methods: {
    query: function() {
      // this.tabledata.params.code = this.$refs.proStatus.value; //从下拉框组件里取值传进网格组件中
      this.$refs.table.getData();
    }, //查询网格，实际方法在组件里，这里只是调了一下
    reset: function() {
      this.$refs.proStatus.reset();
    }
  },
  data() {
    return {
      PSdata: {
        value: "",
        readonly: true
      },
      agentData: {
        input: "",
        value:"",
      }
    };
  }
};
</script>
<style scoped>
.button {
  float: right;
}
.fromunit {
  float: left;
}
.el-form-item {
  margin-bottom: 10px;
}
.el-breadcrumb {
  margin-bottom: 10px;
}
</style>
