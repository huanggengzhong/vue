<template>
  <el-form-item label="B级首次回访设定">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  <span>(小时)</span>
  </el-form-item>
</template>

<script>
export default {
  name:"BlevelFirstReturnVisitSetting",
  props: {
    BFRVS: {
      input: String
    }
  },
  data() {
    return {
      input: this.BFRVS.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.BFRVS.input;
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
