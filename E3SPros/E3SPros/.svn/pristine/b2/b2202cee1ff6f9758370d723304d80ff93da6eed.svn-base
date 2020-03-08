<template>
  <el-form-item label="满足满赠条件">
    <el-input v-model="input" placeholder="请输入" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "meetSend",
  props: {
    meetSend: {
      input: String
    }
  },
  data() {
    return {
      input: this.meetSend.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.meetSend.input;
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