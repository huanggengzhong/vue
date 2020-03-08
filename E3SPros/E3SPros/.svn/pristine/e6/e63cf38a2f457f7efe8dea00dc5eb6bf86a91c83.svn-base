<template>
  <el-form-item label="H级预约回访设定" prop="hArriveReview.input">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "HlevelAppointmentReturnVisit",
  props: {
    HlevelAppointmentReturnVisit: {
      input: String
    }
  },
  data() {
    return {
      input: this.HlevelAppointmentReturnVisit.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.HlevelAppointmentReturnVisit.input;
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

