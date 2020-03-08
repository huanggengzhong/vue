<template>
  <el-form-item label="A级首次回访设定">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  <span>(小时)</span>
  </el-form-item>
</template>

<script>
export default {
  name: "AlevelFirstReturnVisitSetting",
  props: {
    AFRVS: {
      input: String
    }
  },
  data() {
    return {
      input: this.AFRVS.input
      // input: this.AlevelFirstReturnVisitSetting.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.AFRVS.input;
      // that.input = this.AlevelFirstReturnVisitSetting.input;
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
