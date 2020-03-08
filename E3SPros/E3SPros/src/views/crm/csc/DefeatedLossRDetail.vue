<template>
  <section>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>失控原因明细维护</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form :inline="true" class="demo-form-inline">
      <!-- 调用组件 -->
   <FailureLostControllerReasonNumber class="fromunit" ref="FailureLostControllerReasonNumber"></FailureLostControllerReasonNumber>
<FailureLostControllerReasonName class="fromunit" ref="FailureLostControllerReasonName"></FailureLostControllerReasonName>
<Descripts class="fromunit" ref="Descripts"></Descripts>

      <el-form-item class="button">
        <el-button type="primary" @click="query">查询</el-button>
         <el-button type="primary" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>

    <!-- ref用来给DOM元素或子组件注册引用信息，引用信息根据父组件的$refs对象进行注册，将父组件的tabledatas赋给子组件的tabledata-->
    <Table v-bind:tabledatas="tabledata" ref="table"></Table>
  </section>
</template>

<style>
</style>

<script>
import Table from "@/components/crm/table/Table";
import FailureLostControllerReasonNumber from "@/components/crm/textbox/Complaint/FailureLostControllerReasonNumber.vue";
import FailureLostControllerReasonName from "@/components/crm/textbox/Complaint/FailureLostControllerReasonName.vue";
import Descripts from "@/components/crm/textbox/Public/Descripts.vue";

export default {
  name: "MaintenanceLossReasonDetail",
  components: {
    Table,
    FailureLostControllerReasonNumber,
    FailureLostControllerReasonName,
    EnableOrDisable,
    Types
  },
  mounted: function() {
    this.tabledata.params.code=this.$refs.BuildMenuDate.value;
  },
  methods: {
    query: function() {
      this.tabledata.params.code = this.$refs.BuildMenuDate.value; //从下拉框组件里取值传进网格组件中
      this.$refs.table.getData();
    }, //查询网格，实际方法在组件里，这里只是调了一下
  },
  data() {
    return {
      tabledata: {
        flag: true,
        colnames: [
          { label: "战败失控原因明细编号", value: "" },
          { label: "战败失控原因明细名称", value: "" },
          { label: "战败失控原因描述", value: "" },
          { label: "排序", value: "" },
          { label: "状态", value: "" }
        ],
        params: { code: "1" },
        isoperat: true,
        url:'/table',
        havedistrbute: false,
        haveSelected:false,
        haveEdit: true,
        haveDel: true,
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
