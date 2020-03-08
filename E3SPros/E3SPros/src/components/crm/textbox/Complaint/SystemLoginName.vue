<template>
  <el-form-item label="系统登录名">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name:'SystemLoginName',
  props:{
    SystemLoginName:{
      input:String
    }
  },
  data() {
    return {
      input: this.SystemLoginName.input
    }
  },
  methods:{
    getData:function(){
      let that=this;
      that.input=this.SystemLoginName.input
    },
    reset(){
      let that=this;
      that.input=''
    }
  }
}
</script>

<style scoped>

</style>
