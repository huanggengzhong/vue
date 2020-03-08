<template>
  <el-form-item :label="labelname">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" :disabled="isdisabled" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "ComplaintTimes",
  props: {
    ComplaintTimes: {
      input: String,
      isdisabled:Boolean,
      labelname: {
        type:String,
        default:"投诉次数"
      }
    },
  },
  data() {
    return {
      input: this.ComplaintTimes.input,
      labelname:(this.ComplaintTimes.labelname==undefined?"投诉次数":this.ComplaintTimes.labelname),
      isdisabled:(this.ComplaintTimes.isdisabled==undefined?false:this.ComplaintTimes.isdisabled),
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.ComplaintTimes.input;
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