<template>
  <el-form-item label=" 公司电话">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "CompanyPhone",
  props: {
    CompanyPhone: {
      input: String
    }
  },
  data() {
    return {
      input: this.CompanyPhone.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.CompanyPhone.input;
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
