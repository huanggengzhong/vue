<template>
  <el-form-item label="申请延期信息">
    <el-input v-model="input" type="textarea" class="long-textarea-style" resize="none" placeholder="请输入" suffix-icon="el-icon-search"></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "applyDelayMsg",
  props: {
    applyDelayMsg: {
      input: String
    }
  },
  data() {
    return {
      input: this.applyDelayMsg.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.applyDelayMsg.input;
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