<template>
    <el-form-item label="竞品车型编码">
      <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
    </el-form-item>
</template>

<script>
export default {
  name:'CompetingModelCode',
  props:{
    CompetingModelCode:{
      input:String,
    }
  },
  data() {
    return {
      input: this.CompetingModelCode.input
    };
  },
  mounted: function() {},
  methods:{
    getData:function () {
      let that=this;
      that.input=this.CompetingModelCode.input
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