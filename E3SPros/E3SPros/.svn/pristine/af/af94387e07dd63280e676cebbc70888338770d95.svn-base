<template>
<el-form-item label="车辆品牌">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" :disabled="isdisabled" clearable></el-input>
   </el-form-item>
</template>

<script>
export default {
  name:'CarBrand',
  props:{
    CarBrand:{
      value:String,
      options:Array,
      input:String,
      isdisabled:Boolean
    }
  },
  data() {
    return {
      input: this.CarBrand.input,
      isdisabled:this.CarBrand.isdisabled
    };
  },
  methods:{
    getData:function () {
      let that=this;
      that.input=this.CarBrand.input
    },
    reset: function() {
      let that = this;
      that.input = "";
    }
  }
};
</script>

<style scoped>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

