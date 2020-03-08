<template>
  <el-form-item label="B级预约回访设定" prop="bArriveReview.input">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "BLevelReserveReturnVisitSetting",
  props: {
    BLevelReserveReturnVisitSetting: {
      input: String
    }
  },
  data() {
    return {
      input: this.BLevelReserveReturnVisitSetting.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.BLevelReserveReturnVisitSetting.input;
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

