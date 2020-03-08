/*
 * @Author: xgz 
 * @Date: 2019-07-27 14:09:08 
 * @Last Modified by: //此处填修改人名字
 * @Last Modified time: 2019-09-18 11:47:46
 */

<template>

    <el-form-item class="long-label" label="投诉途径名称" :prop="ComplaintRouteNameAddinput">
      <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
    </el-form-item>

</template>

<script>
export default {
  name: "ComplaintRouteName",
  props: {
    ComplaintRouteName: {
      input: String,
      ComplaintRouteNameAddinput: String
    },
    ComplaintRouteNamegz: {
      input: String
    }
  },
  data() {
    return {
      ComplaintRouteNameAddinput: this.ComplaintRouteName
        .ComplaintRouteNameAddinput,
      input: this.ComplaintRouteName.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.ComplaintRouteName.input;
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

