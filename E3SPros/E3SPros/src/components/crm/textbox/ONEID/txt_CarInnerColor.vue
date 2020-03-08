<template>
  <el-form-item label="内饰颜色">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>
<script>
export default {
  name: "txt_CarInnerColor",
  props: {
    CarInnerColor: {
      input: String
    }
  },
  data() {
    return {
      input: this.CarInnerColor.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.CarInnerColor.input;
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