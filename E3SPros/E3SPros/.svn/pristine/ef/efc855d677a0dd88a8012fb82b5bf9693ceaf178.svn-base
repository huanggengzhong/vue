<template>
  <el-form-item label="行驶证">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>
<script>
export default {
  name: "txt_DrivingLicense",
    props: {
    DrivingLicense: {
      input: String
    }
  },
  data() {
    return {
      input: this.DrivingLicense.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.DrivingLicense.input;
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