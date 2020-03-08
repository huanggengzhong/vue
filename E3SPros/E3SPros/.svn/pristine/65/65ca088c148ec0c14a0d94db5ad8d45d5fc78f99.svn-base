<template>
  <el-form-item label="竞品品牌" props="Cvbc.input">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "CompetingVehiclleBrandName",
  props: {
    CompetingVehiclleBrandName: {
      input: String
    }
  },
  data() {
    return {
      input: this.CompetingVehiclleBrandName.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.CompetingVehiclleBrandName.input;
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
