<template>
  <el-form-item label="服务IP">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "ServiceIP",
  props: {
    ServiceIP: {
      input: String
    }
  },
  data() {
    return {
      input: this.ServiceIP.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.ServiceIP.input;
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
