<template>
  <el-form-item label="关注点">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>
<script>
export default {
  name: "txt_Focus",
    props: {
    Focus: {
      input: String
    }
  },
  data() {
    return {
      input: this.Focus.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.Focus.input;
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