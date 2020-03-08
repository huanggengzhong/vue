
<template>
  <el-form-item label="申请延期原因">
    <el-input type="textarea" class="long-textarea-style" v-model="input" :rows="2" resize="none" placeholder="请输入"></el-input>
  </el-form-item>
</template>
<script>
export default {
  name: "applyDelayReasonArea",
  props: {
    applyDelayReasonArea: {
      input: String
    }
  },
  data() {
    return {
      input: this.applyDelayReasonArea.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.applyDelayReasonArea.input;
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