<template>
  <el-form-item label="VIN码">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" :disabled="isdisabled" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "VINCode",
  props: {
    VINCode: {
      value:String,
      input:String,
      isdisabled:Boolean
    },
  },
  data() {
    return {
      input: this.VINCode.input,
      isdisabled:this.VINCode.isdisabled
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.VINCode.input;
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
