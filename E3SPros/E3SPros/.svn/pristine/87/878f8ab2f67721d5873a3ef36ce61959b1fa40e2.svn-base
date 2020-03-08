<template>
  <el-form-item label="负责人">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "ResponsibleReople",
  props: {
    ResponsibleReople: {
      input: String
    }
  },
  data() {
    return {
      input: this.ResponsibleReople.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.ResponsibleReople.input;
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
