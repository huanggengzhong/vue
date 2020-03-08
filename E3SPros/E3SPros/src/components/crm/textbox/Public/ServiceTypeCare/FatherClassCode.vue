<template>
  <el-form-item label="父类编码">
    <el-input v-model="input" placeholder="请输入内容" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "FatherClassCode",
  props: {
    FatherClassCode: {
      input: String
    }
  },
  data() {
    return {
      input: this.FatherClassCode.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.FatherClassCode.input;
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
