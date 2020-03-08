<template>
  <el-form-item label="互动名称">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "InteractiveName",
  props: {
    InteractiveName: {
      input: String
    }
  },
  data() {
    return {
      input: this.InteractiveName.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.InteractiveName.input;
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
