<template>
  <el-form-item label="竞品车系编码">
    <el-input v-model="input" :disabled="isdisabled" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "CompetingVehicleCode",
  props: {
    CompetingVehicleCode: {
      input: String,
      isdisabled:Boolean
    }
  },
  data() {
    return {
      input: this.CompetingVehicleCode.input,
      isdisabled:this.CompetingVehicleCode.isdisabled
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.CompetingVehicleCode.input;
      that.isdisabled=this.CompetingVehicleCode.isdisabled;
    },
    reset: function() {
      let that = this;
      that.input = "";
      that.isdisabled=false
    }
  }
};
</script>

<style scoped>
</style>
