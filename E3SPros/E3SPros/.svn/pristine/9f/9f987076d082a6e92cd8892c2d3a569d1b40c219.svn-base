<!--战败失控原因明细编号-->
<template>
<el-form-item label="明细编号">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
</el-form-item>
</template>

<script>
export default {
  name: "FailureDetailNumber",
  props: {
    FailureDetailNumber: {
      input: String
    }
  },
  data() {
    return {
      input: this.FailureDetailNumber.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.FailureDetailNumber.input;
    },
    reset: function() {
      let that = this;
      that.input = "";
    }
  }
};
</script>

<style  scoped>

</style>

