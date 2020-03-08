<template>
    <el-form-item label="竞品车型名称">
      <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
    </el-form-item>
</template>

<script>
export default {
  name:'CompetingModelName',
  props:{
    CompetingModelName:{
      input:String,
    }
  },
  data() {
    return {
      input: this.CompetingModelName.input
    };
  },
  mounted: function() {},
  methods:{
    getData:function () {
      let that=this;
      that.input=this.CompetingModelName.input
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