<template>
  <el-form-item label="介绍人电话">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "IntroducerPhone",
  props: {
    IntroducerPhone: {
      input: String
    }
  },
  data() {
    return {
      input: this.IntroducerPhone.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.IntroducerPhone.input;
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
