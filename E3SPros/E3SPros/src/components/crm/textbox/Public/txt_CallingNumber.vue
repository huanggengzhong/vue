<template>
  <el-form-item label="主叫号码">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "txt_CallingNumber",
  props: {
    txt_CallingNumber: {
      input: String
    }
  },
  data() {
    return {
      input: this.txt_CallingNumber.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.txt_CallingNumber.input;
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
