<template>
  <el-form-item label="父类名称">
    <el-input v-model="input" placeholder="请输入内容" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "FatherClassName",
  props: {
    FatherClassName: {
      input: String
    }
  },
  data() {
    return {
      input: this.FatherClassName.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.FatherClassName.input;
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
