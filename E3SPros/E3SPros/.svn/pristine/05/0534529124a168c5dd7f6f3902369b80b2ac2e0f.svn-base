<template>
  <el-form-item label="故障里程">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>
<script>
export default {
  name: "ErrorDistance",
  props: {
    ErrorDistance: {
      input: String
    }
  },
  data() {
    return {
      input: this.ErrorDistance.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.ErrorDistance.input;
    },
    reset: function() {
      let that = this;
      that.input = "";
    }
  }
};
</script>

<style  scoped>

</style>

