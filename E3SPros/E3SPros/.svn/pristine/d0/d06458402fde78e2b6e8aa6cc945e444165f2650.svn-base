<template>
  <div>
    <el-form-item label="竞品品牌编码">
      <el-input v-model="input" placeholder="请输入" :disabled="disabled" suffix-icon="el-icon-search" clearable></el-input>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: "CompetingVehicleBrandCode",
  props: {
    CompetingVehicleBrandCode: {
      input: String,
      disabled:Boolean,
    }
  },
  data() {
    return {
      input: this.CompetingVehicleBrandCode.input,
      disabled:this.CompetingVehicleBrandCode.disabled,
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.CompetingVehicleBrandCode.input;
      disabled:this.CompetingVehicleBrandCode.disabled;
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

