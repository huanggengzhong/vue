<template>
  <el-form-item label="申请人">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name:'Applicant',
  props:{
    Applicant:{
      input:String,
    }
  },
  data() {
    return {
      input: this.Applicant.input
    };
  },
  methods:{
    getData:function () {
      let that=this;
      that.input=this.Applicant.input
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

