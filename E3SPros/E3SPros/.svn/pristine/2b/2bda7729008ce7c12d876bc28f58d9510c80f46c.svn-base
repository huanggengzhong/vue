<template>
  <el-form-item label="发起模板">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "LaunchModel",
  props: {
    LaunchModel: {
      input: String
    }
  },
  data() {
    return {
      input: this.LaunchModel.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.LaunchModel.input;
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
