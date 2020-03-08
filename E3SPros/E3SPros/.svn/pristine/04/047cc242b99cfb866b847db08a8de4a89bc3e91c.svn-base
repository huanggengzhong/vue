<template>
  <el-form-item label="建单人">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "BuildListPeople",
  props: {
    BuildListPeople: {
      input: String
    }
  },
  data() {
    return {
      input: this.BuildListPeople.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.BuildListPeople.input;
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