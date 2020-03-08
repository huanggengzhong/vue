<template>
<el-form-item label="英文名字">
    <el-input v-model="input" :readonly="isreadonly" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
</el-form-item>
</template>

<script>
export default {
  name: "EnglishName",
    props:{
    EnglishName:{
      input:String,
      isreadonly: Boolean,
    }
  },
  data() {
    return {
      input: this.EnglishName.input,
      isreadonly:this.EnglishName.isreadonly,
    };
  },
  methods:{
    getData:function () {
      let that=this;
      that.input=this.EnglishName.input
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

