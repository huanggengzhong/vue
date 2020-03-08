<template>
  <el-form-item label="建档日期">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>
<script>
export default {
  name: "txt_CreatedDate",
    props: {
    CreatedDate: {
      input: String
    }
  },
  data() {
    return {
      input: this.CreatedDate.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.CreatedDate.input;
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