<template>
  <el-form-item label="申请延期天数">
    <el-input v-model="input" placeholder="请输入天数" suffix-icon="el-icon-search" clearable></el-input>
     <span></span>
  </el-form-item>
</template>


<script>
export default {
  name: "ApplicationExtensionDays",
  props: {
    ApplicationExtensionDays: {
      input: String
    }
  },
  data() {
    return {
      input: this.ApplicationExtensionDays.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.ApplicationExtensionDays.input;
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
