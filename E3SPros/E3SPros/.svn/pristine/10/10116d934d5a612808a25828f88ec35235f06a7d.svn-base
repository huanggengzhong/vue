<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="averdistr()">平均分配</el-button>
      <el-button @click="sure()">确定</el-button>
    </div>

    <div class="filter-container filter-title-crm">查询条件</div>
    <div class="filter-container filter-params-crm">
      <br />
      <br />
    </div>

    <div class="filter-container filter-title-crm">人员列表</div>
    <Table :tabledatas="tabledatas"></Table>
  </div>
</template>
<script>
import Table from "@/components/crm/table/Table";
import { ascApis } from "@/api/graphQLApiList/crm";
export default {
  name: "testPage",
  components: {
    Table
    //ContactWay
  },
  data() {
    return {
      delayreason: "",
      tabledatas: {
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [{ label: "人员", value: "" }, { label: "数量", value: "" }],
        params: {},
        queryObj: {
          apiConfig: {},
          apiQueryRow: []
        }
      }
    };
  },
  methods: {
    averdistr: function() {},
    sure: function() {}
  }
};
</script>
<style>
.filter-params-crm .el-form-item__label {
  margin-right: 0px;
}
</style>
