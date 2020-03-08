<template>
  <el-form-item label="责任区编码">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "ResponsibilityAreaCode",
  props: {
    ResponsibilityAreaCode: {
      input: String
    }
  },
  data() {
    return {
      input: this.ResponsibilityAreaCode.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.ResponsibilityAreaCode.input;
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

