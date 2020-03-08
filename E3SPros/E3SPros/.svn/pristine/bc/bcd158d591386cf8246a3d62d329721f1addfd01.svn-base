<template>
  <el-form-item label="下线日期">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>
<script>
export default {
  name: "txt_OffLineDate",
    props: {
    OffLineDate: {
      input: String
    }
  },
  data() {
    return {
      input: this.OffLineDate.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.OffLineDate.input;
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