<template>
  <el-form-item label="清洗次数">
    <el-input v-model="input" placeholder="请输入内容" :disabled="isreadonly" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name:'NumberOfCleanings',
  props:{
    NumberOfCleanings:{
      input:String,
      isreadonly: Boolean,
    }
  },
  data() {
    return {
      input: this.NumberOfCleanings.input,
      isreadonly:this.NumberOfCleanings.isreadonly,
    };
  },
  methods:{
    getData:function () {
      let that=this;
      that.input=this.NumberOfCleanings.input
    },
    reset(){
      let that = this;
      that.input=''
    }
  }
};
</script>

<style scoped>

</style>

