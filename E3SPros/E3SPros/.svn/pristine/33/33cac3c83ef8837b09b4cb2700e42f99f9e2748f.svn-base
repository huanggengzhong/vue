<template>
  <el-form-item label="行驶里程">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name:'RunDistance',
  props:{
    RunDistance:{
      input:String,
    }
  },
  data() {
    return {
      input: this.RunDistance.input
    };
  },
  methods:{
    getData:function () {
      let that=this;
      that.input=this.RunDistance.input
    },
      reset(){
      let that=this;
      that.input=''
    }
  }
};
</script>

<style  scoped>

</style>

