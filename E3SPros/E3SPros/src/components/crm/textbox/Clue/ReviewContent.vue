<template>
  <el-form-item label="审核内容">
    <el-input v-model="input" type="textarea" :rows="5"  placeholder="请输入" clearable></el-input>
  </el-form-item>
</template>



<script>
export default {
  name:'ReviewContent',
  props:{
    ReviewContent:{
      input:String,
    }
  },
  data() {
    return {
      input: this.ReviewContent.input
    };
  },
  methods:{
    getData:function () {
      let that=this;
      that.input=this.ReviewContent.input
    },
    reset: function() {
      let that = this;
      that.input = "";
    }
  }
};
</script>

<style scoped>

</style>

