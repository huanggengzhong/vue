<template>
    <el-form-item label="摘要">
      <el-input type="textarea" :rows="2" class="long-textarea-style" placeholder="请输入" resize="none" v-model="input" :readonly="isreadonly"></el-input>
    </el-form-item>
</template>

<script>
export default {
  name: "Abstract",
  props: {
    Abstract: {
      input: String,
      isreadonly: Boolean,
    }
  },
  data() {
    return {
      input: this.Abstract.input,
      isreadonly:this.Abstract.isreadonly,
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.Abstract.input;
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
