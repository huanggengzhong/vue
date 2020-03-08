<template>
    <el-form-item label="坐席回答">
      <el-input type="textarea" :rows="2" placeholder="请输入" class="long-textarea-style" resize="none" v-model="input" :readonly="isreadonly"></el-input>
    </el-form-item>
</template>

<script>
export default {
  name: "CustomerServiceAnswer",
  props: {
    CustomerServiceAnswer: {
      input: String,
      isreadonly: Boolean,
    }
  },
  data() {
    return {
      input: this.CustomerServiceAnswer.input,
      isreadonly:this.CustomerServiceAnswer.isreadonly,
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.CustomerServiceAnswer.input;
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
