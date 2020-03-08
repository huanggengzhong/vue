<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="sure">确认</el-button>
      <el-button type="primary" @click="averAssign">平均分配</el-button>
    </div>

    <div class="filter-container filter-title-crm">共选择多少条数据</div>
    <div class="filter-container filter-params-crm query-params">
     
    </div>
    <br />
    <br />
    <div class="filter-container filter-title-crm">查询结果</div>
    <Table :tabledatas="tabledatas" ref="table"></Table>
  </div>
</template>
<script>
import UpLoad from "@/components/crm/EjectWindows/UpLoad";
import Table from "@/components/crm/table/Table";

import { crmApis } from "@/api/graphQLApiList/crm";

export default {
  name: "testPage",
  components: {
    UpLoad,
    Table
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
          { label: "人员", value: "date" },
          { label: "数量", value: "name" }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.csBuComplaintDelayQueryFindAll,
          apiQueryRow: ["serverOrder", "createdDate"],
          params: {
            delayId: "",
            createdDateStart: "",
            createdDateEnd: "",
            serverOrder: "",
            delayStatus: ""
          }
        }
      },
      applyEx: {
        value: ""
      },
      serviceMenu: {
        input: ""
      }
    };
  },
  methods: {
    query: function() {
      //this.queryObj.params=this.$refs.applytime.value;
      this.$refs.table.getData();
      this.queryObj.params.serverOrder = this.$refs.sermenu.input;
      this.queryObj.params.delayStatus = this.delayreason;
    },
    reset: function() {
      this.$refs.applytime.reset();
      this.$refs.sermenu.reset();
      this.delayreason = "";
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    sure() {
      console.log("wo点了确认建");
    },
    averAssign() {
      console.log("averAssign");
    }
  }
};
</script>
<style>
.filter-params-crm .el-form-item__label {
  margin-right: 0px;
}
.query-params .el-col {
  margin-bottom: 0px;
}
</style>

