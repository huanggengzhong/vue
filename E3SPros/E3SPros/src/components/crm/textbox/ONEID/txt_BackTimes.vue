<template>
  <el-form-item label="累计回厂台次">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>
<script>
export default {
  name: "txt_BackTimes",
    props: {
    BackTimes: {
      input: String
    }
  },
  data() {
    return {
      input: this.BackTimes.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.BackTimes.input;
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