<template>
  <el-form-item label="减">
    <el-input v-model="input" placeholder="请输入" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "decreaseJ",
  props: {
    decreaseJ: {
      input: String
    }
  },
  data() {
    return {
      input: this.decreaseJ.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.decreaseJ.input;
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