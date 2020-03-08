<template>
  <el-form-item label="题目名称">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "TitleName",
  props: {
    TitleName: {
      input: String
    }
  },
  data() {
    return {
      input: this.TitleName.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.TitleName.input;
    },
    reset:function(){
      let that=this
      that.input=''
    }
  }
};
</script>

<style scoped>
</style>
