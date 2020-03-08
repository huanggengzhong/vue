<!--
* 描述: 当日预约到店线索-审核页面（这是弹窗）
* 创建人: chq2
* 创建时间: 2019-07-26
* 记录：
*  2019-08-06 新建 chq2
-->

<template>
  <section>
    <!-- 调用组件 -->
    <el-form label-position="right" label-width="80px" :model="ruleForm" :rules="rules" ref="ruleForm">
      <el-row>
        <el-col>
          <ClueNumber :ClueNumber="CNumber" ref="ClueNumber"></ClueNumber>
        </el-col>
      </el-row>

      <el-row>
        <el-col>
          <CheckResult :CheckResult="CResult" ref="CheckResult"></CheckResult>
        </el-col>
      </el-row>

      <el-row>
        <el-col>
          <CheckThought :CheckThought="Checkt" ref="CheckThought"></CheckThought>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-button type="primasry" @click="Review" style="float: right">审核</el-button>
        </el-col>
      </el-row>
    </el-form>
  </section>
</template>

<script>
import ClueNumber from "@/components/crm/textbox/Clue/ClueNumber.vue";
import CheckResult from "@/components/crm/option/CheckResult.vue";
import CheckThought from "@/components/crm/textbox/Complaint/CheckThought.vue";
export default {
  name: "AppointmentReview",
  components: {
    ClueNumber,
    CheckResult,
    CheckThought
      },
  mounted: function() {},
  methods: {
    query: function() {
      this.$refs.table.getData();
    } //查询网格，实际方法在组件里，这里只是调了一下
  },
  data() {
    return {
      tabledata: {
        flag: true,
        colnames: [],
        params: { code: "1" },
        isoperat: true,
        url: "/table",
        havedistrbute: false,
        haveSelected: false,
        haveEdit: true,
        haveDel: true
      },
      CNumber: {
        input: ""
      },
       CResult: {
        value: ""
      },
       Checkt: {
        input: ""
      },
    };
  }
};
</script>

