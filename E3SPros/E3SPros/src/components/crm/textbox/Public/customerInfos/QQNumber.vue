<template>
  <el-form-item label="QQ号">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "QQNumber",
  props: {
    QQNumber: {
      input: String
    }
  },
  data() {
    return {
      input: this.QQNumber.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.QQNumber.input;
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