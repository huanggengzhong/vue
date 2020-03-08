<template>
  <el-form-item label="开户银行">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "OpenAccountBank",
  props: {
    OpenAccountBank: {
      input: String
    }
  },
  data() {
    return {
      input: this.OpenAccountBank.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.OpenAccountBank.input;
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
