<template>
  <el-form-item label="官方微信号">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>
<script>
export default {
  name: "txt_ComWeChat",
    props: {
    ComWeChat: {
      input: String
    }
  },
  data() {
    return {
      input: this.ComWeChat.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.ComWeChat.input;
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