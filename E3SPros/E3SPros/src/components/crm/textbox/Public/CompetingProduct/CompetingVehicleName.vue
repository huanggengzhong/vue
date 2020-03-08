<template>
  <el-form-item label="竞品车系">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "CompetingVehicleName",
  props: {
    CompetingVehicleName: {
      input: String
    }
  },
  data() {
    return {
      input: this.CompetingVehicleName.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.CompetingVehicleName.input;
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
