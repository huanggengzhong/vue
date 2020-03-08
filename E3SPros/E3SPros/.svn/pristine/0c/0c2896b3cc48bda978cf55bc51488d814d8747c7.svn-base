<template>
  <el-form-item label="编号">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "CodeNumber",
  props: {
    CodeNumber: {
      input: String
    }
  },
  data() {
    return {
      input: this.CodeNumber.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.CodeNumber.input;
    },
    reset(){
      let that=this;
      that.input=""
    }
  }
};
</script>

<style  scoped>

</style>
