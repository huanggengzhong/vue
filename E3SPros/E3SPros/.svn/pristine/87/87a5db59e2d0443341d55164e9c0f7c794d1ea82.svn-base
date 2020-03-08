<template>
   <el-form-item label="延期申请原因">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
   </el-form-item>
</template>

<script>
export default {
  name:'ReasonForExtension',
  props:{
    ReasonForExtension:{
      input:String,
    }
  },
  data() {
    return {
      input: this.ReasonForExtension.input
    };
  },
  methods:{
    getData:function () {
      let that=this;
      that.input=this.ReasonForExtension.input
    },
      reset(){
      let that=this;
      that.input=''
    }
  }
};
</script>

<style scoped>

</style>

