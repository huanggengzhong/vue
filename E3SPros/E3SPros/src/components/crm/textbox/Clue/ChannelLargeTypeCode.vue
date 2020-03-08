<template>
  <el-form-item label="渠道大类编码">
    <el-input v-model="input" placeholder="请输入" :disabled="isdisabled" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "ChannelLargeTypeCode",
  props: {
    ChannelLargeTypeCode: {
      input: String,
      isdisabled: Boolean
    }
  },
  data() {
    return {
      input: this.ChannelLargeTypeCode.input,
      isdisabled:this.ChannelLargeTypeCode.isdisabled
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.ChannelLargeTypeCode.input;
    } ,
    reset:function(){
      let that=this;
      that.input=''
    }
  }
};
</script>

<style scoped>

</style>
