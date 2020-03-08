<template>
  <el-form-item label="推荐人电话">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "RecommendPhone",
  props: {
    RecommendPhone: {
      input: String
    }
  },
  data() {
    return {
      input: this.RecommendPhone.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.RecommendPhone.input;
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
