<template>
<el-form-item label="咨询内容">
    <el-input v-model="input" class="long-textarea-style"  placeholder="请输入" suffix-icon="el-icon-search" ></el-input>
</el-form-item>
</template>


<script>
export default {
  name : 'AskContent',
   props: {
    AskContent: {
      input: String
    }
  },
  data() {
    return {
       input: this.AskContent.input
    };
  },
  methods:{
     getData: function() {
      let that = this;
      that.input = this.AskContent.input;
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