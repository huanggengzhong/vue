<template>
  <el-form-item label="A级预约回访设定" prop="aArriveReview.input">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name:'A_AppointReturnVisitSet',
  props:{
    A_AppointReturnVisitSet:{
      input:String,
    }
  },
  data() {
    return {
      input: this.A_AppointReturnVisitSet.input
    };
  },
  methods:{
    getData:function () {
      let that=this;
      that.input=this.A_AppointReturnVisitSet.input
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

