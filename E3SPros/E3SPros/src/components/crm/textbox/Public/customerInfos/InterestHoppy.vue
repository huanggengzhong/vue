<template>
  <el-form-item label="兴趣爱好">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "InterestHoppy",
  props: {
    InterestHoppy: {
      input: String
    }
  },
  data() {
    return {
      input: this.InterestHoppy.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.InterestHoppy.input;
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
