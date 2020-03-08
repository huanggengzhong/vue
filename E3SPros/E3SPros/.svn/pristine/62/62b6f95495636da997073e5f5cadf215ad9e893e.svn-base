<template>
  <el-form-item label="最大项数">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "MaximumQuantity",
  props: {
    MaximumQuantity: {
      input: String
    }
  },
  data() {
    return {
      input: this.MaximumQuantity.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.MaximumQuantity.input;
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

