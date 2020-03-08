<template>
<el-form-item label="当前处理人">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
</el-form-item>
</template>

<script>
export default {
  name: "CurrentHandler",
  props: {
    CurrentHandler: {
      input: String
    },
    CurrentHandler1: {
      input: String,
      value:String,
      options:Array
    }
  },
  data() {
    return {
      input: this.CurrentHandler.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.CurrentHandler.input;
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