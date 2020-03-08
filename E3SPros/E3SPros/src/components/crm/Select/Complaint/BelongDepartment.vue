<template>
<el-form-item label="所属部门">
    <el-input v-model="input" placeholder="请输入内容" clearable></el-input>
</el-form-item>
</template>

<script>
export default {
  name: "BelongDepartment",
  props: {
    BelongDepartment: {
      input: String
    }
  },
  data() {
    return {
      input: this.BelongDepartment.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.BelongDepartment.input;
    }
  }
};
</script>

<style scoped>

</style>