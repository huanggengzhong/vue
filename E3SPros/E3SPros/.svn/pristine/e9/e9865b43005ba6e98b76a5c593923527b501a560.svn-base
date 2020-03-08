<template>
  <el-form-item label="最近活动进程">
    <el-input v-model="input" placeholder="请输入内容" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "LatestPlayProcess",
  props: {
    LatestPlayProcess: {
      input: String
    }
  },
  data() {
    return {
      input: this.LatestPlayProcess.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.LatestPlayProcess.input;
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
