<template>
  <el-form-item label="无效线索自动过滤时间" prop="autoInvalidDays.input">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "InvalidClueAutoFilterTime",
  props: {
    InvalidClueAutoFilterTime: {
      input: String
    }
  },
  data() {
    return {
      input: this.InvalidClueAutoFilterTime.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.InvalidClueAutoFilterTime.input;
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
