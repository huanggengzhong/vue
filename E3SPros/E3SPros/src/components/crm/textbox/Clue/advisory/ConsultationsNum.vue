<template>
<el-form-item label="咨询次数">
    <el-input v-model="input" placeholder="请输入"  suffix-icon="el-icon-search" clearable></el-input>
</el-form-item>
</template>

<script>
export default {
  name:'ConsultationsNum',
  props:{
    ConsultationsNum:{
      input:String,
    }
  },
  data() {
    return {
      input: this.ConsultationsNum.input
    };
  },
  methods:{
    getData:function () {
      let that=this;
      that.input=this.ConsultationsNum.input
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

