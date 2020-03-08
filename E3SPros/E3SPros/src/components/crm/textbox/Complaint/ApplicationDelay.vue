<template>
  <el-form-item label="申请延期次数">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "ApplicationDelay",
  props: {
    ApplicationDelay: {
      input: String
    }
  },
  data() {
    return {
      input: this.ApplicationDelay.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.ApplicationDelay.input;
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
