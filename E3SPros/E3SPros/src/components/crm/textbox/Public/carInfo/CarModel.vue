<template>
<el-form-item label="车型">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" :disabled="isdisabled" clearable></el-input>
</el-form-item>
</template>

<script>
export default {
  name: "CarModel",
  props: {
    CarModel: {
      input: String,
      isdisabled:Boolean
    }
  },
  data() {
    return {
      input: this.CarModel.input,
      isdisabled:this.CarModel.isdisabled
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.CarModel.input;
    },
     reset(){
      let that=this;
      that.input=""
    }
  }
};
</script>

<style scoped>
</style>
