<template>
  <el-form-item label="厂家线索回收时间设置" prop="fcts.input">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
    <span>(小时)</span>
  </el-form-item>
</template>

<script>
export default {
  name: "FactoryClueRecycleTimeSetting",
  props: {
    FactoryClueRecycleTimeSetting: {
      input: String
    }
  },
  data() {
    return {
      input: this.FactoryClueRecycleTimeSetting.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.FactoryClueRecycleTimeSetting.input;
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

