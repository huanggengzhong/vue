<template>
  <el-form-item label="用车人电话">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "UseCarPhone",
  props: {
    UseCarPhone: {
      input: String
    }
  },
  data() {
    return {
      input: this.UseCarPhone.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.UseCarPhone.input;
    },
    reset: function() {
      let that = this;
      that.input = "";
    }
  },

};
</script>

<style scoped>
</style>
