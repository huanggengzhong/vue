/*
 * @Author: xgz 
 * @Date: 2019-07-27 14:54:37 
 * @Last Modified by: //此处填修改人名字
 * @Last Modified time: 2019-07-27 15:00:40
 *添加重置事件
 */

<template>
  <el-form-item label="外呼次数">
    <el-input v-model="input" placeholder="请输入内容" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "NumberOfOutCalls",
  props: {
    NumberOfOutCalls: {
      input: String
    }
  },
  data() {
    return {
      input: this.NumberOfOutCalls.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.NumberOfOutCalls.input;
    },
    reset:function(){
      let that=this;
      this.input=""
    }
  }
};
</script>

<style scoped>
</style>

