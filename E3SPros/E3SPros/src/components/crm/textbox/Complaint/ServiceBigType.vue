<template>
  <el-form-item label="服务大类">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>


<script>
export default {
  name:'ServiceBigType',
  props:{
    ServiceBigType:{
      input:String
    }
  },
  data() {
    return {
      input: this.ServiceBigType.input
    }
  },
  methods:{
    getData:function(){
      let that=this;
      that.input=this.ServiceBigType.input
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
