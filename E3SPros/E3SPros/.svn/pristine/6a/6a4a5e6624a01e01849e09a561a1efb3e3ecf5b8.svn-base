<template>
<el-form-item label="员工编号">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
</el-form-item>
</template>

<script>
export default {
  name:'EmployeeID',
  props:{
    EmployeeID:{
      value:String,
      options:Array,
      input:String
    }
  },
  data() {
    return {
      input: this.EmployeeID.input
    };
  },
  methods:{
    getData:function () {
      let that=this;
      that.input=this.EmployeeID.input
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

