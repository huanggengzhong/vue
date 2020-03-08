<template>
  <el-form-item label="竞品品牌英文名称">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "CompetBrandEn",
  props: {
    CompetBrandEn: {
      input: String
    }
  },
  data() {
    return {
      input: this.CompetBrandEn.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.CompetBrandEn.input;
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