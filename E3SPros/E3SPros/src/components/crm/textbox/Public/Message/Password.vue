<template>
  <el-form-item label="密码">
    <el-input v-model="input" type="password" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "Passw ord",
  props: {
    Password: {
      input: String
    }
  },
  data() {
    return {
      input: this.Password.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.Password.input;
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
