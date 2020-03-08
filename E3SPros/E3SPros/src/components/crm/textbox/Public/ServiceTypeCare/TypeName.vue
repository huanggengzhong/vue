<template>
  <el-form-item label="类别名称">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "TypeName",
  props: {
    TypeName: {
      input: String
    }
  },
  data() {
    return {
      input: this.TypeName.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.TypeName.input;
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
