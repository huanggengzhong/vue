<template>
  <el-form-item label="识别码">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "RecognizeCode",
  props: {
    RecognizeCode: {
      input: String
    }
  },
  data() {
    return {
      input: this.RecognizeCode.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.RecognizeCode.input;
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
