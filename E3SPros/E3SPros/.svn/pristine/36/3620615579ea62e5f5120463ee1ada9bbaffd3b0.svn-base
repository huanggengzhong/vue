<!--战败失控原因名称-->
<template>
 <el-form-item label="原因名称">
    <el-input v-model="input"   placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "FailureLostControllerReasonName",
  props: {
    FailureLostControllerReasonName: {
      input: String
    }
  },
  data() {
    return {
      input: this.FailureLostControllerReasonName.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.FailureLostControllerReasonName.input;
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

