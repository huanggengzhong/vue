<template>
  <el-form-item>
    <el-form-item label="证件号码">
      <el-input v-model="input" :readonly="isreadonly" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
    </el-form-item>
  </el-form-item>
</template>

<script>
export default {
  name: "CertificateNumber",
  props: {
    CertificateNumber: {
      input: String,
      isreadonly: Boolean,
      
    }
  },
  data() {
    return {
      input: this.CertificateNumber.input,
      isreadonly:this.CertificateNumber.isreadonly,
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.CertificateNumber.input;
    },
    reset: function() {
      let that = this;
      that.input = "";
    }
  }
};
</script>

<style scoped>
</style>