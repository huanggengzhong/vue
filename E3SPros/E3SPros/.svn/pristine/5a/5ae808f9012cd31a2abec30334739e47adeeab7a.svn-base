<template>
  <el-form-item label="银行账号">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "BankAccount",
  props: {
    BankAccount: {
      input: String
    }
  },
  data() {
    return {
      input: this.BankAccount.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.BankAccount.input;
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
