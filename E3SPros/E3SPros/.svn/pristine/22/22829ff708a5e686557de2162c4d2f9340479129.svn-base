<template>
  <el-form-item label="用车人名">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>


<script>
export default {
  name: "UseCarName",
  props: {
    UseCarName: {
      input: String
    }
  },
  data() {
    return {
      input: this.UseCarName.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.UseCarName.input;
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
