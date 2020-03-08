<template>
  <el-form-item label="传真号码">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "FaxNumber",
  props: {
    FaxNumber: {
      input: String
    }
  },
  data() {
    return {
      input: this.FaxNumber.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.FaxNumber.input;
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
