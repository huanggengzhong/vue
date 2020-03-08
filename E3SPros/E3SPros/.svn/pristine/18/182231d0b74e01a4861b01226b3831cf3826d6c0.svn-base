<template>
  <el-form-item label="超长时长">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "SuperLongTime",
  props: {
    SuperLongTime: {
      input: String
    }
  },
  data() {
    return {
      input: this.SuperLongTime.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.SuperLongTime.input;
    },
    reset: function() {
      let that = this;
      that.input = "";
    }
  }
};
</script>

<style scoped>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
