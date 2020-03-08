<template>
  <el-form-item label="短信模板内容">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "MsgModelContent",
  props: {
    MsgModelContent: {
      input: String
    }
  },
  data() {
    return {
      input: this.MsgModelContent.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.MsgModelContent.input;
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
