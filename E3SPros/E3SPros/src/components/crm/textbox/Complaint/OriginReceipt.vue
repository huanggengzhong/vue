<template>
   <el-form-item label="来源单据">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
   </el-form-item>
</template>

<script>
export default {
  name:'OriginReceipt',
  props:{
    OriginReceipt:{
      input:String
    }
  },
  data() {
    return {
      input: this.OriginReceipt.input
    }
  },
  methods:{
    getData:function(){
      let that=this;
      that.input=this.OriginReceipt.input
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