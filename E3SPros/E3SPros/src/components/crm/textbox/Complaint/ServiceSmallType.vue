<template>
  <el-form-item label="服务小类">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>


<script>
export default {
  name:'ServiceSmallType',
  props:{
    ServiceSmallType:{
      value:String,
      options:Array,
      input:String
    }
  },
  data() {
    return {
      input: this.ServiceSmallType.input
    }
  },
  methods:{
    getData:function(){
      let that=this;
      that.input=this.ServiceSmallType.input
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