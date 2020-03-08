<template>
  <el-form-item label="短信内容">
    <el-input type="textarea" resize="none" placeholder="请输入" v-model="input"></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "TxtArea_MsgContent",
  props: {
    TxtArea_MsgContent: {
      input: String
    }
  },
  data() {
    return {
      input: this.TxtArea_MsgContent.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.TxtArea_MsgContent.input;
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
