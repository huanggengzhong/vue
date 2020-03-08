<template>
  <el-form-item label="申请申诉天数">
    <el-input v-model="input" placeholder="请输入天数" suffix-icon="el-icon-search" clearable></el-input>
     <span></span>
  </el-form-item>
</template>


<script>
export default {
  name: "ApplicationGrievanceDays",
  props: {
    ApplicationGrievanceDays: {
      input: String
    }
  },
  data() {
    return {
      input: this.ApplicationGrievanceDays.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.ApplicationGrievanceDays.input;
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
