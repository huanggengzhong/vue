<template>
  <el-form-item label="已回访自动失效时效设置">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  <span>(小时)</span>
  </el-form-item>
</template>

<script>
export default {
name: "ReturnedAutomaticAgingSettings",
    props:{
    ReturnedAutomaticAgingSettings:{
      input:String,
    }
  },
  data() {
    return {
      input: this.ReturnedAutomaticAgingSettings.input
    };
  },
  methods:{
    getData:function () {
      let that=this;
      that.input=this.ReturnedAutomaticAgingSettings.input
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
