<template>
<el-form-item label="回访单号">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
</el-form-item>
</template>

<script>
export default {
  name: "ReturnVisitNum",
  props: {
    ReturnVisitNum: {
      input: String
    }
  },
  data() {
    return {
      input: this.ReturnVisitNum.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.ReturnVisitNum.input;
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