<template>
   <el-form-item label="订单金额" >
          <el-input  v-model="input" :readonly="isreadonly" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
   </el-form-item>    
</template>

<script>
export default {
  name:'OrderAmount',
  props:{
    OrderAmount:{
      input:String,
      isreadonly: Boolean,
    }
  },
  data() {
    return {
      input: this.OrderAmount.input,
      isreadonly:this.OrderAmount.isreadonly
    };
  },
  methods:{
    getData:function () {
      let that=this;
      that.input=this.OrderAmount.input
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

