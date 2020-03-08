<template>
  <el-form-item label="网点简称">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "AgentAbbreviation",
  props: {
    AgentAbbreviation: {
      input: String
    }
  },
  data() {
    return {
      input: this.AgentAbbreviation.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.AgentAbbreviation.input;
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