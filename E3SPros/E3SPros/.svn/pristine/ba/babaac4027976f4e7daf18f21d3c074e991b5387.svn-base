<template>
  <el-form-item label="机构代码">
    
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "InstitutionCode",
  props: {
    InstitutionCode: {
      input: String
    }
  },
  data() {
    return {
      input: this.InstitutionCode.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.InstitutionCode.input;
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
