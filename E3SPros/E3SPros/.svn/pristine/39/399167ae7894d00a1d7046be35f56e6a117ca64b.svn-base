<template>
  <el-form-item label="销售顾问">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "SalesConsultant",
  props: {
    SalesConsultant: {
      input: String
    }
  },
  data() {
    return {
      input: this.SalesConsultant.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.SalesConsultant.input;
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