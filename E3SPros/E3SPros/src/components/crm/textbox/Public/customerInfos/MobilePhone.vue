<template>
  <el-form-item label="移动电话">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "MobilePhone",
  props: {
    MobilePhone: {
      input: String
    }
  },
  data() {
    return {
      input: this.MobilePhone.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.MobilePhone.input;
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
