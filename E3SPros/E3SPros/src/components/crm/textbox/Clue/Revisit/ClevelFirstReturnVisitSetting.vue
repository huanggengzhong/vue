<template>
  <el-form-item label="C级首次回访设定">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  <span>(小时)</span>
  </el-form-item>
</template>

<script>
export default {
  name:"ClevelFirstReturnVisitSetting",
  props: {
    CFRVS: {
      input: String
    }
  },
  data() {
    return {
      input: this.CFRVS.input
      // input: this.ClevelFirstReturnVisitSetting.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.CFRVS.input;
      // that.input = this.ClevelFirstReturnVisitSetting.input;
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
