<template>
  <el-form-item label="申请申诉次数">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "ApplyAppealTimes",
  props: {
    ApplyAppealTimes: {
      input: String
    }
  },
  data() {
    return {
      input: this.ApplyAppealTimes.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.ApplyAppealTimes.input;
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
