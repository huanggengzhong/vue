<template>
  <el-form-item label="责任区名称">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "ResponsibleDistrictName",
  props: {
    ResponsibleDistrictName: {
      input: String
    }
  },
  data() {
    return {
      input: this.ResponsibleDistrictName.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.ResponsibleDistrictName.input;
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

