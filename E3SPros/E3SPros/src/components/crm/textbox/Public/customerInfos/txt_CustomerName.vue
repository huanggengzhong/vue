<!--
* 描述: 客户名称文本框
* 创建人: 
* 创建时间:
* 记录：
*  20190804 修改：添加readonly属性 dxuem
*2019年8月5日09:24:02 增加props,txt_CustomerName
-->
<template>
  <el-form-item label="客户名称">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" :readonly="isreadonly" :disabled="isdisabled" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "txt_CustomerName",
  props: {
    txt_CustomerName: {
      isreadonly: Boolean,
      input: String,
      isdisabled:Boolean
      //单纯初始化可以
      //   default: function () {
      //   return ''
      // }
    }
  },
  data() {
    return {
      input: this.txt_CustomerName.input,
      isreadonly: this.txt_CustomerName.isreadonly,
      isdisabled:this.txt_CustomerName.isdisabled
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.txt_CustomerName.input;
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