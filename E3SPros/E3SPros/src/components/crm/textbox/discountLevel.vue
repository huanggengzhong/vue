<template>
  <el-form-item label="折扣力度">
    <el-input v-model="input" placeholder="请输入" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "discountLevel",
  props: {
    discountLevel: {
      input: String
    }
  },
  data() {
    return {
      input: this.discountLevel.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.discountLevel.input;
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