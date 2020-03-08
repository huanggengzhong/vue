<template>
  <el-form-item label="选项内容">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "OptionContent",
  props: {
    OptionContent: {
      input: String
    }
  },
  data() {
    return {
      input: this.OptionContent.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.OptionContent.input;
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

