<template>
  <el-form-item label="接触方式名称">
    <el-input v-model="input" placeholder="请输入内容" suffix-icon="el-icon-search" :disabled="isdisabled" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "ContactMethodName",
  props: {
    ContactMethodName: {
      input: String,
      isdisabled:Boolean
      
    }
  },
  data() {
    return {
      input: this.ContactMethodName.input,
      isdisabled:this.ContactMethodName.isdisabled
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.ContactMethodName.input;
      this.isdisabled=this.ContactMethodName.isdisabled
    },
    reset: function() {
      let that = this;
      that.input = "";
      this.isdisabled=false;
    }
  }
};
</script>

<style scoped>
</style>

