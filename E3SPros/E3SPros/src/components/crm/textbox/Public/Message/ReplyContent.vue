<template>
  <el-form-item label="回复内容">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "ReplyContent",
  props: {
    ReplyContent: {
      input: String
    }
  },
  data() {
    return {
      input: this.ReplyContent.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.ReplyContent.input;
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

