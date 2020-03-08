<template>
<el-form-item label="投诉内容">
    <el-input v-model="input" type="textarea" :rows="2" class="long-textarea-style" placeholder="请输入" resize="none" suffix-icon="el-icon-search"></el-input>
</el-form-item>
</template>

<script>
export default {
  name: "ComplainContent",
  props: {
    ComplainContent: {
      input: String
    }
  },
  data() {
    return {
      input: this.ComplainContent.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.ComplainContent.input;
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