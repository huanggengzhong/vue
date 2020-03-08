<!--
* 描述: 回访过往记录
* 创建人: zouzx
* 创建时间: 2019-07-23
* 记录：
*  20190723 新建 zouzx
-->
<template>
  <section>
      <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">过往记录</el-breadcrumb-item>
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
  name: "tp_VisitHisinfo",
  components: {
    Table
  },
  mounted: function() {
  },
  methods: {
    query: function() {
      this.$refs.table.getData();
    }, //查询网格，实际方法在组件里，这里只是调了一下
    reset:function(){
    }
  },
  data() {
    return {
      tabledata: {
        flag: true,
        colnames: [
          { label: "回访单号", value: "REVIEW_CODE" },
          { label: "来源单号", value: "SOURCE_CODE" },
          { label: "来源单据类型", value: "BILL_TYPE_NAME" },
          { label: "联系电话", value: "REVIEW_ADDR" },
          { label: "接触状态", value: "TOUCH_STATUS" },
          { label: "回访时间", value: "REVIEW_TIMES" },
          { label: "回访内容", value: "REVIEW_DESC" },
          { label: "计划拜访时间", value: "NEXT_REVIEW_TIME" },
          { label: "备注", value: "" }//备注是从哪里输入的？
        ],
        params: { code: "1" },
        isoperat: false,
        url:'/table',
        havedistrbute: false,
        haveSelected:false,
        haveEdit: false,
        haveDel: false,
      },
      child:{
        input:''
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
