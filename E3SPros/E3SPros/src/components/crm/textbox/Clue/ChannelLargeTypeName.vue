<template>
  <el-form-item label="渠道大类名称">
    <el-input v-model="input" placeholder="请输入" :disabled="isdisabled" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "ChannelLargeTypeName",
  props: {
    ChannelLargeTypeName: {
      input: String,
      isdisabled:Boolean
      
    }
  },
  data() {
    return {
      input: this.ChannelLargeTypeName.input,
      isdisabled:this.ChannelLargeTypeName.isdisabled
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.ChannelLargeTypeName.input;
    },
    reset:function(){
      let that=this;
      that.input=''
    }
  }
}
</script>

<style scoped>

</style>

