<template>
  <el-form-item label="号码归属地">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" :disabled="isdisable" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "NumberAttributtion",
  props: {
    NumberAttributtion: {
      input: String,
      isdisable:Boolean
    }
  },
  data() {
    return {
      input: this.NumberAttributtion.input,
      isdisable:this.NumberAttributtion.isdisable
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.NumberAttributtion.input;
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