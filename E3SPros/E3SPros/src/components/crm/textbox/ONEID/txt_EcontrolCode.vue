<template>
  <el-form-item label="电控编号">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>
<script>
export default {
  name: "txt_EcontrolCode",
    props: {
    EcontrolCode: {
      input: String
    }
  },
  data() {
    return {
      input: this.EcontrolCode.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.EcontrolCode.input;
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