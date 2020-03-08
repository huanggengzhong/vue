<template>
  <el-form-item label="申请延期原因">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "applyDelayReason",
  props: {
    applyDelayReason: {
      input: String
    }
  },
  data() {
    return {
      input: this.applyDelayReason.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.applyDelayReason.input;
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