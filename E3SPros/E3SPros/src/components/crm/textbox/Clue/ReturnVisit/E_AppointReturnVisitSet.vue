<template>
<el-form-item label="E级预约回访设定" prop="eArriveReview.input">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
</el-form-item>
</template>

<script>
export default {
  name:'E_AppointReturnVisitSet',
  props:{
    E_AppointReturnVisitSet:{
      input:String,
    }
  },
  data() {
    return {
      input: this.E_AppointReturnVisitSet.input
    };
  },
  methods:{
    getData:function () {
      let that=this;
      that.input=this.E_AppointReturnVisitSet.input
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

