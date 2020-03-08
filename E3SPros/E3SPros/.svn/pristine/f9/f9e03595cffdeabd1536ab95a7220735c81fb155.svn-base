<template>
  <el-form-item label="审核意见">
    <el-input type="textarea" :rows="2" class="long-textarea-style" placeholder="请输入" resize="none" v-model="input"></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "dealwithResult",
  props: {
    dealwithResult: {
      input: String
    }
  },
  data() {
    return {
      input: this.dealwithResult.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.dealwithResult.input;
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
