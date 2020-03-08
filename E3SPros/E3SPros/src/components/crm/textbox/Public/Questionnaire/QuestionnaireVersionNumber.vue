<template>
  <el-form-item label="问卷版本号">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "QuestionnaireVersionNumber",
  props: {
    QuestionnaireVersionNumber: {
      input: String
    }
  },
  data() {
    return {
      input: this.QuestionnaireVersionNumber.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.QuestionnaireVersionNumber.input;
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
