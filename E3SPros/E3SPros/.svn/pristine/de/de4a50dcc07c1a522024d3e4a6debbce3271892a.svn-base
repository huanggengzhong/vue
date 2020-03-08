<!--战败失控原因编号-->
<template>
<el-form-item label="原因编号">
    <el-input v-model="input" :disabled="isdisabled" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
</el-form-item>
</template>

<script>
export default {
  name: "FailureLostControllerReasonNumber",
  props: {
    FailureLostControllerReasonNumber: {
      input: String,
      isdisabled: Boolean
    }
  },
  data() {
    return {
      input: this.FailureLostControllerReasonNumber.input,
      isdisabled: this.FailureLostControllerReasonNumber.isdisabled,
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.FailureLostControllerReasonNumber.input;
      that.isdisabled = this.FailureLostControllerReasonNumber.isdisabled;
    },
    reset: function() {
      let that = this;
      that.input = "";
      that.isdisabled=false;
    }
  }
};
</script>

<style  scoped>

</style>

