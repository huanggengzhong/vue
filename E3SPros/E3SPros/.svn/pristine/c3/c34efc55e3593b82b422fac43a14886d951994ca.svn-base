/*
 * @Author: xgz 
 * @Date: 2019-07-27 15:30:03 
 * @Last Modified by: //此处填修改人名字
 * @Last Modified time: 2019-07-27 15:31:44
 *添加重置
 */

<template>
  <el-form-item label="账号名称">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "AccountName",
  props: {
    AccountName: {
      input: String
    }
  },
  data() {
    return {
      input: this.AccountName.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.AccountName.input;
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

