<template>
  <el-form-item label="公司全称">
    <el-input v-model="input" :readonly="isreadonly" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "ComanyFullName",
  props: {
    ComanyFullName: {
      input: String,
      isreadonly: Boolean,
    }
  },
  data() {
    return {
      input: this.ComanyFullName.input,
      isreadonly:this.ComanyFullName.isreadonly,
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.ComanyFullName.input;
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