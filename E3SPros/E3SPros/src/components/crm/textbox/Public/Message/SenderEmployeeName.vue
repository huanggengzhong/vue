<template>
  <el-form-item label="发送人员工名">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
    </el-form-item>
</template>

<script>
export default {
  name:'SenderEmployeeName',
  props:{
    SenderEmployeeName:{
      input:String,
    }
  },
  data() {
    return {
      input: this.SenderEmployeeName.input
    };
  },
  methods:{
    getData:function () {
      let that=this;
      that.input=this.SenderEmployeeName.input
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

