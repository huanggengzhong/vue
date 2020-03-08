<template>
  <el-form-item label="创建门店">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>
<script>
export default {
  name: "txt_CreateStore",
    props: {
    CreateStore: {
      input: String
    }
  },
  data() {
    return {
      input: this.CreateStore.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.CreateStore.input;
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