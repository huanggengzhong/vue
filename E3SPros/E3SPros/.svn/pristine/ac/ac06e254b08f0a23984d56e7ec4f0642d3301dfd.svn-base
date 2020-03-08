<template>
  <el-form-item label="节点名称">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "NodePointName",
  props: {
    NodePointName: {
      input: String
    }
  },
  data() {
    return {
      input: this.NodePointName.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.NodePointName.input;
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
