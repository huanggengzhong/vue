<template>
<el-form-item label="规则名称">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
</el-form-item>
</template>

<script>
export default {
  name: "RuleName",
  props:{
    RuleName:{
      input:String
    }
  },
  data() {
    return {
      input: this.RuleName.input
    };
  },
  methods:{
    getData:function(){
      let that=this;
      that.input=this.RuleName.input
    },
    reset: function() {
      let that = this;
      that.input = "";
    }
  }
};
</script>

<style scoped>

</style>
