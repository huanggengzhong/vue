<template>
  <el-form-item label="可追加投诉时长">
    <el-input v-model="input" placeholder="请输入小时数" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "AdditionalComplaintDurationSetting",
  props: {
    AdditionalComplaintDurationSetting: {
      input: String
    }
  },
  data() {
    return {
      input: this.AdditionalComplaintDurationSetting.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.AdditionalComplaintDurationSetting.input;
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
