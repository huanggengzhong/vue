<template>
  <el-form-item label="公司简称">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "CompanyShortName",
  props: {
    CompanyShortName: {
      input: String
    }
  },
  data() {
    return {
      input: this.CompanyShortName.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.CompanyShortName.input;
    },
    reset: function() {
      let that = this;
      that.input = "";
    }
  }
};
</script>

<style scoped>
</style>
