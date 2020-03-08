<template>
  <el-form-item label="原因名称">
    <el-input v-model="input" placeholder="请输入内容" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "ReasonName",
  props: {
    ReasonName: {
      input: String
    }
  },
  data() {
    return {
      input: this.ReasonName.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.ReasonName.input;
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
