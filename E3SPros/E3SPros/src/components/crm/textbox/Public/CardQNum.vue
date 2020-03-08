<template>
  <el-form-item label="卡券编号">
    <el-input v-model="input" placeholder="请输入内容" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "CardQNum",
  props: {
    CardQNum: {
      input: String
    }
  },
  data() {
    return {
      input: this.CardQNum.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.CardQNum.input;
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
