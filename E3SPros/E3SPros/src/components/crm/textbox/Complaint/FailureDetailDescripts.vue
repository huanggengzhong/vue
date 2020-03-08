<!--战败失控原因明细描述-->
<template>
  <el-form-item label="明细描述">
    <el-input v-model="input" placeholder="请输入" type="textarea" :rows="2"  suffix-icon="el-icon-search"></el-input>
  </el-form-item>
</template>

<script>
export default {
  name:'FailureDetailDescripts',
  props:{
    FailureDetailDescripts:{
      input:String,
    }
  },
  data() {
    return {
      input: this.FailureDetailDescripts.input
    };
  },
  methods:{
    getData:function () {
      let that=this;
      that.input=this.FailureDetailDescripts.input
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

