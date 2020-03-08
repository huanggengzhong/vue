<template>
  <el-form-item label="互动编码">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "InteractiveCode",
  props: {
    InteractiveCode: {
      input: String
    }
  },
  data() {
    return {
      input: this.InteractiveCode.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.InteractiveCode.input;
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