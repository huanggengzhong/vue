<template>
  <el-form-item label="渠道小类编码">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name:'ChannelSmallTypeCode',
  props:{
    ChannelSmallTypeCode:{
      input:String,
    }
  },
  data() {
    return {
      input: this.ChannelSmallTypeCode.input
    };
  },
  methods:{
    getData:function () {
      let that=this;
      that.input=this.ChannelSmallTypeCode.input
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
