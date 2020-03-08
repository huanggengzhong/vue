<template>
  <el-form-item label="员工名称"> 
    <el-input v-model="input" placeholder="请输入内容" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "StaffName",
    props:{
    StaffName:{
      input:String
    }
  },
  data() {
    return {
      input: this.StaffName.input
    };
  },
  methods:{
    getData:function () {
      let that=this;
      that.input=this.StaffName.input
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

