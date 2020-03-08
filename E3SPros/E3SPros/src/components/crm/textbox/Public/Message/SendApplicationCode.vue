<template>
  <el-form-item label="发送申请码">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
    </el-form-item>
</template>

<script>
export default {
  name:'SendApplicationCode',
  props:{
    SendApplicationCode:{
      input:String,
    }
  },
  data() {
    return {
      input: this.SendApplicationCode.input
    };
  },
  methods:{
    getData:function () {
      let that=this;
      that.input=this.SendApplicationCode.input
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

