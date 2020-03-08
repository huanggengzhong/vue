<template>
  <section>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">追踪信息_呼叫中心线索</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- ref用来给DOM元素或子组件注册引用信息，引用信息根据父组件的$refs对象进行注册，将父组件的tabledatas赋给子组件的tabledata-->
    <Table v-bind:tabledatas="tabledata" ref="table"></Table>
  </section>
</template>

<style scoped>
</style>

<script>

import Table from "@/components/crm/table/Table";


export default {
  name: "testTable",
  components: {
    Table,
  },
  mounted: function() {
    this.tabledata.params.code = this.$refs.proStatus.value;
  },
  methods: {
    query: function() {
      this.tabledata.params.code = this.$refs.proStatus.value; //从下拉框组件里取值传进网格组件中
      this.$refs.table.getData();
    }, //查询网格，实际方法在组件里，这里只是调了一下
  },
  data() {
    return {
      tabledata: {
        flag: true,
        colnames: [
          { label: "日期", value: "date" },
          { label: "姓名", value: "name" },
          { label: "地址", value: "address" }
        ],
        params: { code: "1" },
        isoperat: true,
        url:'/table',
        havedistrbute: false,
        haveSelected:false,
        haveEdit: true,
        haveDel: false
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
