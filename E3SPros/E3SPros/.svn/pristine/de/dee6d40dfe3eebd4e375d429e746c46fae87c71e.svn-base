<template>
  <el-form-item label="督导名称">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "SupervisionName",
  props: {
    SupervisionName: {
      input: String
    }
  },
  data() {
    return {
      input: this.SupervisionName.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.SupervisionName.input;
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

