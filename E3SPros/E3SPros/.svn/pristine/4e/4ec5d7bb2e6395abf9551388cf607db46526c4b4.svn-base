<template>
<el-form-item label="通话内容">
    <el-input v-model="input" placeholder="请输入"  suffix-icon="el-icon-search">></el-input>
</el-form-item>
</template>

<script>
export default {
  name:'CallContent',
  props:{
    CallContent:{
      input:String,
    }
  },
  data() {
    return {
      input: this.CallContent.input
    };
  },
  methods:{
    getData:function () {
      let that=this;
      that.input=this.CallContent.input
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

