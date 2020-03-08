<template>
  <el-form-item label="车系车型">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "CarSeriesCarModel",
  props: {
    CarSeriesCarModel: {
      input: String
    }
  },
  data() {
    return {
      input: this.CarSeriesCarModel.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.CarSeriesCarModel.input;
    },
    reset:function(){
      let that=this;
      that.input=''
    }
  }
};
</script>

<style scoped>

</style>
