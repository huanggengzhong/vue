<template>
  <el-form-item label="旧车牌号">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "OldCarBrandNumber",
  props: {
    OldCarBrandNumber: {
      input: String
    }
  },
  data() {
    return {
      input: this.OldCarBrandNumber.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.OldCarBrandNumber.input;
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
