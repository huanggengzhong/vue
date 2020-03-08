<template>
<!-- 延期申请原因_多行文本框 -->
<el-form-item label="延期申请原因">
    <el-input v-model="input" type="textarea" :rows="2" placeholder="请输入" ></el-input>
</el-form-item>
</template>

<script>
export default {
  name: "DeferredApplicationReason_multi",
  props:{
    DeferredApplicationReason_multi:{
      input:String
    }
  },
  data() {
    return {
      input: this.DeferredApplicationReason_multi.input
    };
  },
  methods:{
    getData:function(){
      let that=this;
      that.input=this.DeferredApplicationReason_multi.input
    },
    reset:function(){
      let that=this;
      that.input=''
    }
  }
};
</script>

<style scoped>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
