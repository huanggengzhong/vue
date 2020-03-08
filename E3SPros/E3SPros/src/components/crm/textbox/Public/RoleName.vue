<template>
  <el-form-item label="角色名称">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name:'RoleName',
  props:{
    RoleName:{
      input:String
    }
  },
  data() {
    return {
      input: this.RoleName.input
    }
  },
  methods:{
    getData:function(){
      let that=this;
      that.input=this.RoleName.input
    },
    reset: function() {
      let that = this;
      that.input = "";
    }
  }
}
</script>

<style scoped>

</style>
