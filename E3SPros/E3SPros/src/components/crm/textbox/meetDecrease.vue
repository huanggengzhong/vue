<template>
  <el-form-item label="满足满减条件">
    <el-input v-model="input" placeholder="请输入" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "meetDecrease",
  props: {
    meetDecrease: {
      input: String
    }
  },
  data() {
    return {
      input: this.meetDecrease.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.meetDecrease.input;
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