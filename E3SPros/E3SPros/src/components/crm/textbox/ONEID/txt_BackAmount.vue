<template>
  <el-form-item label="回厂消费金额">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>
<script>
export default {
  name: "txt_BackAmount",
    props: {
    BackAmount: {
      input: String
    }
  },
  data() {
    return {
      input: this.BackAmount.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.BackAmount.input;
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