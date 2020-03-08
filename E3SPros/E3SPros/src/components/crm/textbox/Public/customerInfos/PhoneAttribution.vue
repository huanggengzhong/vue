<template>
  <el-form-item label="号码归属">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "PhoneAttribution",
  props: {
    PhoneAttribution: {
      value: String,
      options: Array,
      input: String
    }
  },
  data() {
    return {
      input: this.PhoneAttribution.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.PhoneAttribution.input;
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
