<template>
  <el-form-item label="车牌号">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" :disabled="isdisabled" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "CarBrandNumber",
  props: {
    CarBrandNumber: {
      value:String,
      options:Array,
      input:String,
      isdisabled:Boolean
    }
  },
  data() {
    return {
      input: this.CarBrandNumber.input,
      isdisabled:this.CarBrandNumber.isdisabled
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.CarBrandNumber.input;
      that.isdisabled=this.CarBrandNumber.isdisabled
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
