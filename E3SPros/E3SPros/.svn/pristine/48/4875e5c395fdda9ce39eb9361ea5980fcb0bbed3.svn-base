<template>
  <el-form-item label="指标名称">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "TargetName",
  props: {
    TargetName: {
      input: String
    }
  },
  data() {
    return {
      input: this.TargetName.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.TargetName.input;
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
