<template>
  <el-form-item label="电话前缀">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "PhonePrefix",
  props: {
    PhonePrefix: {
      input: String
    }
  },
  data() {
    return {
      input: this.PhonePrefix.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.PhonePrefix.input;
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