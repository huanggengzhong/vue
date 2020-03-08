<template>
  <el-form-item label="组织名称">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "OrganizationName",
  props: {
    OrganizationName: {
      input: String
    }
  },
  data() {
    return {
      input: this.OrganizationName.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.OrganizationName.input;
    },
    reset: function() {
      let that = this;
      that.input = "";
    }
  }
};
</script>

<style scoped>
.filter-params .el-form-item__label {
  margin-right: 0px;
}
.query-params .el-col {
  margin-bottom: 0px;
}
</style>
