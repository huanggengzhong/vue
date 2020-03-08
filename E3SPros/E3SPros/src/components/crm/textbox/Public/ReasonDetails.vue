<template>
  <el-form-item label="原因明细">
    <el-input type="textarea" :rows="2" placeholder="请输入" v-model="input"></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "ReasonDetails",
  props: {
    ReasonDetails: {
      input: String
    }
  },
  data() {
    return {
      input: this.ReasonDetails.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.ReasonDetails.input;
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
