<template>
  <el-form-item label="端口">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "Port",
  props: {
    Port: {
      input: String
    }
  },
  data() {
    return {
      input: this.Port.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.Port.input;
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