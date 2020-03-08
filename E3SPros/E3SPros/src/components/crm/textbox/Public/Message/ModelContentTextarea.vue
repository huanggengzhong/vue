<template>
  <el-form-item label="模板内容">
    <el-input type="textarea" class="long-textarea-style" resize="none" :rows="2" placeholder="请输入" v-model="input"></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "ModelContentTextarea",
  props: {
    ModelContentTextarea: {
      input: String
    }
  },
  data() {
    return {
      input: this.ModelContentTextarea.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.ModelContentTextarea.input;
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
