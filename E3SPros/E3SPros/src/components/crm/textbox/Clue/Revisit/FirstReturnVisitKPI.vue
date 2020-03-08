<template>
<el-form-item label="首次回访KPI" prop="frvk.input">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
</el-form-item>
</template>

<script>
export default {
  name: "FirstReturnVisitKPI",
  props: {
    FirstReturnVisitKPI: {
      input: String
    }
  },
  data() {
    return {
      input: this.FirstReturnVisitKPI.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.FirstReturnVisitKPI.input;
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