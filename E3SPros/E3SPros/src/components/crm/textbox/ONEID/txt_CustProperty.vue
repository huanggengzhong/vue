<template>
  <el-form-item label="客户属性">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>
<script>
export default {
  name: "txt_CustProperty",
    props: {
    CustProperty: {
      input: String
    }
  },
  data() {
    return {
      input: this.CustProperty.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.CustProperty.input;
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