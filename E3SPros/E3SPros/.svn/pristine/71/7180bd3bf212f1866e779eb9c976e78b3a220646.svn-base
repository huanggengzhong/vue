<template>
  <el-form-item label="现金券面值">
    <el-input v-model="input" placeholder="请输入" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "cashValue",
  props: {
    cashValue: {
      input: String
    }
  },
  data() {
    return {
      input: this.cashValue.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.cashValue.input;
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