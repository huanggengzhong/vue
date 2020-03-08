<template>
  <el-form-item label="选项顺序">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "OptionOrder",
  props: {
    OptionOrder: {
      input: String
    }
  },
  data() {
    return {
      input: this.OptionOrder.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.OptionOrder.input;
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

