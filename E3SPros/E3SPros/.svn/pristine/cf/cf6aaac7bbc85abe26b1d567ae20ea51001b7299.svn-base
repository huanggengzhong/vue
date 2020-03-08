<template>
  <el-form-item label="执行周期">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "ExecuteCycle",
  props: {
    ExecuteCycle: {
      input: String
    }
  },
  data() {
    return {
      input: this.ExecuteCycle.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.ExecuteCycle.input;
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