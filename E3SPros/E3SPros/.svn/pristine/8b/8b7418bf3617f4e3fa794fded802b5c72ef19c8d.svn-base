<template>
  <el-form-item label="意见反馈">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>


<script>
export default {
  name: "ThoughtFeedback",
  props: {
    ThoughtFeedback: {
      input: String
    }
  },
  data() {
    return {
      input: this.ThoughtFeedback.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.ThoughtFeedback.input;
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

