<template>
  <el-form-item label="网点编码">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "NetworkCode",
  props: {
    NetworkCode: {
      input: String
    }
  },
  data() {
    return {
      input: this.NetworkCode.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.NetworkCode.input;
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

