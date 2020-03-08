<template>
  <el-form-item label="大屏编号">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>
<script>
export default {
  name: "txt_ScreenCode",
    props: {
    ScreenCode: {
      input: String
    }
  },
  data() {
    return {
      input: this.ScreenCode.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.ScreenCode.input;
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