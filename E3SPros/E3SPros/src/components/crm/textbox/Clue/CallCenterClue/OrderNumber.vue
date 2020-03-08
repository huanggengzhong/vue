<template>
   <el-form-item label="订单号">
    <el-input v-model="input" placeholder="请输入" :readonly="isreadonly" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "OrderNumber",
    props:{
    OrderNumber:{
      input:String,
      isreadonly: Boolean,
    }
  },
  data() {
    return {
      input: this.OrderNumber.input,
      isreadonly:this.OrderNumber.isreadonly,
    };
  },
  methods:{
    getData:function () {
      let that=this;
      that.input=this.OrderNumber.input
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

