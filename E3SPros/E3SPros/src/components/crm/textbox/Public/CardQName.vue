<template>
  <el-form-item label="卡券名称">
    <el-input v-model="input" placeholder="请输入内容" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "CardQName",
  props: {
    CardQName: {
      input: String
    }
  },
  data() {
    return {
      input: this.CardQName.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.CardQName.input;
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
