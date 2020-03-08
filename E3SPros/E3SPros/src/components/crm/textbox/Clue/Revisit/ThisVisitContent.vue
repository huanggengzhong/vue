<template>
  <el-form-item label="本次回访">
    <el-input v-model="input" type="textarea" :rows="2"  placeholder="请输入" resize="none" suffix-icon="el-icon-search"> </el-input>
  </el-form-item>
</template>

<script>
export default {
name: "ThisVisitContent",
    props:{
    ThisVisitContent:{
      input:String,
    }
  },
  data() {
    return {
      input: this.ThisVisitContent.input
    };
  },
  methods:{
    getData:function () {
      let that=this;
      that.input=this.ThisVisitContent.input
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
