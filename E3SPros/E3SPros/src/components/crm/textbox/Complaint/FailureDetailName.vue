<!--战败失控原因明细名称-->
<template>
<el-form-item label="明细名称">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
</el-form-item>
</template>

<script>
export default {
  name: "FailureDetailName",
  props: {
    FailureDetailName: {
      input: String
    }
  },
  data() {
    return {
      input: this.FailureDetailName.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.FailureDetailName.input;
    },
    reset: function() {
      let that = this;
      that.input = "";
    }
  }
};
</script>

<style  scoped>

</style>

