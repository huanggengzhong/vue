<template>
  <el-form-item label="评价项">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "AssessItem",
  props: {
    AssessItem: {
      input: String
    }
  },
  data() {
    return {
      input: this.AssessItem.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.AssessItem.input;
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
