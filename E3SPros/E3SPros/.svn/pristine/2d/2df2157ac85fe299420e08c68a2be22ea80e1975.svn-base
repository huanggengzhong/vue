<template>
  <el-form-item label="短信发送内容">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search"></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "MsgSendContent",
  props: {
    MsgSendContent: {
      input: String
    }
  },
  data() {
    return {
      input: this.MsgSendContent.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.MsgSendContent.input;
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

