<template>
  <el-form-item label="发动机号">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" :disabled="disabled" clearable></el-input>
  </el-form-item>
</template>


<script>
export default {
  name:'EngineNumber',
  props:{
    EngineNumber:{
      value:String,
      options:Array,
      input:String,
      disabled:Boolean
    }
  },
  data() {
    return {
      input: this.EngineNumber.input,
      disabled:this.EngineNumber.disabled
    };
  },
  methods:{
    getData:function () {
      let that=this;
      that.input=this.EngineNumber.input
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