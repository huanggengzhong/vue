<template>
  <el-form-item label="车型配置">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" :disabled="isdisabled" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "CarModConf",
  props: {
    CarModConf: {
      input: String,
      isdisabled: Boolean
    }
  },
  data() {
    return {
      input: this.CarModConf.input,
      isdisabled: this.CarModConf.isdisabled
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.CarModConf.input;
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