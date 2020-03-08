<template>
  <el-form-item label="法人电话">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>
<script>
export default {
  name: "txt_LegalTel",
    props: {
    LegalTel: {
      input: String
    }
  },
  data() {
    return {
      input: this.LegalTel.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.LegalTel.input;
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