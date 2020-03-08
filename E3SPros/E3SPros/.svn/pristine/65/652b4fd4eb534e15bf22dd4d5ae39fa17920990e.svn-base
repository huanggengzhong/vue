<template>
  <el-form-item label="类别编码">
    <el-input v-model="input" :disabled="isdisabled" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "TybeCode",
  props: {
    TybeCode: {
      input: String,
      isdisabled: Boolean,
    },
  },
  data() {
    return {
      input: this.TybeCode.input,
      isdisabled:this.TybeCode.isdisabled
    };
  },
  mounted: function() {
  },
  methods: { 
    getData: function() {
      let that = this;
      that.input = this.TybeCode.input;
      this.isdisabled=this.TybeCode.isdisabled
    },
    reset: function() {
      let that = this;
      that.input = "";
      this.isdisabled=false
    }
  }
};
</script>

<style scoped>
</style>