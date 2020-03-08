<template>
  <el-form-item label="银行卡号">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "BankCardNo",
  props: {
    BankCardNo: {
      input: String
    }
  },
  data() {
    return {
      input: this.BankCardNo.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.BankCardNo.input;
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
