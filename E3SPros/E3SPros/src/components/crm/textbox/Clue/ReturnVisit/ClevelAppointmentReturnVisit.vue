<template>
<el-form-item label="C级预约回访设定" prop="cArriveReview.input">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
</el-form-item>
</template>

<script>
export default {
  name:'ClevelAppointmentReturnVisit',
  props:{
    ClevelAppointmentReturnVisit:{
      input:String,
    }
  },
  data() {
    return {
      input: this.ClevelAppointmentReturnVisit.input
    };
  },
  methods:{
    getData:function () {
      let that=this;
      that.input=this.ClevelAppointmentReturnVisit.input
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

