<template>
  <el-form-item label="内容">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "Content",
  props: {
    Content: {
      input: String
    }
  },
  data() {
    return {
      input: this.Content.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.Content.input;
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