/*
 * @Author: 
 * @Date: 
 * @Last Modified by: //此处填修改人名字
 * @Last Modified time: 2019-08-06 08:28:39
 */

<template>
  <el-form-item label="电话" prop="contactTel.input">
    <el-input v-model="input" placeholder="请输入" @blur="checkinput" suffix-icon="el-icon-search" :readonly="isreadonly" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "PhoneNumber",
  props: {
    PhoneNumber: {
      input: String,
      isreadonly: Boolean
    }
  },
  data() {
    return {
      input: this.PhoneNumber.input,
      isreadonly: this.PhoneNumber.isreadonly
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.PhoneNumber.input;
    },
    checkinput(){
      let that =this
      that.$emit("inputcheck")
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
