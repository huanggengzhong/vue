<template>
    <el-form-item label="处理内容">
      <el-input type="textarea" :rows="2" placeholder="请输入" class="long-textarea-style" resize="none" v-model="input" :readonly="isreadonly"></el-input>
    </el-form-item>
</template>

<script>
export default {
  name: "DealWithContent",
  props: {
    DealWithContent: {
      input: String,
      isreadonly: Boolean,
    }
  },
  data() {
    return {
      input: this.DealWithContent.input,
      isreadonly:this.DealWithContent.isreadonly,
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.DealWithContent.input;
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
