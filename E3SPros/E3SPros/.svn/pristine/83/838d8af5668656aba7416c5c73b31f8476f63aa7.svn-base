<template>
  <el-form-item label="E级首次回访设定">
    <el-input v-model="input" placeholder="请输入"  suffix-icon="el-icon-search" clearable></el-input>
  <span>(小时)</span>
  </el-form-item>
</template>

<script>
export default {
  name:"ElevelFirstReturnVisitSetting",
  props: {
    EFRVS: {
      input: String
    }
  },
  data() {
    return {
      input: this.EFRVS.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.EFRVS.input;
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
