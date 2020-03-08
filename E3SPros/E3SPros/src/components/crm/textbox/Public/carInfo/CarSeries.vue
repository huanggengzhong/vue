<template>
<el-form-item label="车系">
    <el-input v-model="input" :disabled="isdisable" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
</el-form-item>
</template>

<script>
export default {
  name: "CarSeries",
  props:{
    CarSeries:{
      input:String,
      isdisable:Boolean
    }
  },
  data() {
    return {
      input: this.CarSeries.input,
      isdisable:this.CarSeries.isdisable
      //input:''
    };
  },
  methods:{
    getData:function(){
      let that=this;
      that.input=this.CarSeries.input
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
