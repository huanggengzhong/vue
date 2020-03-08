<template>
  <el-form-item :label="labelname">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" :disabled="isdisabled" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "ServiceMenuNumber",
  props: {
    ServiceMenuNumber: {
      input: String,
      isdisabled:Boolean,
      labelname: {
        type:String,
        default:"服务单号"
      }
    },
  },
  data() {
    return {
      input: this.ServiceMenuNumber.input,
      labelname:(this.ServiceMenuNumber.labelname==undefined?"服务单号":this.ServiceMenuNumber.labelname),
      isdisabled:(this.ServiceMenuNumber.isdisabled==undefined?false:this.ServiceMenuNumber.isdisabled),
    };
  },
  mounted: function() {
  },
  methods: { 
    getData: function() {
      let that = this;
      that.input = this.ServiceMenuNumber.input;
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