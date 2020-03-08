<template>
  <el-form-item label="导出人姓名">
    <el-input v-model="input" placeholder="请输入内容" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "ExportName",
  props: {
    ExportName: {
      input: String
    }
  },
  data() {
    return {
      input: this.ExportName.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.ExportName.input;
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
