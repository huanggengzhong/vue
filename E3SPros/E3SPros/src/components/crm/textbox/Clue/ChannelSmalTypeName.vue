<template>
<div>
  <el-form-item label="渠道小类名称" :prop="checkprop">
    <el-input v-model="input" placeholder="请输入" :disabled="isdisabled" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</div>
</template>

<script>
export default {
  name: "ChannelSmalTypeName",
  props: {
    ChannelSmalTypeName: {
      input: String,
      checkprop:String,
      isdisabled:Boolean
    }
  },
  data() {
    return {
      input: this.ChannelSmalTypeName.input,
      checkprop:this.ChannelSmalTypeName.checkprop,
      isdisabled:this.ChannelSmalTypeName.isdisabled
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.ChannelSmalTypeName.input;
    },
    reset: function() {
      let that = this;
      that.input = "";
    }
  }
};
</script>

<style scoped>
</style>

