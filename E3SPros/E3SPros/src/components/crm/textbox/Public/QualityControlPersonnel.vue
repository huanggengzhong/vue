<template>
  <el-form-item label="质检人员">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "QualityControlPersonnel",
  props: {
    QualityControlPersonnel: {
      input: String
    }
  },
  data() {
    return {
      input: this.QualityControlPersonnel.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.QualityControlPersonnel.input;
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

