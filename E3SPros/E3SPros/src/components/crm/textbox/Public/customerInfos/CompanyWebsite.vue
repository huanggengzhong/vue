<template>
  <el-form-item label="公司网站">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "CompanyWebsite",
  props: {
    CompanyWebsite: {
      input: String
    }
  },
  data() {
    return {
      input: this.CompanyWebsite.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.CompanyWebsite.input;
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
